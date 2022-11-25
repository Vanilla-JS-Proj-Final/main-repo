import { authPost } from "../services/auth.service.js";
import { alertLoginError } from "./login.form.js";

const homePage = "/contacts/contacts.html";

export async function signIn() {
  const fd = getSignInForm();
  const objectForm = Object.fromEntries(fd);

  //validate login?

  const jsonForm = JSON.stringify(objectForm);

  const response = await authPost(jsonForm);
  if (response.status === 200) {
    login(response);
  } else {
    alertLoginError();
  }
}

function getSignInForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const fd = new FormData();

  fd.append("email", email.value);
  fd.append("senha", password.value);

  return fd;
}

function login(response) {
  const { token, ...user } = response.data;
  sessionStorage.setItem("@user", JSON.stringify(user));
  sessionStorage.setItem("@token", token);

  window.open(homePage, "_self");
}
