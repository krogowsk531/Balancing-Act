var xClose = document.querySelector('.close')
var welcomeBox = document.querySelector('.welcome-box')
var boxShaddow = document.querySelector('.box-shadow')
var welcomeText = document.querySelector('.welcome-text')
var walletIcon = document.querySelector('.wallet-icon')
var dashboardIcon = document.querySelector('.dashboard-icon')
var dashboardHighlight = document.querySelector('.dashboard-highlight')
var walletHighlight = document.querySelector('.wallet-highlight')
var dashboardUnhighlight = document.querySelector('.dashboard-unhighlight')

xClose.addEventListener('click', closeBanner)
walletIcon.addEventListener('click', toggleHighlight)
// walletIcon.addEventListener('click', deleteHighlight)

function closeBanner() {
xClose.classList.add('hidden');
welcomeBox.classList.add('hidden');
boxShaddow.classList.add('hidden');
welcomeText.classList.add('hidden');
}

function toggleHighlight() {

dashboardIcon.classList.remove('dashboard-highlight');
walletIcon.classList.add('wallet-highlight')
}
