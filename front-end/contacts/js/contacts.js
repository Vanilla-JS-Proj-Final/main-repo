//const token = sessionStorage.getItem("@token");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDlhYTI1OTQtNTBhOC00NGVlLTkwNGQtNWE0YTEwZTc4Yzg5IiwiaWF0IjoxNjY5NDAwODkwLCJleHAiOjE2Njk0MDQ0OTB9.FQxc-VRBRQ-mG7f1KWOu9IF1pQhUKy3FRyTm-wPXgUk";

addEventListener("load", async () => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  const dataRequest = {
    headers: headers,
    method: "GET",
  };

  try {
    const response = await fetch(
      "http://localhost:5000/v1/contact",
      dataRequest
    );
    const data = await response.json();

    if (data.erro !== "true") {
      addContactsToHtmlPage(data.data);
    } else {
      alert("Error trying to get contacts data!");
    }
  } catch (error) {
    alert("Error trying to get contacts data!");
  }
});

function addContactsToHtmlPage(data) {
  const contactHeaderElement = document.querySelector(".contacts-header");
  data.forEach((contact) => {
    const id = contact.id;
    const name = contact.nome;
    const email = contact.email;
    const cellphone = "+55 11 1515135153";
    const homePhone = "+55 11 1515135153";
    const workPhone = "+55 11 1515135153";
    const htmlString = `
        <div class="contacts-list contacts-grid" id=${id}>
            <img
                class="contact-photo"
                src="./img/random-person.jpg"
                alt="contact-photo"
            />

            <div class="contact-name">${name}</div>

            <div class="contact-email">${email}</div>

            <ul class="contact-phone-list">
                <li class="contact-phone-item">
                    <ion-icon class="icon-tel-number" name="phone-portrait-outline"></ion-icon>
                    <span class="contact-phone-cell-number">${cellphone}</span>
                </li>

                <li class="contact-phone-item">
                    <ion-icon class="icon-tel-number" name="home-outline"></ion-icon>
                    <span class="contact-phone-home-number">${homePhone}</span>
                </li>

                <li class="contact-phone-item">
                    <ion-icon class="icon-tel-number" name="bag-outline"></ion-icon>
                    <span class="contact-phone-work-number">${workPhone}</span>
                </li>
            </ul>

            <div class="contact-actions">
                <button
                    class="contact-btn-actions contact-more-info-btn"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#windowModal"
                >
                    <ion-icon class="icon" name="add-outline"></ion-icon>
                </button>

                <a href="#" class="contact-btn-actions contact-edit-btn">
                    <ion-icon class="icon" name="pencil-outline"></ion-icon>
                </a>

                <button class="contact-btn-actions contact-edit-btn">
                    <ion-icon class="icon" name="trash-outline"></ion-icon>
                </button>
            </div>
        </div>`;

    contactHeaderElement.insertAdjacentHTML("afterend", htmlString);
  });
}

async function deleteContact(id) {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", "application/json");

  const dataRequest = {
    headers: headers,
    method: "DELETE",
    body: JSON.stringify({
      idContato: `${id}`,
    }),
  };

  try {
    const response = await fetch(
      "http://localhost:5000/v1/contact",
      dataRequest
    );
    const data = await response.json();

    if (data.erro !== "true") {
      console.log(data);
    } else {
      alert("Error trying to get contacts data!");
    }
  } catch (error) {
    alert("Error trying to get contacts data!");
  }
}

addEventListener("click", async (event) => {
  if (event.target.name === "trash-outline") {
    const contactId = event.target.parentElement.parentElement.parentElement.id;
    event.target.parentElement.parentElement.parentElement.remove();
    deleteContact(contactId);
  } else if (event.target.name === "pencil-outline") {
    const contactId = event.target.parentElement.parentElement.parentElement.id;
    sessionStorage.setItem("IdContact", contactId);
    window.location.href = "../p-edit/edit.html";
  } else if (event.target.name === "add-outline") {
    const contactId = event.target.parentElement.parentElement.parentElement.id;
    console.log(contactId);
    const contactData = await getContactById(contactId);
    updateContactModalWindow(contactData);
  }
});

async function getContactById(id) {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  const dataRequest = {
    headers: headers,
    method: "GET",
  };

  try {
    const response = await fetch(
      `http://localhost:5000/v1/contact/${id}`,
      dataRequest
    );
    const data = await response.json();

    if (data.erro !== "true") {
      console.log(data.data.nome);
      return data.data;
    } else {
      alert("Error trying to get contacts data!");
      return;
    }
  } catch (error) {
    alert("Error trying to get contacts data!");
    return;
  }
}

function updateContactModalWindow(contact) {
  document.querySelector(".modal-contact-name").textContent = contact.nome;
  document.querySelector(".modal-nickname-text").textContent.apelido;
  document.querySelector(".modal-email-text").textContent = contact.email;
  document.querySelector(".modal-address-text").textContent =
    contact.endereco.logradouro;
  //    document.querySelector(".modal-phone-cell-text").textContent = contact;
  //    document.querySelector(".modal-phone-home-text").textContent = contact;
  //    document.querySelector(".modal-phone-work-text").textContent = contact;
  document.querySelector(".modal-notes-text").textContent = contact.notas;
}
