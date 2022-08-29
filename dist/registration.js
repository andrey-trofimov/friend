(()=>{"use strict";var e={d:(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};function n(){document.querySelector("main").className="";let e=document.querySelector(".vert-container");e.className="registration-page",e.innerHTML='\n\n          <h1 class="title title_registration-page">Укажи личные данные</h1>\n\n          <form>\n            <h2 class="subtitle">Придумай пароль</h2>\n\n            <label for="password" class="label">Пароль <span class="error">*</span></label>\n            <input type="password" class="input" id="password" name="password" required />\n            <p class="note" id="password-note">\n              Пароль должен состоять из 8ми символов и включать заглавную букву,\n              специальный символ и цифру\n            </p>\n\n            <label for="password-confirm" class="label">Повтори пароль <span class="error">*</span></label>\n            <input type="password" class="input" id="password-confirm" name="password-confirm" required />\n            <p class="note" id="password-confirm-note"></p>\n\n            <h2 class="subtitle">Расскажи о себе</h2>\n\n            <label for="name" class="label">Имя или псевдоним <span class="error">*</span></label>\n            <input type="text" class="input" id="name" name="name" required />\n            <p class="note" id="name-note">\n              Будет доступен только твоему психологу и личному помощнику\n            </p>\n\n            <label for="birth" class="label">Дата рождения <span class="error">*</span></label>\n            <span class="date-picker">\n              <input type="text" class="input" id="birth" name="birth" required placeholder="__ __ .__ __.__ __ __ __" /></span>\n            <p class="note" id="birth-note">\n              Для получения услуг тебе должно быть 18 или больше лет\n            </p>\n\n            <h2 class="subtitle">Укажи по желанию</h2>\n\n            <label for="email" class="label">E-mail</label>\n            <input type="email" class="input" id="email" name="email" />\n            <p class="note" id="email-note">\n              Присылаем только информацию, связанную с твоими сессиями\n            </p>\n\n            <label for="tg" class="label">Ник в Телеграм</label>\n            <input type="text" class="input" id="tg" name="tg" placeholder="@" />\n            <p class="note" id="tg-note">\n              Присылаем только информацию, связанную с твоими сессиями\n            </p>\n\n            <input type="button" class="button button_registration-page button_block" id="submit" value="Далее" />\n            \n          </form>\n          \n'}function t(){let e=document.querySelector("#password-note"),n=g.pw,t=g.pwConfirm;""==n.value&&""==t.value&&(e.innerHTML="Пароль должен состоять из 8ми символов и включать заглавную букву, специальный символ и цифру",e.className="note",n.className="input",t.className="input",b.password=!1,_.password=""),n.value!=t.value&&(e.innerHTML="Пароли не совпадают",e.className="note note_error",n.className="input input_error",t.className="input input_error",b.password=!1,_.password=""),""!=n.value&&""!=t.value&&n.value==t.value&&(e.innerHTML="",e.className="note",n.className="input input_valid",t.className="input input_valid",b.password=!0,_.password=n.value)}function a(){let e=g.userName,n=document.querySelector("#name-note"),t=/[\p{sc=Cyrillic}\d]/giu;e.value=e.value.replace(/[a-z"!#\$%&'\*\+-/=\?\^_`{\|}~@\.\:\;]/gi,""),t.test(e.value)&&(e.value=e.value.match(t).join("")),e.value.length>20&&(e.className="input input_error",n.className="note note_error",n.innerHTML=`Превышено допустимое количество символов: сократите ${e.value.length-20} символов`,b.userName=!1,_.name=""),""==e.value&&(e.className="input",n.className="note",n.innerHTML="Будет доступен только твоему психологу и личному помощнику",b.userName=!1,_.name=""),e.value.length<21&&e.value.length>0&&(e.className="input input_valid",n.className="note",n.innerHTML="Будет доступен только твоему психологу и личному помощнику",b.userName=!0,_.name=e.value)}function l(){let e=document.querySelector("#birth-note"),n=Date.now(),t=g.birth,a=[/[0-3]/,/[0-9]/,/\./,/[0-1]/,/[0-9]/,/\./,/[1-2]/,/[0-9]/,/[0-9]/,/[0-9]/],l=[],s=0;if(t.value.length>0&&"3"==t.value[0]&&(a[1]=/[0-1]/),t.value.length>3&&"1"==t.value[3]&&(a[4]=/[0-2]/),t.value.length>7&&"1"==t.value[7]&&(a[8]=/9/),t.value.length>7&&"2"==t.value[7]&&(a[8]=/0/),t.value.length>1&&"."!=t.value[2]&&(l=t.value.split(""),l.splice(2,0,"."),t.value=l.join("")),t.value.length>4&&"."!=t.value[5]&&(l=t.value.split(""),l.splice(5,0,"."),t.value=l.join("")),t.value.length>0){let e=t.value.length<10?t.value.length:10;for(let n=0;n<e;n++)l[n]=1==a[n].test(t.value[n])?t.value[n]:"";t.value=l.join("")}if(l.length>9){let e=t.value.slice(6,10),a=t.value.slice(3,5),l=t.value.slice(0,2);s=(n-Date.parse(e+"-"+a+"-"+l))/315576e5,_.birth=`${e}-${a}-${l}`}s<18.002737&&(t.className="input input_error",e.className="note note_error",e.innerHTML="Для получения услуг тебе должно быть 18 или больше лет. Необходимо согласие родителей.",b.birth=!1),s>=18.002737&&s<100&&(t.className="input input_valid",e.className="note",e.innerHTML="",b.birth=!0),s>=100&&(t.className="input input_error",e.className="note note_error",e.innerHTML=`Вам точно ${s-s%1}?`,b.birth=!1),""==t.value&&(t.className="input",e.className="note",e.innerHTML="Для получения услуг тебе должно быть 18 или больше лет. Необходимо согласие родителей.",b.birth=!1)}function s(){let e=document.querySelector("#email-note"),n=g.email;0==n.value.length?(n.className="input",e.innerHTML="Присылаем только информацию, связанную с твоими сессиями",e.className="note",b.email=!0,_.email=""):/@/g.test(n.value)?(n.className="input input_valid",e.innerHTML="Присылаем только информацию, связанную с твоими сессиями",e.className="note",b.email=!0,_.email=n.value):(n.className="input input_error",e.innerHTML="Пропущен символ @",e.className="note note_error",b.email=!1,_.email="")}function i(){let e=document.querySelector("#email-note"),n=g.email,t=/[a-z0-9!#\$%&'\*\+-/=\?\^_`{\|}~@\.]/gi,a=/[\p{sc=Cyrillic}\s]/giu;a.test(n.value)&&(e.innerHTML="Допустимы латинские символы, цифры и спец. символы.",e.className="note note_error",n.className="input input_error",n.value=n.value.replace(a,"")),t.test(n.value)&&(n.value=n.value.match(t).join(""),e.innerHTML="Присылаем только информацию, связанную с твоими сессиями",e.className="note",n.className="input")}function r(){let e=document.querySelector("#tg-note"),n=g.tg;n.value=n.value.replace(/\W/gi,""),n.value="@"+n.value,"@"==n.value&&(n.value="",n.className="input",e.innerHTML="Присылаем только информацию, связанную с твоими сессиями",e.className="note",b.tg=!0,_.tg=""),""==n.value&&(n.className="input",e.innerHTML="Присылаем только информацию, связанную с твоими сессиями",e.className="note",b.tg=!0,_.tg=""),""!=n.value&&(n.value.length>5&&(n.className="input input_valid",e.innerHTML="Присылаем только информацию, связанную с твоими сессиями",e.className="note",b.tg=!0,_.tg=n.value),n.value.length<6&&(n.className="input input_error",e.innerHTML="Ник должен быть не короче 5 символов",e.className="note note_error",b.tg=!1,_.tg=n.value))}function o(){let e=document.querySelector(".registration-page");e.className="vert-container vert-container_id-msg",e.innerHTML='\n\n        <p class="id-msg" id="id-msg">&nbsp;</p>\n        <input\n        class="button button_go-to-profile"\n        id="submit"\n        type="button"\n        value="Перейти в профиль"\n        />\n    '}function u(){document.querySelector("main").className="",document.querySelector(".container").innerHTML='\n        \n        <div class="nav"><a href="/">Главная</a> / Профиль</div>\n        <div class="profile-page">\n            <h1 class="title title_profile-page">Профиль</h1>\n\n            <p class="note note_profile-page">Имя или псевдоним *</p>\n            <p id="name"></p>\n\n            <p class="note note_profile-page">Дата рождения *</p>\n            <p id="birth"></p>\n\n            <p class="note note_profile-page">E-mail</p>\n            <p id="email"></p>\n\n            <p class="note note_profile-page">Ник в Телеграм</p>\n            <p id="tg"></p>\n        </div>\n    '}function c(){document.location="./"}function p(){u();let e=f.id;fetch(`${y}http://158.160.4.55:49161/v1/user?id=${e}`,{method:"GET",headers:{accept:"application/json"}}).then((e=>e.json())).then((e=>(u(),e))).then((e=>function(e){["name","birth","email","tg"].forEach((n=>document.getElementById(`${n}`).innerHTML=`${e[n]}`))}(e)))}function m(){let e=JSON.stringify(_);fetch(`${y}http://158.160.4.55:49161/v1/auth/register/`,{method:"POST",body:e,headers:{"Content-type":"application/json; charset=UTF-8",accept:"application/json"}}).then((e=>{if(e.status>=200&&e.status<300)return N=e.status,e;{let n=new Error(e.statusText);throw n.response=e,N=e.status,n}})).then((e=>e.json())).then((e=>(o(),f=e,e))).then((e=>function(e){document.getElementById("id-msg").innerHTML=`Присвоен идентификатор ${e.id.slice(0,8)}`,f=e,document.getElementById("submit").addEventListener("click",p)}(e))).catch((e=>e.response.json())).then((e=>(o(),e))).then((e=>function(e){N>=200&&N<299||(400==N?(document.getElementById("id-msg").innerHTML=e["Текст"],document.getElementById("submit").value="На главную",document.getElementById("submit").addEventListener("click",c)):console.log("Error: ",e))}(e)))}function d(){let e=!0,n=g.button;for(let n in b)e&=b[n];e&&(n.className="button button_registration-page",n.addEventListener("click",m)),e||(n.className="button button_registration-page button_block",n.removeEventListener("click",m))}e.d({},{cr:()=>g,AV:()=>_,qy:()=>y,ZF:()=>f,vR:()=>N,qd:()=>b});let v=document.getElementById("submit"),h=document.getElementById("phone"),g={phone:h,pw:"",pwConfirm:"",userName:"",birth:"",email:"",tg:"",button:v},b={password:!1,userName:!1,birth:!1,email:!0,tg:!0},_={phone:"",password:"",name:"",birth:"",tg:"",email:""},f={},N="",y="https://cors-anywhere.herokuapp.com/";document.addEventListener(onload,([].forEach.call(document.querySelectorAll("#phone"),(function(e){var n;function t(e){e.keyCode&&(n=e.keyCode),this.selectionStart<3&&e.preventDefault();var t="+7 (___) ___ __ __",a=0,l=t.replace(/\D/g,""),s=this.value.replace(/\D/g,""),i=t.replace(/[_\d]/g,(function(e){return a<s.length?s.charAt(a++)||l.charAt(a):e}));-1!=(a=i.indexOf("_"))&&(a<5&&(a=3),i=i.slice(0,a));var r=t.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(r=new RegExp("^"+r+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=i),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",t,!1),e.addEventListener("focus",t,!1),e.addEventListener("blur",t,!1),e.addEventListener("keydown",t,!1)})),h.addEventListener("change",(function(){let e=g.phone,t=document.querySelector("#phone-note"),a=g.button,l="",s={1:"Не хватает одной цифры",2:"Не хватает две цифры",3:"Не хватает три цифры",4:"Не хватает четыре цифры",5:"Не хватает пять цифр",6:"Не хватает шесть цифр",7:"Не хватает семь цифр",8:"Не хватает восемь цифр",9:"Не хватает девять цифр"};if(e.value.length>3&&e.value.length<18){let l=11-e.value.match(/\d/g).join("").length;e.className="input input_enter-page input_error",t.className="note note_error",t.innerHTML=s[l],a.removeEventListener("click",n)}18==e.value.length&&(a.addEventListener("click",n),l=e.value.match(/[\+\d]/g).join("")),_.phone=l})),void h.addEventListener("input",(function(){let e=g.phone,n=document.querySelector("#phone-note"),t=g.button;18==e.value.length&&(e.className="input input_enter-page input_valid",n.className="note",n.innerHTML="",t.className="button button_enter-page"),e.value.length<18&&(e.className="input input_enter-page",n.className="note",n.innerHTML="",t.className="button button_enter-page button_block")}))));let L=document.querySelector("main");function E(){let e=document.getElementById("password"),n=document.getElementById("password-confirm"),o=document.getElementById("name"),u=document.getElementById("birth"),c=document.getElementById("email"),p=document.getElementById("tg"),m=document.querySelectorAll(".input");g.pw=e,g.pwConfirm=n,g.userName=o,g.birth=u,g.email=c,g.tg=p,g.button=document.querySelector("#submit"),e.addEventListener("change",t),n.addEventListener("change",t),o.addEventListener("input",a),u.addEventListener("input",l),c.addEventListener("input",i),c.addEventListener("change",s),p.addEventListener("input",r),m.forEach((e=>e.addEventListener("change",d)))}new MutationObserver((e=>{for(let n of e)for(let e of n.addedNodes)e instanceof HTMLElement&&e.matches("form")&&E()})).observe(L,{childList:!0,subtree:!0})})();