const content = document.getElementById("main-content");
const about = document.getElementById("about-link");
const portfolio = document.getElementById("portfolio-link");
const contact = document.getElementById("contact-link");
const home = document.getElementById("home-link");

document.addEventListener("DOMContentLoaded", () => {
    about.addEventListener("click", renderAbout());
    contact.addEventListener("click", renderContact());
    portfolio.addEventListener("click", renderPortfolio());
    home.addEventListener("click", renderHome());
})

function renderAbout() {
    clearPage();

}

function renderContact() {
    clearPage();

}

function renderPortfolio() {
    clearPage();
}

function renderHome() {
    clearPage();

}

function clearPage() {
    content.innerHTML = ""
}