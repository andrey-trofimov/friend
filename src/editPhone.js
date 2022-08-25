import { maskPhone } from "./maskPhone.js";

export function editPhone(form) {
    let phone = form.phone;
    let note = document.querySelector("#phone-note");
    let button = form.button;
    let regexpReplace = /\D/;

    maskPhone();

    // phone.value = phone.value.replace(regexpReplace, "");
    // phone.value = phone.value.slice(0, 10);

    // phone.className = "input";
    // note.className = "note";
    // note.innerHTML = "";
    // button.className = "button button_enter-page button_block";


}