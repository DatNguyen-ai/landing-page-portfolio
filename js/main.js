/* ===============================================
   MOBILE MENU TOGGLE
   =============================================== */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("active");
	navToggle.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");
// Loop qua từng link
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		// Remove class 'active' → đóng menu
		navMenu.classList.remove("active");
		navToggle.classList.remove("active");
	});
});
