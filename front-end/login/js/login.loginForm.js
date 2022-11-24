import { clearForms } from "./login.form.js";

export function changeToLoginForm() {
    ShowLoginElements();
    changeTextToLogin();
    deleteRegisterElements();
    clearForms();
}

function ShowLoginElements(){
    const linksArea = document.getElementById("links-area");
    linksArea.style.display = "";
}

function changeTextToLogin(){
    const signIn = document.getElementById('sign-in');
    signIn.textContent = "SIGN IN";

    const credentials = document.getElementById('credentials');
    credentials.textContent = "Enter your credentials to access your account";

    const signInButton = document.getElementById('sign-in-button');
    signInButton.textContent = "SIGN IN";
}

function deleteRegisterElements() {
    const nameForm = document.getElementById('name-form');
    const imageForm = document.getElementById('image-form');
    const backLink = document.getElementById('back-link');

    const login = document.getElementById('login');

    const form = document.getElementById('form');

    form.removeChild(nameForm);
    form.removeChild(imageForm);
    login.removeChild(backLink);
}