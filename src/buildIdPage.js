import { serverResponse, responseStatus } from "./registration";
import { buildProfilePage } from "./buildProfilePage.js";
export function buildIdPage() {
    let msg = "";
    let div = document.querySelector(".registration-page");
    div.className = "vert-container vert-container_id-msg";
    div.innerHTML = `

        <p class="id-msg" id="id-msg">&nbsp;</p>
        <input
        class="button button_registration-page button_go-to-profile"
        id="submit"
        type="button"
        value="Перейти в профиль"
        />
    `;

    let p = document.querySelector("#id-msg");
    let button = document.querySelector("#submit");

    console.log(responseStatus);
    console.log(serverResponse);

    if (responseStatus = 201) {
        msg = `Присвоен идентификатор ${serverResponse.id.slice(0, 9)}`;
        button.addEventListener("click", buildProfilePage);
    }

    if (responseStatus = 400) {
        msg = `${serverResponse["Текст"]}`;
        button.value = "Войти";
        button.addEventListener("click", goHome);
    }

    if (responseStatus && responseStatus != 201 && responseStatus != 400) {
        msg = `Ошибка ${responseStatus}`;
        button.value = "Обновить";
        button.addEventListener("click", location.reload());
    }

    p.innerHTML = msg;

    function goHome() {
        document.location = '/';
    }
}