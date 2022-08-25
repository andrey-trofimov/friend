export function buildRegistrationForm() {
  document.querySelector("main").className = "";
  let regPage = document.querySelector(".vert-container");
  regPage.className = "registration-page";
  regPage.innerHTML = `

          <h1 class="title title_registration-page">Укажи личные данные</h1>

          <form>
            <h2 class="subtitle">Придумай пароль</h2>

            <label for="password" class="label">Пароль <span class="error">*</span></label>
            <input type="password" class="input" id="password" name="password" required />
            <p class="note" id="password-note">
              Пароль должен состоять из 8ми символов и включать заглавную букву,
              специальный символ и цифру
            </p>

            <label for="password-confirm" class="label">Повтори пароль <span class="error">*</span></label>
            <input type="password" class="input" id="password-confirm" name="password-confirm" required />
            <p class="note" id="password-confirm-note"></p>

            <h2 class="subtitle">Расскажи о себе</h2>

            <label for="name" class="label">Имя или псевдоним <span class="error">*</span></label>
            <input type="text" class="input" id="name" name="name" required />
            <p class="note" id="name-note">
              Будет доступен только твоему психологу и личному помощнику
            </p>

            <label for="birth" class="label">Дата рождения <span class="error">*</span></label>
            <span class="date-picker">
              <input type="text" class="input" id="birth" name="birth" required placeholder="__ __ .__ __.__ __ __ __" /></span>
            <p class="note" id="birth-note">
              Для получения услуг тебе должно быть 18 или больше лет
            </p>

            <h2 class="subtitle">Укажи по желанию</h2>

            <label for="email" class="label">E-mail</label>
            <input type="email" class="input" id="email" name="email" />
            <p class="note" id="email-note">
              Присылаем только информацию, связанную с твоими сессиями
            </p>

            <label for="tg" class="label">Ник в Телеграм</label>
            <input type="text" class="input" id="tg" name="tg" placeholder="@" />
            <p class="note" id="tg-note">
              Присылаем только информацию, связанную с твоими сессиями
            </p>

            <input type="button" class="button button_registration-page button_block" id="submit" value="Далее" />
            
          </form>
          
`;
}