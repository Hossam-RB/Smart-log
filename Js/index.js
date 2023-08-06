var userArr = [];
var uName = document.getElementById("uName")
var eMail = document.getElementById("eMail")
var uPassword = document.getElementById("uPassword")

if (localStorage.getItem("userArr") != null) {
    userArr = JSON.parse(localStorage.getItem("userArr"));
}

// -----Start Add user------//
function addUser() {
    var userO = {
        uNameO: uName.value,
        eMailO: eMail.value,
        uPasswordO: uPassword.value
    }

    if (uName.value == "" || eMail.value == "" || uPassword.value == "") {
        var msgSup = document.getElementById("msgSup")
        msgSup.classList.replace("d-none", "d-block")
        msgSup.classList.add("text-danger")
        msgSup.innerHTML = "All Inputs is Recuerd"
    } else {
        userArr.push(userO)
        clearData()
        localStorage.setItem("userArr", JSON.stringify(userArr));
        location.replace("./index.html")
    }
}
// -----End Add user------//

// -----Start Clear Data------//
function clearData() {
    uName.value = ""
    eMail.value = ""
    uPassword.value = ""
}
// -----End Clear Data------//


// ------- start Login --------//

var eMailLog = document.getElementById("eMailLog")
var uPasswordLog = document.getElementById("uPasswordLog")
var loginMsg = document.getElementById("loginMsg")

function login() {
    if (eMailLog.value == "" || uPasswordLog == "") {
        loginMsg.classList.replace("d-none", "d-block")
        loginMsg.innerHTML = "All inputs is rewerd"
    } else {
        for (var i = 0; i < userArr.length; i++) {
            if ( eMailLog.value == userArr[i].eMailO && uPasswordLog.value == userArr[i].uPasswordO) {
                localStorage.setItem('sessionUsername', userArr[i].uNameO)
                location.replace("./Home.html")
            } else {
                loginMsg.classList.replace("d-none", "d-block")
                loginMsg.innerHTML = "Email Or password is wrong"
            }
        }
    }
}




var btnLog = document.getElementById("btnLog")
btnLog.addEventListener("click", login)



