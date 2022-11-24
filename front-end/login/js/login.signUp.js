import { userPost } from "../services/user.service.js";
import { alertName, alertEmail, alertPassword, refreshName, refreshEmail, refreshPassword } from "./login.form.js";
import Compress from "compress.js";

const loginPage = "./login.html";

export async function signUp(){
    const fd = await getSignUpForm();
    const objectForm = Object.fromEntries(fd);
    
    if (validateSignUpForm(objectForm)) {
        const jsonForm = treatObjectForm(objectForm);

        const response = await userPost(jsonForm);
        if (response.status === 200) window.open(loginPage, "_self");
    }
}

async function getSignUpForm() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const file = document.getElementById('file');

    const fd = new FormData();
    fd.append('nome', name.value);
    fd.append('email', email.value);
    fd.append('senha', password.value);

    if (file.files[0]) {
        const compressedImage = await compressImage(file.files[0]);
        fd.append('foto', compressedImage[0].data);
        // fd.append('foto', await imageToBase64(compressedImage[0]));
    }

    return fd;
}

function validateSignUpForm(objectForm){
    //validate name
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (objectForm.nome === "" || objectForm.nome.split(' ').length < 2 || specialChars.test(objectForm.nome) || /\d/.test(objectForm.nome)){
        alertName();
        return false;
    }
    refreshName();

    //validate email
    if (!objectForm.email.includes('@') || !objectForm.email.includes('.')) {
        alertEmail();
        return false;
    }
    refreshEmail();

    //validate password
    if (!/\d/.test(objectForm.senha) || !/[a-zA-Z]/g.test(objectForm.senha) || objectForm.senha.length < 7) {
        alertPassword();
        return false;
    }
    refreshPassword();

    return true;
}

function treatObjectForm(objectForm){
    const splitNames = objectForm.nome.split(' ');

    for (let i = 0; i < splitNames.length; i++){
        splitNames[i] = capitalizeFirstLetter(splitNames[i]);
    }

    objectForm.nome = splitNames.join(' ');

    return JSON.stringify(objectForm);
}

function capitalizeFirstLetter(string){
    string = string.toLowerCase().trim();

    if (string.length > 2) return string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

// async function imageToBase64(image) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(image);
//         reader.onload = () => {
//            resolve(reader.result);
//         }
//         reader.onerror = () => {
//             reject(null);
//         }
//     }) 
// }

function compressImage(image) {
    return new Promise((resolve, reject) => {
        const compress = new Compress();

        const files = [];
        files.push(image);
    
        const options = {
            size: 2,
            quality: .75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false,
        }
    
        compress.compress(files, options)
            .then((data) => resolve(data))
            .catch(() => reject(null));
    })
}