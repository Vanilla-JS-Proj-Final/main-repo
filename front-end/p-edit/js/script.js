const contactName = document.getElementById("contact-name");
const nickname = document.getElementById("contact-nickname");
const email = document.getElementById("contact-email");
const cellphone = document.getElementById("contact-cellphonenumber");
const homePhone = document.getElementById("contact-homephonenumber");
const workPhone = document.getElementById("contact-workphonenumber");
const adress = document.getElementById("contact-adress");
const city = document.getElementById("contact-city");
const state = document.getElementById("contact-state");
const zipCode = document.getElementById("contact-zipcode");
const country = document.getElementById("contact-country");
const notes = document.getElementById("contact-note");
const buttonSend = document.querySelector(".buttonSend");


async function getFormEntry() {
    
    const formdata = new FormData();
    formdata.append('nome', contactName.value);
    formdata.append('apelido', nickname.value);
    //ADICIONAR TELEFONES AQUI
    formdata.append('email', email.value);
    formdata.append('endereco', adress.value);
    formdata.append('notas', notes);

    if (file.files[0]) {
        const compressedImage = await compressImage(file.files[0]);
        fd.append('foto', compressedImage[0].data);
        // fd.append('foto', await imageToBase64(compressedImage[0]));
    }

    return fd;
}