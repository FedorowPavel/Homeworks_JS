
const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.calculator__screen');
const subscreen = document.querySelector('.calculator__subscreen');
const MAX_SCREEN_LENGTH = 16;
const CLEAR_VALUE = "c";
const DOT_OPERATOR = ".";

const EQUALS_OPERATOR = "=";
const PLUS_OPERATOR = "+";
const MINUS_OPERATOR = "-";
const DIVIDE_OPERATOR = "/";
const MULTIPLY_OPERATOR = "*";

const OPERATORS = [PLUS_OPERATOR, MINUS_OPERATOR, DIVIDE_OPERATOR, MULTIPLY_OPERATOR];


function addTextToScreens(text) {
    screen.textContent += text;
    subscreen.textContent += text;
}
//переменная для хранения ранее введенных числе и результата вычисления
let left;
// переменная для хранения вводимого значения
let right;
//в ней будет храниться последний оператор
let lastOperator;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (screen.textContent.length > MAX_SCREEN_LENGTH) {
            return;
        }

        const buttonValue = button.getAttribute('value');

        //храним тут является последний символ оператором (true, false)
        const isLastOperator = OPERATORS.includes(subscreen.textContent.slice(-1));


        //если нажали кнопку со значением
        //то есть не кнопку оператор
        if (buttonValue) {
            //блок для очистки если нажали С
            if (buttonValue === CLEAR_VALUE) {
                screen.textContent = '';
                subscreen.textContent = '';

                //перезаписываем лев и прав части как пустые
                //так же с последним оператором
                left = undefined;
                right = undefined;
                lastOperator = undefined;
                return;
            }

            //если нажали равно
            if (lastOperator === EQUALS_OPERATOR) {
                //в основной экран записываем значение кнопки
                screen.textContent = buttonValue;
                //в суб экран дописываем введенное значение
                subscreen.textContent += buttonValue;
                //обнуляем последний оператор
                lastOperator = undefined;
                return;
            }

            //если слева не пусто и есть последний оператор
            if (left !== undefined &&
                isLastOperator) {
                screen.textContent = buttonValue;
                subscreen.textContent += buttonValue;
                return;
            }

            addTextToScreens(buttonValue)
        }

        const buttonOperator = button.getAttribute('operator');

        //если нажали кнопку с оператором (+ - * /)
        if (buttonOperator) {
            //если точка
            if (buttonOperator === DOT_OPERATOR) {
                //и если главный экран не содержит точку
                //и точка не первый символ
                if (
                    !screen.textContent.includes(DOT_OPERATOR)
                    && screen.textContent.length !== 0
                ) {
                    addTextToScreens(buttonOperator);
                }
                return;
            }

            //проверяем есть ли точка в конце субскрина 
            //перед вводом оператора
            if (subscreen.textContent.slice(-1) === ".") {
                // перезаписываем текст контент
                //удаляя последнюю точку
                subscreen.textContent = subscreen.textContent.slice(0, subscreen.textContent.length - 1)
            }

            //проверка не введен ли последний символ оператор
            //в этом случае ничего не делаем (return)
            if (isLastOperator) {
                return;
            }

            //предотвращаем ввод оператора первым
            //и сразу после нажатия равно
            //когда слева есть значение
            if (isLastOperator ||
                subscreen.textContent.length === 0 ||
                (left === undefined && buttonOperator === EQUALS_OPERATOR)
            ) {
                return;
            }


            //если слева не пусто
            if (left !== undefined) {
                //приводим правую часть к числовому значению
                right = +screen.textContent;

                //в зависимости от того какой оператор ввели
                //совершаем действия
                switch (lastOperator) {
                    case PLUS_OPERATOR:
                        screen.textContent = left + right;
                        break;
                    case MINUS_OPERATOR:
                        screen.textContent = ((left * 1000) - (right * 1000)) / 1000;
                        break;
                    case DIVIDE_OPERATOR:
                        screen.textContent = (left / right).toFixed(14);
                        break;
                    case MULTIPLY_OPERATOR:
                        screen.textContent = left * right;
                        break;
                    default:
                        return;
                }

                //если ввели равно
                if (buttonOperator === EQUALS_OPERATOR) {
                    //очищаем суб скрин
                    subscreen.textContent = "";
                    //обнуляем левую и правую части
                    left = undefined;
                    right = undefined;
                    lastOperator = buttonOperator;
                    return;

                }
            }
            //записали левую часть в историю
            //в виде числа
            left = +screen.textContent;
            //присваиваем последнему опертору введеный оператор
            lastOperator = buttonOperator;

            subscreen.textContent += buttonOperator;
        }
    });
});


//дописать все операторы**

//исправить баг точки как последнего символа
///должна пропадать если мы вводим опертор

