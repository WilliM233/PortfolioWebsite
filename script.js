document.addEventListener("DOMContentLoaded", function() {
    // Get all the experience title elements
    var experienceTitles = document.getElementsByClassName("experienceTitle");

    // Loop through each experience title element
    for (var i = 0; i < experienceTitles.length; i++) {
    // Attach a click event listener to each experience title element
    var experienceContent = experienceTitles[i].nextElementSibling;
    experienceContent.style.display = "none";
    
    experienceTitles[i].addEventListener("click", function() {
        // Get the next sibling element of the clicked title
        var experienceContent = this.nextElementSibling;

        // Toggle the visibility of the experience content
        if (experienceContent.style.display === "none") {
        experienceContent.style.display = "block";
        } else {
        experienceContent.style.display = "none";
        }
    });
    }
});

