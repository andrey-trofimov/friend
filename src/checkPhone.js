import { buildRegistrationForm } from "./buildRegistrationForm.js";
import { form, json } from "./registration.js"

export function checkPhone() {

    let phone = form.phone;
    let note = document.querySelector("#phone-note");
    let button = form.button;
    let phoneNumber = "";

    let phoneErrorMessage = {
        1: "Не хватает одной цифры",
        2: "Не хватает две цифры",
        3: "Не хватает три цифры",
        4: "Не хватает четыре цифры",
        5: "Не хватает пять цифр",
        6: "Не хватает шесть цифр",
        7: "Не хватает семь цифр",
        8: "Не хватает восемь цифр",
        9: "Не хватает девять цифр"
    }

    if (phone.value.length > 3 && phone.value.length < 18) {
        let digitNumber = phone.value.match(/\d/g).join("");
        let errorCode = 11 - digitNumber.length;

        phone.className = "input input_enter-page input_error";
        note.className = "note note_error";
        note.innerHTML = phoneErrorMessage[errorCode];
        // button.className = "button button_enter-page button_block";
        button.removeEventListener("click", buildRegistrationForm);
    }

    if (phone.value.length == 18) {
        button.addEventListener("click", buildRegistrationForm);
        phoneNumber = phone.value.match(/[\+\d]/g).join("");
    }

    json.phone = phoneNumber;
}