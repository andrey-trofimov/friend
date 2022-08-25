import { form, json, validField } from "./registration.js";

export function checkEmail() {

    let note = document.querySelector("#email-note");
    let email = form.email;
    // let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
    let regexp = /@/g;

    if (email.value.length == 0) {
        email.className = "input";
        note.innerHTML = "Присылаем только информацию, связанную с твоими сессиями";
        note.className = "note";

        validField.email = true;
        json.email = "";

    } else {

        if (regexp.test(email.value)) {
            email.className = "input input_valid";
            note.innerHTML = "Присылаем только информацию, связанную с твоими сессиями";
            note.className = "note";

            validField.email = true;
            json.email = email.value;

        } else {

            email.className = "input input_error";
            note.innerHTML = "Пропущен символ @";
            note.className = "note note_error";

            validField.email = false;
            json.email = "";
        }
    }
}