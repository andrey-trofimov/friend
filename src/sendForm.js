import { form, json, validField } from "./registration.js";

export function sendForm() {

    let userData = JSON.stringify(json);
    const options = {
        method: "POST",
        body: userData,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'accept': 'application/json',
        }
    }

    fetch('https://cors-anywhere.herokuapp.com/http://158.160.4.55:49161/v1/auth/register/', options)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(() => { console.log('error') });

}



// ,
// referrerPolicy: "http://158.160.4.55:49161/v1/auth/register/",

// const btn = document.querySelector('.j-btn');

// btn.addEventListener('click', () => {
//     // Настраиваем наш запрос
//     const options = {
//         // Будем использовать метод POST
//         method: 'POST',
//         // Добавим тело запроса
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         }),
//         // Дополнительный заголовое с описанием типа данных,
//         // которые мы отправляем серверу. В данном случае
//         // сервер jsonplaceholder будет знать, как ему
//         // обрабатывать запрос
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//         }
//     }
//     // Делаем запрос за данными
//     fetch('https://jsonplaceholder.typicode.com/posts', options)
//         .then(response => response.json())
//         .then(json => console.log(json))
// });








// const btn = document.querySelector('.j-btn');

// // Функция, которая возвращаем fetch
// const useRequest = () => {
//     return fetch('https://picsum.photos/v2/list/?limit=5')
//         .then((response) => {
//             console.log('response', response);
//             return response.json();
//         })
//         .then((json) => { return json; })
//         .catch(() => { console.log('error') });
// }

// btn.addEventListener('click', async () => {
//     console.log('start');

//     const requestResult = await useRequest();
//     console.log('requestResult', requestResult);

//     console.log('end');
// });