export function buildProfilePage() {
    document.querySelector("main").className = "";
    document.querySelector(".container").innerHTML = `
        
        <div class="nav"><a href="/">Главная</a> / Профиль</div>
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