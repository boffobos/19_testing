import stringMirror from './stringMirror.js';
//const stringMirror = require('./stringMirror');

const dialog = document.querySelector('#inputBox');
const btnEnter = document.querySelector('#btnEnter');
const output = document.querySelector('#output');
const input = document.querySelector('#string');

document.body.onload = function() {
    dialog.showModal();
    output.textContent = 'Loading...'
}

btnEnter.addEventListener('click', () => {
    let string = input.value;
    dialog.close();
    let result = stringMirror(string);
    if (!result) {
        output.textContent = 'Пустая строка. Введите что-нибудь...';
        dialog.showModal();
        return;
    }
    let p = `<p>Строка: ${result[0]}</p><p>Отзеркаленная строка: ${result[1]}</p>`;
    output.innerHTML = p;
});