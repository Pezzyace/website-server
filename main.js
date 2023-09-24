const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});


loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
})

loginBtn.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

closeBtn.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});




