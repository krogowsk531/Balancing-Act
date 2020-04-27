var xClose = document.querySelector('.close')
var welcomeBox = document.querySelector('.welcome-box')
var boxShaddow = document.querySelector('.box-shadow')
var welcomeText = document.querySelector('.welcome-text')

xClose.addEventListener('click', closeBanner)

function closeBanner() {
xClose.classList.add('hidden');
welcomeBox.classList.add('hidden');
boxShaddow.classList.add('hidden');
welcomeText.classList.add('hidden');
}
