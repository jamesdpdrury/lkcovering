

// Listen for messages from the iframe
window.addEventListener('message', function(event) {
  var data = event.data;

 // Check if the data is of expected type/format
 if (typeof data === 'object' && data !== null) {
    // Update the content of the divs with the received data
    document.getElementById("covering").innerHTML = (data.covering || '');
    const splitsEl = document.getElementById("splits");

// Add the status to the element's class list (safely handles multiple classes)
if (data.status) {
  splitsEl.classList.add(data.status);
}

// Set the content if needed
splitsEl.innerHTML = data.splits || '';

  }
});



document.addEventListener('DOMContentLoaded', function() {
    // Set an interval to reload the page every 45 minutes (2700000 milliseconds)
    setInterval(function() {
        window.location.reload();
    }, 120000);
});

const coveringEl = document.getElementById("covering");
const splitsEl = document.getElementById("splits");






