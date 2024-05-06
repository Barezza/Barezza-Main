// Get the button element
var backButton = document.getElementById("back-to-top");

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
}

// Add a scroll event listener to show/hide the button
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 100) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
});

// Add a click event listener to the button
backButton.addEventListener("click", scrollToTop);
