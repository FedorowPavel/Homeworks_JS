//задание 1
console.log('');
console.log('Task_1');

var stringOne = "Hello, world, Hello, world, Hello, world, Hello";
var stringTwo = "el";

function search(str1, str2) {
    var counter = 0;

    for (var i = 0; i < str1.length; i++) {
        var tempStr = str1.substr(i, str2.length);

        if (tempStr === str2) {
            counter++;
        }
    }

    return counter;
}

console.log(search(stringOne, stringTwo))








//задание 2
console.log('');
console.log('Task_2');

var stringForTrim = "       123456789   ";

console.log('Исходная строка -' + "'" + stringForTrim + "'")

function strip(str) {
    var result = str;

    //циклом убираем все пробелы в начале строки
    var i = 0;
    while (str[i] === " " && i < str.length) {
        result = str.substring(++i);
        i++;
    }

    //циклом убираем все пробелы в конце строки
    var j = result.length;
    while (result[j - 1] === " " && j >= 0) {
        result = result.substring(j - 1, 0);
        j--;
    }

    return result;
}

console.log('Итоговая строка -' + "'" + strip(stringForTrim) + "'")
console.log('Длина итоговой строки - ' + strip(stringForTrim).length)








//задание 3
console.log('');
console.log('Task_3');

var strOne = "Hello, world!";
var strTwo = "ld!";

function checkIfEnds(str1, str2) {
    return strOne.substring((strOne.length - strTwo.length), strOne.length) === strTwo;
}

console.log(checkIfEnds(strOne, strTwo));





//задание 4
console.log('');
console.log('Task_4');

var strToCompareOne = "Hello, world!";
var strToCompareTwo = "HELLO, WORLD!";

function compare(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

console.log(compare(strToCompareOne, strToCompareTwo));