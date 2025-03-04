const container = document.querySelector('.container');
const signupButton = document.querySelector('.secao-cadastro header');
const loginButton = document.querySelector('.secao-login header');

loginButton.addEventListener('click', () => {
    container.classList.add('active');
});

signupButton.addEventListener('click', () => {
    container.classList.remove('active');
});