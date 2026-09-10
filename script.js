// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", navLinks.classList.contains("active"));

});


// CLOSE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const formData = new FormData(contactForm);
    const senderName = formData.get("name");
    const senderEmail = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const body = `Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`;

    window.location.href = `mailto:telvinmurimi397@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    alert("Your email app will open with the message ready to send.");

});


// PROJECT PREVIEWS

const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalType = document.getElementById("modalType");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTools = document.getElementById("modalTools");
const modalAction = document.getElementById("modalAction");

const projects = {
    colouringGame: {
        type: "SOFTWARE DEVELOPMENT",
        title: "Colouring Game",
        description: "An interactive colouring game designed for creative play and built with HTML, CSS and JavaScript.",
        tools: "HTML, CSS and JavaScript",
        action: "#contact",
        actionText: "Ask about this project"
    },
    portraits: {
        type: "PHOTOGRAPHY",
        title: "Portrait Photography",
        description: "A collection of portrait and event photographs focused on natural expressions, clear composition and memorable moments.",
        tools: "Portrait and event photography",
        action: "#contact",
        actionText: "Book a session"
    },
    livestream: {
        type: "LIVESTREAMING",
        title: "Live Event Production",
        description: "Livestream production for events and services, with scene switching, multiple platforms and dependable broadcast support.",
        tools: "OBS, vMix and online platforms",
        action: "#contact",
        actionText: "Plan a livestream"
    }
};

document.querySelectorAll(".project-link").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const project = projects[link.dataset.project];
        modalType.textContent = project.type;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalTools.textContent = project.tools;
        modalAction.href = project.action;
        modalAction.textContent = project.actionText;
        projectModal.showModal();
    });
});

modalClose.addEventListener("click", () => projectModal.close());

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && projectModal.open) {
        projectModal.close();
    }
});

projectModal.addEventListener("click", event => {
    if (event.target === projectModal) {
        projectModal.close();
    }
});
