
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let json = {
    phone: "+77777777773",
    password: "7",
    name: "Стажер",
    birth: "2000-09-01",
    tg: "@РHero1",
    email: "ok@ok.ok",
}

let userData = JSON.stringify(json);
let responseStatus = "";

document.addEventListener(onload, sendData());

function sendData() {
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
                errorText = error;
                throw error;
            }
        })
        .then(res => res.json())
        .then(data => showId(data))
        .catch((e) => e.response.json())
        .then(data => showError(data));
}

function showId(data) {
    document.getElementById("id-msg").innerHTML = `Присвоен идентификатор ${data.id.slice(0, 8)}`;
}

function showError(data) {
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

function goHome() {
    document.location = "./";
}

// {
//     let userId = data.id;
//     options = {
//         method: "GET",
//         headers: {
//             'accept': 'application/json',
//         }
//     }

//     fetch(`${proxyUrl}http://158.160.4.55:49161/v1/user?id=${userId}`, options)
//         .then(res => res.json())
//         .then(data => {
//             buildProfilePage();
//             return data;
//         })
//         .then(data => showProfile(data));

// }