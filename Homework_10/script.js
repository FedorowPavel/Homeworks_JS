//1
// Написать функцию которая возвращает true, если в переданной строке есть хотя бы одна цифра.
console.log('task1')

function hasDigit(str) {
    const reg = /\d/;
    const result = reg.test(str);
    return result;
}

hasDigit('afasdasd');
hasDigit('1adf1');


// 2
console.log('task2')

function findTime(str) {
    const reg = /\d{2}:\d{2}/;
    const result = str.match(reg);
    return result[0]
}

findTime("Breakfast at 09:00 in the room 123:456")

// 3
console.log('task3')

array = ['Color', 'Caw', 'Town', 'Bycicle']

function filterArray(arr) {
    const reg = /^C/;
    return  arr.filter(word => !reg.test(word));
}

console.log(filterArray(array));


// 4
function hasAC(str) {
    const reg = /a.*c/;
    return reg.test(str);
}

console.log(hasAC('afdgdfhhfcdsfsdf'));
console.log(hasAC('afdgdfhhfdsfsdf'));