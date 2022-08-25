import { form } from "./registration.js";

export function checkEmailClass() {

    let note = document.querySelector("#email-note");
    let email = form.email;
    let regexp = /[a-z0-9!#\$%&'\*\+-/=\?\^_`{\|}~@\.]/gi;
    let regexpReplace = /[\p{sc=Cyrillic}\s]/giu;
    // let regexpAt = /@/g;

    if (regexpReplace.test(email.value)) {
        note.innerHTML = "Допустимы латинские символы, цифры и спец. символы.";
        note.className = "note note_error";
        email.className = "input input_error";
        email.value = email.value.replace(regexpReplace, "");
    };

    if (regexp.test(email.value)) {
        email.value = email.value.match(regexp).join("");
        note.innerHTML = "Присылаем только информацию, связанную с твоими сессиями";
        note.className = "note";
        email.className = "input";
    };
}