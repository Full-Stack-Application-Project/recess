// Sign up page
let username;
let password;
let lastName;
let firstName;
let submitBtn;

if (window.location.pathname === '/signup') {
    username = document.querySelector('#username');
    password = document.querySelector('#password');
    lastName = document.querySelector('#lastName');
    firstName = document.querySelector('#firstName');
    submitBtn = document.querySelector('#submitBtn');
}

const test = () => {
    console.log('Success!');
}

if (window.location.pathname === '/signup') {
    submitBtn.addEventListener('click', test);
}


// Login page
if (window.location.pathname === '/login') {
    username = document.querySelector('#username');
    password = document.querySelector('#password');
}

