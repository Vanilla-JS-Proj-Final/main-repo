async function createContact() {
  const name = document.getElementById("contact-name");
  const nickname = document.getElementById("contact-nickname");
  const email = document.getElementById("contact-email");
  const cellphone = document.getElementById("contact-cellphonenumber");
  const homephone = document.getElementById("contact-homephonenumber");
  const workphone = document.getElementById("contact-workphonenumber");
  const adress = document.getElementById("contact-adress");
  const city = document.getElementById("contact-city");
  const state = document.getElementById("contact-state");
  const zipCode = document.getElementById("contact-zipcode");
  const country = document.getElementById("contact-country");
  const notes = document.getElementById("contact-note");

  let tels = [];

  if (cellphone.value != "") {
    tels.push({ tipo: "celular", numero: cellphone.value });
  }
  if (homephone.value != "") {
    tels.push({ tipo: "casa", numero: homephone.value });
  }
  if (workphone.value != "") {
    tels.push({ tipo: "trabalho", numero: workphone.value });
  }

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const token = sessionStorage.getItem("@token");

  headers.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDlhYTI1OTQtNTBhOC00NGVlLTkwNGQtNWE0YTEwZTc4Yzg5IiwiaWF0IjoxNjY5NDAwODkwLCJleHAiOjE2Njk0MDQ0OTB9.FQxc-VRBRQ-mG7f1KWOu9IF1pQhUKy3FRyTm-wPXgUk"
  );

  const id = sessionStorage.getItem("IdContact");

  const requestBody = {
    nome: name.value,
    idContato: id,
    apelido: nickname.value,
    email: email.value,
    notas: notes.value,
    endereco: {
      logradouro: adress.value,
      cidade: city.value,
      estado: state.value,
      cep: zipCode.value,
      pais: country.value,
    },

    telefones: tels,
  };

  const dataRequest = {
    headers: headers,
    method: "POST",
    body: JSON.stringify(requestBody),
  };

  await fetch(`http://localhost:5000/v1/contact`, dataRequest);
  console.log(requestBody);
}

const sendButton = document.getElementById("buttonSend");

sendButton.addEventListener("click", async (e) => {
  e.preventDefault();
  await createContact();
  window.location.href = "http://localhost:1234/contacts/contacts.html";
});
