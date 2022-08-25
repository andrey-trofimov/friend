import { form, json, validField } from "./registration.js";

export function checkTg() {

    let note = document.querySelector("#tg-note");
    let tg = form.tg;
    let regexp = /\W/gi;

    tg.value = tg.value.replace(regexp, "");
    tg.value = "@" + tg.value;

    if (tg.value == "@") {
        tg.value = "";
        tg.className = "input";
        note.innerHTML = "Присылаем только информацию, связанную с твоими сессиями";
        note.className = "note";

        validField.tg = true;
        json.tg = "";
    }

    if (tg.value == "") {
        tg.className = "input";
        note.innerHTML = "Присылаем только информацию, связанную с твоими сессиями";
        note.className = "note";

        validField.tg = true;
        json.tg = "";
    }

    if (tg.value != "") {

        if (tg.value.length > 5) {
            tg.className = "input input_valid";
            note.innerHTML = "Присылаем только информацию, связанную с твоими сессиями";
            note.className = "note";

            validField.tg = true;
            json.tg = tg.value;
        }

        if (tg.value.length < 6) {
            tg.className = "input input_error";
            note.innerHTML = "Ник должен быть не короче 5 символов";
            note.className = "note note_error";


            validField.tg = false;
            json.tg = tg.value;
        }
    }
}