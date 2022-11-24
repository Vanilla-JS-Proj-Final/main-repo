export function clearForms() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    refreshLoginError();
    refreshPassword();
    email.value = "";
    password.value = "";
}

export function alertName() {
    const name = document.getElementById('name');
    name.classList.add('alertRed');
    
    const warn = document.getElementById('name-warn');
    warn.textContent = "Please, insert full name without numbers or special characters"
}

export function alertEmail() {
    const email = document.getElementById('email');
    email.classList.add('alertRed');
    
    const warn = document.getElementById('email-warn');
    warn.textContent = "Invalid e-mail";
}

export function alertPassword(){
    const password = document.getElementById('password');
    password.classList.add('alertRed');

    const warn = document.getElementById('password-warn');
    warn.textContent = "Password must contain: 2 letters, 2 numbers and more than 6 characters";
}

export function refreshName() {
    const name = document.getElementById('name');
    name.classList.remove('alertRed');

    const warn = document.getElementById('name-warn');
    warn.textContent = "";
}

export function refreshEmail(){
    const email = document.getElementById('email');
    email.classList.remove('alertRed');
    
    const warn = document.getElementById('email-warn');
    warn.textContent = "";
}

export function refreshPassword(){
    const password = document.getElementById('password');
    password.classList.remove('alertRed');

    const warn = document.getElementById('password-warn');
    warn.textContent = "";
}

export function alertLoginError(){
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = "Wrong e-mail or password";
}

function refreshLoginError(){
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = "";
}