import { buildProfilePage } from "./buildProfilePage.js";
import { responseStatus, proxyUr, responseData } from "./registration";

export function showId(data) {
    document.getElementById("id-msg").innerHTML = `Присвоен идентификатор ${data.id.slice(0, 8)}`;
    document.getElementById("submit").addEventListener("click", goProfile);
}

export function showError(data) {
    if (responseStatus >= 200 && responseStatus < 299) {
        return;
    } else {

        if (responseStatus == 400) {
            document.getElementById("id-msg").innerHTML = data["Текст"];
            document.getElementById("submit").value = "На главную";
            document.getElementById("submit").addEventListener("click", goHome);
        } else {
            console.log("Error: ", data);
        }
    }
}

export function showProfile(data) {
    let arr = ["name", "birth", "email", "tg"]
    arr.forEach(key => document.getElementById(`${key}`).innerHTML = `${data[key]}`);
}

export function goHome() {
    document.location = "./";
}

export function goProfile() {
    buildProfilePage();

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

}