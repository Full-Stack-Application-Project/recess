// Sign up page
let username;
let password;
let lastName;
let firstName;
let submitBtn;

if (window.location.pathname === '/signup') {
    username = document.querySelector('#email');
    password = document.querySelector('#pass');
    lastName = document.querySelector('#lname');
    firstName = document.querySelector('#fname');
    submitBtn = document.querySelector('#submit');
}

const test = () => {
    console.log('Success!');
}

if (window.location.pathname === '/signup') {
    submitBtn.addEventListener('click', test);
}


// Login page
if (window.location.pathname === '/login') {
    username = document.querySelector('#email');
    password = document.querySelector('#pass');
    submitBtn = document.querySelector('#submit');
}

if (window.location.pathname === '/login') {
    submitBtn.addEventListener('click', test);
}