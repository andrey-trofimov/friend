export function buildIdPage() {
    let div = document.querySelector(".registration-page");
    div.className = "vert-container vert-container_id-msg";
    div.innerHTML = `

        <p class="id-msg" id="id-msg">&nbsp;</p>
        <input
        class="button button_go-to-profile"
        id="submit"
        type="button"
        value="Перейти в профиль"
        />
    `;
}