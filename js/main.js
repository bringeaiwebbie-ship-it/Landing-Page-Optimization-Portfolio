const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
// Replace this placeholder with your real business email before publishing.
const CONTACT_EMAIL = "bringeaiwebbie@gmail.com";
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent("Website optimization enquiry");
    const body = encodeURIComponent(
      "Name: " + data.get("name") + "\n" +
      "Email: " + data.get("email") + "\n" +
      "Website: " + (data.get("website") || "Not provided") + "\n\n" +
      "What they would like to improve:\n" + data.get("goal")
    );
    if (status) status.textContent = "Your email app should open with your enquiry prepared.";
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  });
}