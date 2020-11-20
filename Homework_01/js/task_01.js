// Исправьте синтаксические ошибки

console.log("------Task_01------")

function addNumbers(a, b, c) {
    return a + b + c;
}

function introduceMe(name, age) {
    return "Привет, меня зовут " + name + " и мне " + age + " лет";
}


function getTotal(a, b) {
    total = a + b;

    return "The total is " + total;
}

// проверка работоспоспобнсоти функций
var result = addNumbers(1, 2, 3);
console.log(result);

var result = introduceMe("Pavel", 27);
console.log(result);

var result = getTotal(100, 99);
console.log(result);
