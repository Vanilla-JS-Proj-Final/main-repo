async function getContactById() {
  const headers = new Headers();
  // const token = sessionStorage.getItem("@token");

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDlhYTI1OTQtNTBhOC00NGVlLTkwNGQtNWE0YTEwZTc4Yzg5IiwiaWF0IjoxNjY5MzQzNTI3LCJleHAiOjE2NjkzNDcxMjd9.hcD4M4LsgiB59eZO4MhP0Uv0sF4wZI1qgf0vQiEmOH8";

  headers.append("Authorization", token);

  const dataRequest = {
    headers: headers,
    method: "GET",
  };

  const id = sessionStorage.getItem("IdContact");

  const response = await fetch(
    `http://localhost:5000/v1/contact/${id}`,
    dataRequest
  );
  const json = await response.json();

  return json.data;
}

function fillValuesOnForm(data) {
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

  editContactName.value = data.nome;
  editContactNickname.value = data.apelido;
  editContactEmail.value = data.email;

  data.telefones.forEach((tel) => {
    if (tel.tipo == "celular") editContactCellPhoneNumber.value = tel.numero;
    if (tel.tipo == "casa") editContactHomePhoneNumber.value = tel.numero;
    if (tel.tipo == "trabalho") editContactWorkPhoneNumber.value = tel.numero;
  });

  editContactAddress.value = data.endereco.logradouro;

  editContactCity.value = data.endereco.cidade;
  editContactState.value = data.endereco.estado;
  editContactZipcode.value = data.endereco.cep;
  editContactCountry.value = data.endereco.pais;
  editContactNote.value = data.notas;
}

window.onload = async () => {
  const contact = await getContactById();
  fillValuesOnForm(contact);
};
