document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkmode");
    const body = document.body;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark");
    });
});
