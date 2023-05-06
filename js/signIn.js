import { loginBtn, loginPassword, loginEmail } from "./query.js"

let users = []

if (localStorage.getItem('astorUser')) {
    users = JSON.parse(localStorage.getItem('astorUser'))
}

loginBtn.addEventListener('click', () => {
    if (loginEmail.value != '' && loginPassword.value != '') {
        const checkEmail = users.findIndex(user => user.email == loginEmail.value);
        if (!checkEmail || checkEmail.password != loginPassword.value) {
            alert("Incorrect incredentials")
        } else {
            window.location.pathname = 'index.html'
        }
    }
})

