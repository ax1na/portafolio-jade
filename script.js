document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("formMessage").textContent = "¡Gracias por contactarme! Responderé pronto.";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = "Por favor, completa todos los campos.";
        document.getElementById("formMessage").style.color = "red";
    }
});
