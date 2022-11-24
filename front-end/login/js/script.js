import { signUp } from "./login.signUp.js";
import { signIn } from "./login.signIn.js";
import { changeToRegisterForm } from "./login.registerForm.js";

// TOFIX: VALIDATE EMAIL AND FILE

function init() {
    const form = document.getElementById('form');
    form.addEventListener('submit', signInButtonClick);

    const registerNow = document.getElementById('register-password');
    registerNow.addEventListener('click', changeToRegisterForm);
}

function signInButtonClick(event){
    event.preventDefault();
    const signInButton = document.getElementById('sign-in-button');

    if (signInButton.textContent === "SIGN IN"){
        signIn();
    } else {
        signUp();
    }
}

init();