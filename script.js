const API_URL =
  "https://script.google.com/macros/s/AKfycbyYizYvdalOeiYDi1OKZggmks-_1DavbRt7qo-koTwdZiOCMBzGykaqw-Qb-tFhVGyrSQ/exec";

async function loadData() {

    try {

        const response = await fetch(API_URL, {
            method: "GET",
            cache: "no-cache"
        });

        const data = await response.json();

        document.getElementById("covering").innerHTML =
            data.covering || "";

        const splitsEl = document.getElementById("splits");

        // Reset classes
        splitsEl.className = "splits";

        // Add status class
        if (data.status) {
            splitsEl.classList.add(data.status);
        }

        // Load split track content
        splitsEl.innerHTML = data.splits || "";

        // Hide blank rows after content loads
        document.querySelectorAll(".row").forEach(row => {

            const nameDiv = row.querySelector(".name");

            if (!nameDiv) return;

            const text = nameDiv.textContent.trim();

            if (
                text === "#N/A" ||
                text === "" ||
                text === "�"
            ) {
                row.style.display = "none";
            }
        });

    } catch (error) {

        console.error("Failed to load covering data", error);

        document.getElementById("covering").innerHTML = `
            <div style="padding:20px;">
                <h2>Unable to load covering information</h2>
                <p>Please refresh the page and try again.</p>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    // Load immediately
    loadData();

    // Refresh data every 2 minutes
    setInterval(loadData, 120000);

    // Dynamic footer year
    document.getElementById("year").textContent =
        new Date().getFullYear();
});

function scaleForPrint() {

    const a4Height = 1122; // A4 at 96dpi
    const a4Width = 794;

    document.querySelectorAll('.page, .splits.display_splits').forEach(el => {

        // Reset any previous scaling
        el.style.transform = '';
        el.style.transformOrigin = '';

        const rect = el.getBoundingClientRect();

        const scaleX = a4Width / rect.width;
        const scaleY = a4Height / rect.height;

        const scale = Math.min(scaleX, scaleY, 1);

        el.style.transform = `scale(${scale})`;
        el.style.transformOrigin = 'top left';

        el.dataset.printScale = scale;
    });
}

function resetPrintScale() {

    document.querySelectorAll('.page, .splits').forEach(el => {
        el.style.transform = '';
        el.style.transformOrigin = '';
    });
}

window.addEventListener('beforeprint', scaleForPrint);
window.addEventListener('afterprint', resetPrintScale);
