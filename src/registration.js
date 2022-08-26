import { checkPhone } from "./checkPhone.js";
import { maskPhone } from "./maskPhone.js";
import { checkPhoneClass } from "./checkPhoneClass.js";

import { checkPassword } from "./checkPassword.js";
import { checkName } from "./checkName.js";
import { checkBirth } from "./checkBirth.js";
import { checkEmail } from "./checkEmail.js";
import { checkEmailClass } from "./checkEmailClass.js";
import { checkTg } from "./checkTg.js";
import { activateButton } from "./activateButton.js";

let button = document.getElementById("submit");
let phone = document.getElementById("phone");

export let form = {
    phone: phone,
    pw: "",
    pwConfirm: "",
    userName: "",
    birth: "",
    email: "",
    tg: "",
    button: button
}

export let validField = {
    password: false,
    userName: false,
    birth: false,
    email: true,
    tg: true
};

export let json = {
    phone: "",
    password: "",
    name: "",
    birth: "",
    tg: "",
    email: "",
}

export let serverResponse = {};
export let responseStatus = "";

document.addEventListener(onload, registration());

function registration() {
    maskPhone();
    phone.addEventListener("change", checkPhone);
    phone.addEventListener("input", checkPhoneClass);
};

let mainNode = document.querySelector("main");
let observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            if (node.matches("form")) checkForm();
        }
    }
});
observer.observe(mainNode, { childList: true, subtree: true });

function checkForm() {
    let pw = document.getElementById("password");
    let pwConfirm = document.getElementById("password-confirm");
    let userName = document.getElementById("name");
    let birth = document.getElementById("birth");
    let email = document.getElementById("email");
    let tg = document.getElementById("tg");

    let inputArr = document.querySelectorAll(".input");

    form.pw = pw;
    form.pwConfirm = pwConfirm;
    form.userName = userName;
    form.birth = birth;
    form.email = email;
    form.tg = tg;
    form.button = document.querySelector("#submit");

    pw.addEventListener("change", checkPassword);
    pwConfirm.addEventListener("change", checkPassword);
    userName.addEventListener("input", checkName);
    birth.addEventListener("input", checkBirth);
    email.addEventListener("input", checkEmailClass);
    email.addEventListener("change", checkEmail);
    tg.addEventListener("input", checkTg);

    inputArr.forEach(input => input.addEventListener("change", activateButton));
}