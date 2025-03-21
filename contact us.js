document.addEventListener("DOMContentLoaded", function () {
    console.log("Contact page JavaScript loaded! ✅");

    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
            formMessage.textContent = "❌ Please fill in all fields!";
            formMessage.style.color = "red";
            return;
        }

        if (!validateEmail(emailInput.value)) {
            formMessage.textContent = "❌ Please enter a valid email!";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "✅ Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
