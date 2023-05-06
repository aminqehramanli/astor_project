import { signup_btn, registerEmail, registerName, registerPassword } from "./query.js"

let users = []

if (localStorage.getItem('astorUser')) {
    users = JSON.parse(localStorage.getItem('astorUser'))
}

signup_btn.addEventListener('click', () => {
    if (registerEmail.value != '' && registerName.value != '' && registerPassword.value != '') {
        const newUserCheck = users.find(user => user.email == registerEmail.value);
        if (!newUserCheck) {
            const newUser = {
                name: registerName.value,
                email: registerEmail.value,
                password: registerPassword.value
            }

            users.push(newUser);
            localStorage.setItem('astorUser', JSON.stringify(users));
            window.location.pathname = 'signIn.html'
        } 
    }
})

