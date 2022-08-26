export function checkIndexFields() {
    let button = document.getElementById("submit");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let phoneNote = document.getElementById("phone-note");
    let passwordNote = document.getElementById("password-note");

    if (phone.value.length == 18) {
        phone.className = "input input_enter-page input_valid";
        phoneNote.className = "note";
        phoneNote.innerHTML = "";
        button.className = "button button_enter-page";
    }

    if (phone.value.length < 18) {
        phone.className = "input input_enter-page";
        phoneNote.className = "note";
        phoneNote.innerHTML = "";
        button.className = "button button_enter-page button_block";
    }
}