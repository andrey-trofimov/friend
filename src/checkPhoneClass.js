import { form } from "./registration.js"

export function checkPhoneClass() {
    let phone = form.phone;
    let note = document.querySelector("#phone-note");
    let button = form.button;

    if (phone.value.length == 18) {
        phone.className = "input input_enter-page input_valid";
        note.className = "note";
        note.innerHTML = "";
        button.className = "button button_enter-page";
    }

    if (phone.value.length < 18) {
        phone.className = "input input_enter-page";
        note.className = "note";
        note.innerHTML = "";
        button.className = "button button_enter-page button_block";
    }
}