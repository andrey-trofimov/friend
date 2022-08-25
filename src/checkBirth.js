import { form, json, validField } from "./registration.js";

export function checkBirth() {

    let note = document.querySelector("#birth-note");
    let today = Date.now();
    let birth = form.birth;
    let regexp = [
        /[0-3]/,
        /[0-9]/,
        /\./,
        /[0-1]/,
        /[0-9]/,
        /\./,
        /[1-2]/,
        /[0-9]/,
        /[0-9]/,
        /[0-9]/
    ];
    let birthArr = [];
    let age = 0;

    if (birth.value.length > 0 && birth.value[0] == "3") { regexp[1] = /[0-1]/ };
    if (birth.value.length > 3 && birth.value[3] == "1") { regexp[4] = /[0-2]/ };
    if (birth.value.length > 7 && birth.value[7] == "1") { regexp[8] = /9/ };
    if (birth.value.length > 7 && birth.value[7] == "2") { regexp[8] = /0/ };

    if (birth.value.length > 1 && birth.value[2] != ".") {
        birthArr = birth.value.split("");
        birthArr.splice(2, 0, ".");
        birth.value = birthArr.join("");
    };

    if (birth.value.length > 4 && birth.value[5] != ".") {
        birthArr = birth.value.split("");
        birthArr.splice(5, 0, ".");
        birth.value = birthArr.join("");
    };

    if (birth.value.length > 0) {
        let iMax = birth.value.length < 10 ? birth.value.length : 10;

        for (let i = 0; i < iMax; i++) {
            birthArr[i] = regexp[i].test(birth.value[i]) == true ? birth.value[i] : "";
        }
        birth.value = birthArr.join("");
    }

    if (birthArr.length > 9) {
        let yyyy = birth.value.slice(6, 10);
        let mm = birth.value.slice(3, 5);
        let dd = birth.value.slice(0, 2);

        let birthDate = Date.parse(yyyy + "-" + mm + "-" + dd);
        age = (today - birthDate) / (1000 * 3600 * 24 * 365.25);
        json.birth = `${yyyy}-${mm}-${dd}`;
    }

    if (age < 18.002737) {
        birth.className = "input input_error";
        note.className = "note note_error";
        note.innerHTML = "Для получения услуг тебе должно быть 18 или больше лет. Необходимо согласие родителей.";
        validField.birth = false;
    }

    if (age >= 18.002737 && age < 100) {
        birth.className = "input input_valid";
        note.className = "note";
        note.innerHTML = "";
        validField.birth = true;
    }

    if (age >= 100) {
        birth.className = "input input_error";
        note.className = "note note_error";
        note.innerHTML = `Вам точно ${age - (age % 1)}?`;
        validField.birth = false;
    }

    if (birth.value == "") {
        birth.className = "input";
        note.className = "note";
        note.innerHTML = "Для получения услуг тебе должно быть 18 или больше лет. Необходимо согласие родителей.";
        validField.birth = false;
    }
}
