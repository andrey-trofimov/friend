import { json, serverResponse, responseStatus } from "./registration.js";
import { buildIdPage } from "./buildIdPage.js";


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
        .then(data => serverResponse = data)
        .then(() => {
            console.log('Ok Error: ', responseStatus);
            console.log('Ok Responce: ', serverResponse);
        })
        // .then(buildIdPage())
        .catch(e => e.response.json())
        .then(data => serverResponse = data)
        .then(() => {
            console.log('Er Error: ', responseStatus);
            console.log('Er Responce: ', serverResponse);
        });

}