import { form, json, validField } from "./registration.js";

export function checkName() {

    let userName = form.userName;
    let note = document.querySelector("#name-note");
    let regexpReplace = /[a-z"!#\$%&'\*\+-/=\?\^_`{\|}~@\.\:\;]/gi;
    let regexpValid = /[\p{sc=Cyrillic}\d]/ugi;

    userName.value = userName.value.replace(regexpReplace, "");

    if (regexpValid.test(userName.value)) {
        userName.value = userName.value.match(regexpValid).join("");
    };

    if (userName.value.length > 20) {
        userName.className = "input input_error";
        note.className = "note note_error";
        note.innerHTML = `Превышено допустимое количество символов: сократите ${userName.value.length - 20} символов`;

        validField.userName = false;
        json.name = "";
    }

    if (userName.value == "") {
        userName.className = "input";
        note.className = "note";
        note.innerHTML = "Будет доступен только твоему психологу и личному помощнику";

        validField.userName = false;
        json.name = "";
    }

    if (userName.value.length < 21 && userName.value.length > 0) {
        userName.className = "input input_valid";
        note.className = "note";
        note.innerHTML = "Будет доступен только твоему психологу и личному помощнику";

        validField.userName = true;
        json.name = userName.value;
    }
}