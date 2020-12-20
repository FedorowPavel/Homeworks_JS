console.log('hello');

const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.calculator__screen');
const subscreen = document.querySelector('.calculator__subscreen');
const MAX_SCREEN_LENGTH = 16;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        //получаем кнопку на которую нажали
        if (screen.textContent.length <= MAX_SCREEN_LENGTH) {
            if (button.getAttribute('value')) {
                screen.textContent += button.getAttribute('value');
                subscreen.textContent += button.getAttribute('value');
            }

            if (button.getAttribute('operator') === "."
                && !screen.textContent.includes('.')//проверка что точка только одна
                && screen.textContent.length !== 0) {//проверка что точка не первый символ
                screen.textContent += button.getAttribute('operator');
                subscreen.textContent += button.getAttribute('operator');
            }
        }
        if (button.getAttribute('operator') === "clear") {
            screen.textContent = '';
            subscreen.textContent = '';
        }
    });
});

//сделать ввод дробных чисел
//чтобы только одна точка
//точку нельзя ввести первой
//кнопка с