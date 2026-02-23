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

/* ===============================================
   CONTACT FORM VALIDATION & SUBMISSION
   =============================================== */
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

document.addEventListener("DOMContentLoaded", () => {
	/* ===============================================
   MOBILE MENU TOGGLE
   =============================================== */
	const navToggle = document.getElementById("nav-toggle");
	const navMenu = document.getElementById("nav-menu");

	navToggle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
		navToggle.classList.toggle("active");
	});

	// Form submission
	if (contactForm) {
		contactForm.addEventListener("submit", (e) => {
			e.preventDefault(); // ngăn chặn reload trang
			clearError();
			if (validateForm()) {
				submitForm(); // chỉ submit khi form hợp lệ
			}
		});
	}
});

// validation function
function validateForm() {
	const name = contactForm.elements["name"].value.trim();
	const email = contactForm.elements["email"].value.trim();
	const subject = contactForm.elements["subject"].value.trim();
	const message = contactForm.elements["message"].value.trim();
	let isValid = true;

	// Validate name
	if (name === "") {
		showError("name", "Please enter your name.");
		isValid = false;
	} else if (name.length < 2) {
		showError("name", "Name must be at least 2 characters");
		isValid = false;
	} else {
		console.log("✅ Name is valid", name);
	}

	// Validate email
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (email === "") {
		showError("email", "Please enter your email.");
		isValid = false;
	} else if (!emailPattern.test(email)) {
		showError("email", "Please enter a valid email address.");
		isValid = false;
	}

	// Validate subject
	if (subject === "") {
		showError("subject", "Please enter a subject.");
		isValid = false;
	}

	// Validate message
	if (message === "") {
		showError("message", "Please enter a message.");
		isValid = false;
	} else if (message.length < 10) {
		showError("message", "Message must be at least 10 characters");
		isValid = false;
	}

	return isValid;
}

// show error message
function showError(fieldId, errorMessage) {
	const field = document.getElementById(fieldId);
	const errorElement = document.getElementById(`${fieldId}-error`);
	const formGroup = field.parentElement;

	formGroup.classList.add("error");
	errorElement.textContent = errorMessage;
}

// clear error message
function clearError() {
	const formGroup = document.querySelectorAll(".form-group");
	formGroup.forEach((group) => {
		group.classList.remove("error");
	});

	const errorMessages = document.querySelectorAll(".error-message");
	errorMessages.forEach((error) => {
		error.textContent = "";
	});

	formMessage.classList.remove("success", "error");
	formMessage.style.display = "none";
}

function submitForm() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const subject = document.getElementById("subject").value;
	const message = document.getElementById("message").value;

	// Simulate form submission
	console.log("Form submitted:", { name, email, subject, message });

	// Show success message
	formMessage.className = "form-message success";
	formMessage.textContent =
		"✅ Thank you! Your message has been sent successfully. I will get back to you soon!";
	formMessage.style.display = "block";

	// Reset form
	contactForm.reset();

	// Hide success message after 5 seconds
	setTimeout(() => {
		formMessage.style.display = "none";
	}, 5000);

	console.log("✅ Contact form initialized successfully!");
}
