var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var numberError = document.getElementById('number-error');
var prefError = document.getElementById('pref-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('name').value;

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Please write your full name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    
    var emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = 'Invalid email';
        return false;
    }

    emailError.innerHTML = '';
    return true;
}

function validateNumber(){
    var number = document.getElementById('number').value;
    if(number.length = 0){
        numberError.innerHTML = 'Phone Number is required';
        return false;
    }
    if(number.length !==12){
        numberError.innerHTML = 'Phone number should be 12 digits';
        return false;
    }
    numberError.innerHTML = '';
    return true;
}


function validateMessage(){
    var message = document.getElementById('message').value;
    var required = 25;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = ''
    return true;
}

let checkbox = document.getElementById("accept")
if(!checkbox.checked){
    alert('must agree to newsletter!')
}

// JavaScript
const menuIcon = document.querySelector('.menu-icon');
const navUl = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navUl.classList.toggle('active');
});
