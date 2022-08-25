import { form, json, validField } from "./registration.js";

export function checkPassword() {

    let note = document.querySelector("#password-note");
    let pw = form.pw;
    let pwConfirm = form.pwConfirm;
    // let regexpUp = /[A-Z]/g;
    // let regexpSpec = /[\!\@\#\$\%\^\&\*\(\)\_\+\=\-\?\:\;\№\"\\\[\]\{\}]/g;

    if (pw.value == "" && pwConfirm.value == "") {
        note.innerHTML = "Пароль должен состоять из 8ми символов и включать заглавную букву, специальный символ и цифру";
        note.className = "note";

        pw.className = "input";
        pwConfirm.className = "input";

        validField.password = false;
        json.password = "";
    }

    // if (pw.value.length != 8 ||
    //     !(regexpUp.test(pw.value)) ||
    //     !(regexpSpec.test(pw.value))) {

    //     note.innerHTML = "Пароль должен состоять из 8ми символов и включать заглавную букву, специальный символ и цифру";
    //     note.className = "note note_error";

    //     pw.className = "input input_error";
    //     pwConfirm.className = "input input_error";

    //     validField.password = false;
    //     json.password = "";
    // }

    if (pw.value != pwConfirm.value) {
        note.innerHTML = "Пароли не совпадают";
        note.className = "note note_error";

        pw.className = "input input_error";
        pwConfirm.className = "input input_error";

        validField.password = false;
        json.password = "";
    }

    if (pw.value != "" &&
        pwConfirm.value != "" &&
        pw.value == pwConfirm.value) {
        note.innerHTML = "";
        note.className = "note";

        pw.className = "input input_valid";
        pwConfirm.className = "input input_valid";

        validField.password = true;
        json.password = pw.value;
    }
};