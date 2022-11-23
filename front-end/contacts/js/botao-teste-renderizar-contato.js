// BOTÃO SÓ PARA MOSTRAR COMO FUNCIONA A RENDERIZAÇÃO DO COMPONENTE DO CONTATO NA PÁGINA!!

import { updateValues } from "./botao-teste-para-mostrar-contato-individual.js";

const botaoTesteRenderizarContato = document.querySelector(
  ".botao-teste-renderizar-contato"
);

const contactHeaderElementTESTE = document.querySelector(".contacts-header");

// id da pessoa para conseguir deletar depois?
const idContatoTeste = "153163515315631651561561561561";

const nomeContatoTESTE = "Insira o nome aqui";
const emailContatoTESTE = "Insira o email aqui";
const telefoneCelularTESTE = "+55 11 1515135153";
const telefoneCasaTESTE = "+55 11 1515135153";
const telefoneTrabalhoTESTE = "+55 11 1515135153";

const componenteContatoTemplateStringTESTE = `
<div class="contacts-list contacts-grid" id=${idContatoTeste}>
    <img
    class="contact-photo"
    src="./img/random-person.jpg"
    alt="contact-photo"
    />

    <div class="contact-name">${nomeContatoTESTE}</div>

    <div class="contact-email">${emailContatoTESTE}</div>

    <ul class="contact-phone-list">
        <li class="contact-phone-item">
            <ion-icon class="icon-tel-number" name="phone-portrait-outline"></ion-icon>
            <span class="contact-phone-cell-number">${telefoneCelularTESTE}</span>
        </li>

        <li class="contact-phone-item">
            <ion-icon class="icon-tel-number" name="home-outline"></ion-icon>
            <span class="contact-phone-home-number">${telefoneCasaTESTE}</span>
        </li>

        <li class="contact-phone-item">
            <ion-icon class="icon-tel-number" name="bag-outline"></ion-icon>
            <span class="contact-phone-work-number">${telefoneTrabalhoTESTE}</span>
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
</div>
`;

botaoTesteRenderizarContato.addEventListener("click", () => {
  contactHeaderElementTESTE.insertAdjacentHTML(
    "afterend",
    componenteContatoTemplateStringTESTE
  );

  //   CASO NÃO EXISTA TELEFONE, DÁ PARA NÃO MOSTRAR OS ÍCONES NO COMPONENTE
  //   adicionando a classe hidden no  <li class="contact-phone-item hidden">
  if (telefoneCelularTESTE == "")
    document
      .querySelector(".contact-phone-cell-number")
      .closest("li")
      .classList.add("hidden");

  if (telefoneCasaTESTE == "")
    document
      .querySelector(".contact-phone-home-number")
      .closest("li")
      .classList.add("hidden");

  if (telefoneTrabalhoTESTE == "")
    document
      .querySelector(".contact-phone-work-number")
      .closest("li")
      .classList.add("hidden");

  //   Adicionando funcionalidade no botão de mais informações
  const btnMoreInfoEl = document.querySelector(".contact-more-info-btn");
  btnMoreInfoEl.addEventListener("click", () => {
    updateValues();
  });
});
