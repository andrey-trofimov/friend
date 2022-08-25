import { sendForm } from "./sendForm.js";
import { form, validField } from "./registration.js";

export function activateButton() {

    let isFormValid = true;
    let button = form.button;

    for (let key in validField) {
        isFormValid &= validField[key];
    }

    if (isFormValid) {
        button.className = "button button_registration-page";
        button.addEventListener("click", sendForm);
    }

    if (!isFormValid) {
        button.className = "button button_registration-page button_block";
        button.removeEventListener("click", sendForm);
    }
}