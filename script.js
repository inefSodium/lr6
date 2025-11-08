document.querySelector('.btn-1').addEventListener('click', function() {
    const square = document.querySelector('.square');
    const buttonColor = window.getComputedStyle(this).backgroundColor;
    square.style.backgroundColor = buttonColor;
});
document.querySelector('.btn-2').addEventListener('click', function() {
    const square = document.querySelector('.square');
    const buttonColor = window.getComputedStyle(this).backgroundColor;
    square.style.backgroundColor = buttonColor;
});
document.querySelector('.btn-4').addEventListener('click', function() {
    const square = document.querySelector('.square');
    const buttonColor = window.getComputedStyle(this).backgroundColor;
    square.style.backgroundColor = buttonColor;
});
document.querySelector('.btn-3').addEventListener('click', function() {
    const randomButton = document.querySelectorAll('.btn-1, .btn-2, .btn-4')[Math.floor(Math.random() * 3)];
    const square = document.querySelector('.square');
    const buttonColor = window.getComputedStyle(randomButton).backgroundColor;
    square.style.backgroundColor = buttonColor;
});