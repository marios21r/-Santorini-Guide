function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    // Add leading zeros if necessary
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    
    // Construct the string for the clock
    var timeString = hours + ":" + minutes + ":" + seconds;
    
    // Update the HTML element
    document.getElementById("local-time").innerHTML = timeString;
  }
  
  // Call updateClock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock
  updateClock();

document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons that open categories
    let extendButtons = document.querySelectorAll('.main-buttons');

    // Add click event listener to each button
    extendButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the corresponding group ID
            let groupId = this.getAttribute('data-target');

            // Get the corresponding group element
            let group = document.getElementById(groupId);

            // Toggle the display of the group
            group.classList.toggle('show');

            // Close all other open groups except the clicked one
            document.querySelectorAll('.group').forEach(otherGroup => {
                if (otherGroup.id !== groupId && otherGroup.classList.contains('show')) {
                    otherGroup.classList.remove('show');
                }
            });
        });
    });

    // Close the category when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.main-buttons')) {
            let groups = document.querySelectorAll('.group');
            groups.forEach(group => {
                if (group.classList.contains('show')) {
                    group.classList.remove('show');
                }
            });
        }
    });

    // Prevent closing the category when clicking inside it
    document.querySelectorAll('.group').forEach(group => {
        group.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});
