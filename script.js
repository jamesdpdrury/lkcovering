

// Listen for messages from the iframe
window.addEventListener('message', function(event) {
  var data = event.data;

 // Check if the data is of expected type/format
 if (typeof data === 'object' && data !== null) {
    // Update the content of the divs with the received data
    document.getElementById("covering").innerHTML = (data.covering || '');
 
  


  }
});



document.addEventListener('DOMContentLoaded', function() {
    // Set an interval to reload the page every 45 minutes (2700000 milliseconds)
    setInterval(function() {
        window.location.reload();
    }, 120000);
});




