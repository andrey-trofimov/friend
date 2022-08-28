import { json, proxyUrl, responseStatus, responseData, responseError } from "./registration.js";
import { buildIdPage } from "./buildIdPage.js";
import { showId, showError, goHome } from "./showData.js";

export function sendForm() {

    let userData = JSON.stringify(json);

    let options = {
        method: "POST",
        body: userData,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'accept': 'application/json',
        }
    }

    fetch(`${proxyUrl}http://158.160.4.55:49161/v1/auth/register/`, options)
        .then(res => {
            if (res.status >= 200 && res.status < 300) {
                responseStatus = res.status;
                return res;
            } else {
                let error = new Error(res.statusText);
                error.response = res;
                responseStatus = res.status;
                throw error;
            }
        })
        .then(res => res.json())
        .then(data => {
            buildIdPage();
            responseData = data;
            return data;
        })
        .then(data => showId(data))
        .catch((e) => e.response.json())
        .then(data => {
            buildIdPage();
            return data;
        })
        .then(data => showError(data));
}