document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const eventList = document.getElementById("event-list");

    searchInput.addEventListener("keyup", function() {
        let filter = searchInput.value.toLowerCase();
        let sections = document.querySelectorAll("main section");

        sections.forEach(section => {
            let text = section.innerText.toLowerCase();
            section.style.display = text.includes(filter) ? "block" : "none";
        });
    });

    const events = [
        { title: "Hackathon 2025", date: "March 15" },
        { title: "AI Workshop", date: "April 10" },
        { title: "Web Dev Bootcamp", date: "May 5" }
    ];

    if (eventList) {
        eventList.innerHTML = events.map(event => `<li>${event.title} - ${event.date}</li>`).join("");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");

    function setEqualImageSize() {
        let minSize = Infinity;

        images.forEach(img => {
            minSize = Math.min(minSize, img.clientWidth, img.clientHeight);
        });

        let newSize = minSize * 1.4;

        images.forEach(img => {
            img.style.width = newSize + "px";
            img.style.height = newSize + "px";
            img.style.objectFit = "cover"; 
        });
    }

    window.addEventListener("load", setEqualImageSize);
    window.addEventListener("resize", setEqualImageSize); 
});


