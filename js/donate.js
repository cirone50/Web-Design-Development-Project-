// donate.js 

// Form Elements
const form = document.getElementById("suggest-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Error messages
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const textError = document.getElementById("text-error");

//Counter and success message
const messageCounter = document.getElementById("message-counter");
const formSuccess = document.getElementById("form-success");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   //  NAME
	if (nameInput.value.trim() === "") {
        showError(nameInput, nameError, "Please enter your name.");
        isValid = false;
    } else {
        showValid(nameInput, nameError);
    }
    // EMAIL

    if (emailInput.value.trim() === "") {
        showError(emailInput, emailError, "Please enter your email.");
        isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
	 	showError(emailInput, emailError, "Please enter a valid email, e.g. name@example.com");
        isValid = false;
    } else {
        showValid(emailInput, emailError);
    }

    // MESSAGE

    if (messageInput.value.trim().length < 20) {
        showError(messageInput, textError, "Your message must have at least 20 characters.");
        isValid = false;
    } else {
        showValid(messageInput, textError);
	}

	if (isValid) {
		// Everything ok
		const userName = nameInput.value.trim();
        formSuccess.textContent = `Thank you, ${userName}! We'll review your suggestion.`;

        form.reset();
        nameInput.classList.remove("input-valid");
        emailInput.classList.remove("input-valid");
        messageInput.classList.remove("input-valid");
	} else {
		// Something wrong
		formSuccess.textContent = "";
	}
});

// CHARACTER COUNTER 
	messageInput.addEventListener("input", function () {
	const length = messageInput.value.trim().length;
	messageCounter.textContent = `${length} / 20 characters`;
});



function showError(input, errorElement, message) {
	errorElement.textContent = message;
	input.classList.add("input-error");
    input.classList.remove("input-valid");
}
function showValid(input, errorElement) {
	errorElement.textContent = "";
    input.classList.add("input-valid");
    input.classList.remove("input-error");
}


