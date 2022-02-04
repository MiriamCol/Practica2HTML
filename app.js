//JAVASCRIPT PARA EL INICIO DE SESION

// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validatePassword(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		showError(input, invalidMsg);
	}
	else
	{
	return true;
	}

}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");

const EMAIL_REQUIRED = "Por favor, introduzca su correo electrónico";
const PASSWORD_REQUIRED = "Por favor, introduzca la contraseña";
const PASSWORD_INVALID = "La contraseña es: hola";
const PASSWORD_REQUERIDO= "hola"

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();


	// validate the form
	let emailValid = hasValue(form.elements["fname"], EMAIL_REQUIRED);
	let passwordValid= hasValue(form.elements["lname"], PASSWORD_REQUIRED);
	let validatePasswordd = validatePassword(form.elements["lname"], PASSWORD_REQUERIDO, PASSWORD_INVALID);
	// if valid, submit the form.
	if (emailValid && passwordValid &&validatePasswordd) {

		alert("El email introducido es: " + form.elements["fname"].value + "\nLa contraseña que se ha introducido es: " + form.elements["lname"].value);
	}

});