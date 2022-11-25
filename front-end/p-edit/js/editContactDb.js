async function updateContact() {
  const editContactName = document.getElementById("contact-name");
  const editContactNickname = document.getElementById("contact-nickname");
  const editContactEmail = document.getElementById("contact-email");
  const editContactCellPhoneNumber = document.getElementById(
    "contact-cellphonenumber"
  );
  const editContactHomePhoneNumber = document.getElementById(
    "contact-homephonenumber"
  );
  const editContactWorkPhoneNumber = document.getElementById(
    "contact-workphonenumber"
  );
  const editContactAddress = document.getElementById("contact-adress");
  const editContactCity = document.getElementById("contact-city");
  const editContactState = document.getElementById("contact-state");
  const editContactZipcode = document.getElementById("contact-zipcode");
  const editContactCountry = document.getElementById("contact-country");
  const editContactNote = document.getElementById("contact-note");

  let tels = [];

  if (editContactCellPhoneNumber.value != "") {
    tels.push({ tipo: "celular", numero: editContactCellPhoneNumber.value });
  }
  if (editContactHomePhoneNumber.value != "") {
    tels.push({ tipo: "casa", numero: editContactHomePhoneNumber.value });
  }
  if (editContactWorkPhoneNumber.value != "") {
    tels.push({ tipo: "trabalho", numero: editContactWorkPhoneNumber.value });
  }

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  // const token = sessionStorage.getItem("@token");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDlhYTI1OTQtNTBhOC00NGVlLTkwNGQtNWE0YTEwZTc4Yzg5IiwiaWF0IjoxNjY5NDAwODkwLCJleHAiOjE2Njk0MDQ0OTB9.FQxc-VRBRQ-mG7f1KWOu9IF1pQhUKy3FRyTm-wPXgUk";

  headers.append("Authorization", token);

  const id = sessionStorage.getItem("IdContact");

  const requestBody = {
    nome: editContactName.value,
    idContato: id,
    apelido: editContactNickname.value,
    email: editContactEmail.value,
    notas: editContactNote.value,
    endereco: {
      logradouro: editContactAddress.value,
      cidade: editContactCity.value,
      estado: editContactState.value,
      cep: editContactZipcode.value,
      pais: editContactCountry.value,
    },

    telefones: tels,
  };

  console.log(requestBody);
  const dataRequest = {
    headers: headers,
    method: "PATCH",
    body: JSON.stringify(requestBody),
  };

  await fetch(`http://localhost:5000/v1/contact`, dataRequest);
}

const btnEdit = document.getElementById("edit-contact-btn");

btnEdit.addEventListener("click", async (e) => {
  e.preventDefault();
  await updateContact();

  window.location.href = "http://localhost:1234/contacts/contacts.html";
});
