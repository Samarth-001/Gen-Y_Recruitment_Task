const signupbtn = document.getElementById('signupbtn');
const signinbtn = document.getElementById('signinbtn');
const box = document.getElementById('box');

signupbtn.addEventListener('click', () =>
box.classList.add('right-panel-active'));

signinbtn.addEventListener('click', () =>
box.classList.remove('right-panel-active'));