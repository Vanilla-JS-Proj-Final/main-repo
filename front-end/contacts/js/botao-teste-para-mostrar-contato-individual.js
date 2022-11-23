// BOTÃO SÓ PARA MOSTRAR COMO FUNCIONA A ATUALIZAÇÃO DOS DADOS INDIVIDUAIS DA PESSOA NA JANELA DO MODAL
// Ao clicar no '+' no componente da pessoa, vai abrir uma janela (modal)
// Pensei em atualizar o html de acordo com o GET by ID. Seria uma única div que tá no final da página!!

const modalContactNameEl = document.querySelector(".modal-contact-name");
const modalNicknameTextEl = document.querySelector(".modal-nickname-text");
const modalEmailTextEl = document.querySelector(".modal-email-text");
const modalAddressTextEl = document.querySelector(".modal-address-text");
const modalPhoneCellTextEl = document.querySelector(".modal-phone-cell-text");
const modalPhoneHomeTextEl = document.querySelector(".modal-phone-home-text");
const modalPhoneWorkTextEl = document.querySelector(".modal-phone-work-text");
const modalNotesTextEl = document.querySelector(".modal-notes-text");

const modalContactNameTESTE = "Insira o nome da pessoa aqui";
const modalNicknameNameTESTE = "Insira o apelido da pessoa aqui";
const modalEmailNameTESTE = "emaildapessoa@gmail.com";
const modalAddressNameTESTE =
  "Rua coloquearuaaqui, 1515 - São Paulo - SP - CEP: 151151-021, Brasil";
const modalPhoneCellTESTE = "+55 11 151515153";
const modalPhoneHomeTESTE = "+55 11 151515153";
const modalPhoneWorkTESTE = "+55 11 151515153";
const modalNotesTESTE =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis unde distinctio necessitatibus, ipsum cupiditate excepturi ut illo ullam in at explicabo. Odit repellat, expedita aperiam sint harum dolorum magni?";

export function updateValues() {
  modalContactNameEl.textContent = modalContactNameTESTE;
  modalNicknameTextEl.textContent = modalNicknameNameTESTE;
  modalEmailTextEl.textContent = modalEmailNameTESTE;
  modalAddressTextEl.textContent = modalAddressNameTESTE;
  modalPhoneCellTextEl.textContent = modalPhoneCellTESTE;
  modalPhoneHomeTextEl.textContent = modalPhoneHomeTESTE;
  modalPhoneWorkTextEl.textContent = modalPhoneWorkTESTE;
  modalNotesTextEl.textContent = modalNotesTESTE;
}
