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

/* ===============================================
   FORBID RIGHT-CLICK CONTEXT MENU
	 khi nào cần thì mở lại
   =============================================== */

(function () {
	// Ngăn chặn menu chuột phải trên tất cả các hình ảnh
	document.addEventListener("contextmenu", function (e) {
		if (e.target.tagName === "IMG" || e.target.closest(".image-box")) {
			// ngăn chặn menu chuột phải khi click vào ảnh hoặc phần tử chứa ảnh
			e.preventDefault();
		}
	});

	// Chặn phím tắt hay dùng để xem source / lưu
	document.addEventListener("keydown", function (e) {
		const blockedKeys = ["s", "u"];
		if (
			(e.ctrlKey && blockedKeys.includes(e.key.toLowerCase())) ||
			e.key === "F12"
		) {
			e.preventDefault();
		}
	});

	// Chặn kéo thả ảnh
	document.addEventListener("dragstart", function (e) {
		if (e.target.tagName === "IMG") {
			e.preventDefault();
		}
	});
})();
