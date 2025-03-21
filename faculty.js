document.addEventListener("DOMContentLoaded", function () {
    console.log("Faculty page JavaScript loaded! ✅");

    const buttons = document.querySelectorAll(".toggle-bio");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const bio = this.previousElementSibling;
            bio.style.display = (bio.style.display === "block") ? "none" : "block";
            this.textContent = (bio.style.display === "block") ? "Read Less" : "Read More";
        });
    });

    const searchBox = document.getElementById("faculty-search");
    searchBox.addEventListener("keyup", function () {
        let filter = searchBox.value.toLowerCase();
        let facultyMembers = document.querySelectorAll(".faculty-member");

        facultyMembers.forEach(member => {
            let facultyName = member.querySelector("h3").textContent.toLowerCase();
            if (facultyName.includes(filter)) {
                member.style.display = "block";
            } else {
                member.style.display = "none";
            }
        });
    });
});
