document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript file is loaded! ✅");

    const buttons = document.querySelectorAll(".toggle-description");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const description = this.previousElementSibling;
            description.style.display = (description.style.display === "block") ? "none" : "block";
            this.textContent = (description.style.display === "block") ? "Read Less" : "Read More";
        });
    });

    const searchBox = document.getElementById("course-search");
    searchBox.addEventListener("keyup", function () {
        let filter = searchBox.value.toLowerCase();
        let courses = document.querySelectorAll(".course-item");

        courses.forEach(course => {
            let courseTitle = course.querySelector("h4").textContent.toLowerCase();
            if (courseTitle.includes(filter)) {
                course.style.display = "block";
            } else {
                course.style.display = "none";
            }
        });
    });
});

