import { createNameForm, createImageForm, createBackLink } from "./login.elements.js";
import { clearForms } from "./login.form.js";
import { changeToLoginForm } from "./login.loginForm.js";

export function changeToRegisterForm() {
    hideLoginElements();
    changeTextToRegister();
    createRegisterElements();
    clearForms();
}

function hideLoginElements(){
    const linksArea = document.getElementById("links-area");
    linksArea.style.display = "none";
}

function changeTextToRegister(){
    const signIn = document.getElementById('sign-in');
    signIn.textContent = "SIGN UP";

    const credentials = document.getElementById('credentials');
    credentials.textContent = "Enter your credentials to create your account";

    const signInButton = document.getElementById('sign-in-button');
    signInButton.textContent = "SIGN UP";
}

function createRegisterElements() {
    const nameForm = createNameForm();
    const imageForm = createImageForm();
    const backLink = createBackLink();

    const emailForm = document.getElementById('email-form');
    emailForm.parentNode.insertBefore(nameForm, emailForm);

    const signInButton = document.getElementById('sign-in-button');
    signInButton.parentNode.insertBefore(imageForm, signInButton);

    const login = document.getElementById('login');
    login.appendChild(backLink);

    backLink.children[0].addEventListener('click', changeToLoginForm);
}

