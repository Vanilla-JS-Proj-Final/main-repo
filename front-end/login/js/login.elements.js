export function createNameForm() {
    const nameForm = document.createElement('div');
    nameForm.classList.add('form-group');
    nameForm.id = "name-form";

    const label = document.createElement('label');
    label.classList.add('form-label');
    label.setAttribute('for', 'name');
    label.textContent = "Name";

    const input = document.createElement('input');
    input.classList.add('form-control');
    input.id = "name";
    input.type = "text";
    input.placeholder = "Enter your name";

    const warn = document.createElement('div');
    warn.classList.add('form-warn');
    warn.id = "name-warn";

    nameForm.appendChild(label);
    nameForm.appendChild(input);
    nameForm.appendChild(warn);

    return nameForm;
}

export function createImageForm() {
    const imageForm = document.createElement('div');
    imageForm.classList.add('form-group');
    imageForm.id = "image-form";

    const label = document.createElement('label');
    label.classList.add("form-label'");
    label.setAttribute('for', "file");
    label.textContent = "Profile Picture (Optional)";

    const input = document.createElement("input");
    input.classList.add('form-control');
    input.id = "file";
    input.type = "file";
    input.setAttribute('accept', "image/*");

    imageForm.appendChild(label);
    imageForm.appendChild(input);

    return imageForm;
}

export function createBackLink() {
    const paragraph = document.createElement('p');
    paragraph.classList.add('forgot-password');
    paragraph.classList.add('text-center');
    paragraph.textContent = "Already have an account? "
    paragraph.id = "back-link";

    const span = document.createElement('span');
    span.classList.add('reset-password');
    span.textContent = "Login Now"

    paragraph.appendChild(span);

    return paragraph;
}