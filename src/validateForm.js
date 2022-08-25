

// import { checkPassword } from "./checkPassword.js";
// import { checkName } from "./checkName.js";
// import { checkBirth } from "./checkBirth.js";
// import { checkEmail } from "./checkEmail.js";
// import { checkEmailFormat } from "./checkEmailFormat.js";
// import { checkTg } from "./checkTg.js";
// import { activateButton } from "./activateButton.js";


// let button = document.getElementById("submit");
// // let phone = document.getElementById("phone");

// let pw = document.getElementById("password");
// let pwConfirm = document.getElementById("password-confirm");
// let userName = document.getElementById("name");
// let birth = document.getElementById("birth");
// let email = document.getElementById("email");
// let tg = document.getElementById("tg");

// let form = {
//     // phone: phone,
//     pw: pw,
//     pwConfirm: pwConfirm,
//     userName: userName,
//     birth: birth,
//     email: email,
//     tg: tg,
//     button: button
// }

// let inputArr = document.querySelectorAll(".input");

// let validField = {
//     password: false,
//     userName: false,
//     birth: false,
//     email: true,
//     tg: true
// };

// let json = {
//     phone: "",
//     pw: "",
//     userName: "",
//     birth: "",
//     email: "",
//     tg: ""
// }

// function checkPwField() { validField = checkPassword(form, validField) };
// function checkNameField() { validField = checkName(form, validField) };
// function checkBirthField() { validField = checkBirth(form, validField) };
// function checkEmailField() { checkEmail(form) };
// function checkAddressFormat() { validField = checkEmailFormat(form, validField) };
// function checkTgField() { validField = checkTg(form, validField) };
// function setupButton() { activateButton(form, validField) };

// // document.addEventListener(onload, registration());

// function registration() {
//     pw.addEventListener("change", checkPwField);
//     pwConfirm.addEventListener("change", checkPwField);
//     userName.addEventListener("input", checkNameField);
//     birth.addEventListener("input", checkBirthField);
//     email.addEventListener("input", checkEmailField);
//     email.addEventListener("change", checkAddressFormat);
//     tg.addEventListener("input", checkTgField);

//     inputArr.forEach(input => input.addEventListener("change", setupButton));
// };