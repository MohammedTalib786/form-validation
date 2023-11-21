let form = document.forms[0]

// console.log(form);

// Validation Functionality

function isValid() {

    // Username Validation 
    let user = form.username.value;
    let erUser = document.getElementsByClassName('erUser')[0];

    if (user.length <= 3 || user.length >= 20) {
        erUser.innerText = '** Must between 3 to 20 Characters long';
        return false;
    }


    function nums(str) {
        let num = /([0-9])\w+/;
        return num.test(str)
    }


    if (nums(user) == false) {
        erUser.innerText = '** Must includes small case and numeric value'
        return false;
    }

    if (user.includes('_') == false) {
        erUser.innerText = '** Must includes underscore';
        return false;
    }

    if (user !== '') {
        erUser.innerText = ''
    }




    // Email Validation
    let EMail = form.Email.value;
    let erEmail = document.getElementsByClassName('erEmail')[0];
    console.log(EMail);

    if (EMail.length == '') {
        erEmail.innerText = '** Must be greater than 3 characters'
        return false
    }

    if (EMail.charAt(EMail.length - 4) != '.' && EMail.charAt(EMail.length - 3) != '.') {
        erEmail.innerText = '** Invalid (.) Placed'
        return false;
    }

    if (EMail !== '') {
        erEmail.innerText = ''
    }




    // Password Validation

    let Password = form.password.value;

    let erPass = document.getElementsByClassName('erPass')[0];

    if (Password.length <= 6 || Password.length >= 30) {
        erPass.innerText = '** Must between 6 to 30 Characters long';
        return false;
    }

    function capital(str) {
        let caps = /([a-z])\w+/;
        return caps.test(str)
    }

    function small(str) {
        let sm = /([A-Z])\w+/;
        return sm.test(str)
    }

    function nums(str) {
        let num = /([0-9])\w+/;
        return num.test(str)
    }


    if (capital(Password) == false || small(Password) == false || nums(Password) == false) {
        erPass.innerText = '**Must include upper,small case and numeric values'
        return false;
    }

    function containsSpecialChars(str) {
        const specialChars =
            /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    }

    if (containsSpecialChars(Password) == false) {
        erPass.innerText = '** Must Contains atleast 1 Speacial Character';
        return false;
    }



    if (Password !== '') {
        erPass.innerText = ''

    }

    // Confirm Password Validation

    let conPassword = form.conPassword.value;
    let erConPass = document.getElementsByClassName('erConPass')[0];

    if (conPassword == '') {
        erConPass.innerText = '** Confirm Pasword can not be Empty'
        return false;
    }

    if (conPassword !== Password) {

        erConPass.innerText = '** Password does not Match!';
        return false;
    }

    if (conPassword !== '') {
        erConPass.innerText = ''

    }

    return true;
}


// Show Password Functionality
function showPass() {
    let Password = form.password;
    let conPassword = form.conPassword;

    console.log(Password);
    console.log(conPassword);

    if (Password.type == 'password' && conPassword.type == 'password') {
        Password.type = 'text'
        conPassword.type = 'text'
    }

    else {
        Password.type = 'password'
        conPassword.type = 'password'

    }
}


// Dark Mode Functionality

const darkMode = (() => {

    let dMode = document.getElementsByClassName('dMode')[0]
    let h2 = document.getElementsByTagName('h2')[0]
    let container = document.getElementsByClassName('container')[0]
    let inputes = document.getElementsByClassName('inputes')
    let Ainputes = Array.from(inputes)

    dMode.addEventListener('click', (e) => {
        e.preventDefault()
        dMode.classList.toggle('lMode')
        if (document.body.style.backgroundColor !== 'rgb(33, 33, 33)') {
            document.body.style.backgroundColor = 'rgb(33, 33, 33)'
            h2.style.color = 'white'
            container.style.backgroundColor = 'rgb(42 42 42)'
            // container.style.boxShadow = 'black'
            Ainputes.forEach((e) => {
                e.style.color = 'white'
            })
        }

        else {
            document.body.style.backgroundColor = 'white'
            h2.style.color = 'black'
            container.style.backgroundColor = 'white'
            // container.style.boxShadow = 'rgb(172 172 172);'
            Ainputes.forEach((e) => {
                e.style.color = 'black'
            })
        }

    })
})()

// rgb(49 49 49)