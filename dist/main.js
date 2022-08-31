let phone = document.querySelector("#phone");
let phoneNote = document.querySelector("#phone-note");
let password = document.querySelector("#password");
let passwordNote = document.querySelector("#password-note");
let button = document.querySelector("#submit");

let json = {};

let serverResponse = "";
let responseStatus = "";
let errorText = "";
let userProfile = {};

let validFieldIndex = {
    phone: false,
    password: false,
};

let proxyUrl = "https://cors-anywhere.herokuapp.com/";

document.addEventListener(onload, initEntry());
function initEntry() {
    maskPhone();
    phone.addEventListener("input", checkIndexFields);
    phone.addEventListener("change", checkPhoneError);
    password.addEventListener("input", setPwStyle);
}

function checkIndexFields() {
    if (phone.value.length == 18) {
        phone.className = "input input_enter-page input_valid";
        phoneNote.className = "note";
        phoneNote.innerHTML = "";

        validFieldIndex.phone = true;
    }

    if (phone.value.length < 18) {
        phone.className = "input input_enter-page";
        phoneNote.className = "note";
        phoneNote.innerHTML = "";

        validFieldIndex.phone = false;
    }

    sendEnterForm();
}

function checkPhoneError() {
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
        phoneNote.className = "note note_error";
        phoneNote.innerHTML = phoneErrorMessage[errorCode];
    }

    if (phone.value.length == 18) {
        phoneNumber = phone.value.match(/[\+\d]/g).join("");
    }

    json.phone = phoneNumber;
}

function maskPhone() {
    [].forEach.call(document.querySelectorAll('#phone'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ __ __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

};

function setPwStyle() {
    passwordNote.innerHTML = "";

    if (password.value.length > 0) {
        password.className = "input input_enter-page input_valid";
        validFieldIndex.password = true;
    } else {
        password.className = "input input_enter-page";
        validFieldIndex.password = false;
    }

    sendEnterForm();
}

function sendEnterForm() {
    let isFormValid = true;
    for (let key in validFieldIndex) {
        isFormValid &= validFieldIndex[key];
    }

    if (isFormValid) {
        button.className = "button button_enter-page";
        button.addEventListener("click", sendData);
    } else {
        button.className = "button button_enter-page button_block";
        button.removeEventListener("click", sendData);
    }
}

function sendData() {
    json.phone = phone.value.match(/[\d\+]/g).join("");
    json.password = password.value;

    let userData = JSON.stringify(json);

    let options = {
        method: "POST",
        body: userData,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'accept': 'application/json',
        }
    }

    fetch(`${proxyUrl}http://158.160.4.55:49161/v1/auth/login/`, options)
        .then(res => {
            if (res.status >= 200 && res.status < 300) {
                responseStatus = res.status;
                return res;
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                responseStatus = res.status;
                errorText = error;
                throw error;
            }
        })
        .then(res => res.json())
        .then(data => {
            let userId = data.id;
            options = {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                }
            }

            fetch(`${proxyUrl}http://158.160.4.55:49161/v1/user?id=${userId}`, options)
                .then(res => res.json())
                .then(data => {
                    buildProfilePage();
                    return data;
                })
                .then(data => showProfile(data));

        })
        .catch((e) => e.response.json())
        .then(data => showError(data));
}

function buildProfilePage() {
    document.querySelector(".character1").className = "";
    document.querySelector(".container").innerHTML = `
    
        <div class="nav"><a href="./">Главная</a> / Профиль</div>
        <div class="profile-page">
          <h1 class="title title_profile-page">Профиль</h1>

          <p class="note note_profile-page">Имя или псевдоним *</p>
          <p id="name"></p>

          <p class="note note_profile-page">Дата рождения *</p>
          <p id="birth"></p>

          <p class="note note_profile-page">E-mail</p>
          <p id="email"></p>

          <p class="note note_profile-page">Ник в Телеграм</p>
          <p id="tg"></p>
        </div>
    `;
}

function showProfile(data) {
    let arr = ["name", "birth", "email", "tg"]
    arr.forEach(key => document.getElementById(`${key}`).innerHTML = `${data[key]}`);
}

function showLoginError(data) {
    if (responseStatus == 400) {
        passwordNote.innerHTML = data["Текст"];
        passwordNote.className = "note note_error";
        password.className = "input input_error";
    }

    if (responseStatus == 404) {
        phoneNote.innerHTML = data["Текст"];
        phoneNote.className = "note note_error";
        phone.className = "input input_error";
    }
}

function showOtherError() {

    document.querySelector("main").className = "";
    document.querySelector(".container").innerHTML = `
    
        <div class="container">
            <div class="profile-page">
                <h1 class="title title_profile-page">Ошибка</h1>
                <p>${responseStatus} ${errorText}</p>
            </div>
        </div>
    `;
}

function showError(data) {
    if (responseStatus >= 200 && responseStatus < 299) {
        return;
    } else {

        if (responseStatus == 404 || responseStatus == 400) {
            showLoginError(data);
        } else {
            showOtherError();
        }
    }
}