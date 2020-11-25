console.log("Homework_02")

function countDistance(pointOne, pointTwo) {
    var distance = ((pointTwo[0] - pointOne[0]) ** 2 + (pointTwo[1] - pointOne[1]) ** 2) ** (1 / 2);
    return distance;
}

var A = [1, 2];
var B = [4, 9];

var result = countDistance(A, B);
console.log(result);



//практическое из лекции
console.log(' ')
console.log('---практическое из лекции (слайд 129)---')

var arr = [1, 4, 3, 5, 6, 9, 7];
console.log('Старый массив - ' + arr);

function filterArray(array, item) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
    return array;
}

console.log('Новый  массив - ' + filterArray(arr, 6));




//практическое из лекции (сортивровка массива)
console.log(' ')
console.log('---практическое из лекции (слайд 130)---')

var arrayForSort = [1, 14, 93, 25, 16, 9, 7];
console.log('Неотсортированный массив - ' + arrayForSort);

function sort(array) {
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    array.sort(compareNumeric);
    return array;
}
console.log('Отсортированный массив - ' + sort(arrayForSort));




//практическое из лекции (подсчет стоимости товаров)
console.log(' ')
console.log('---практическое из лекции (слайд 131)---')

const products = {
    apple: 91,
    banana: 22,
    melon: 55,
};

function calculateSum(obj) {
    var sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log('Стоимость товаров составит - ' + calculateSum(products));




//практическое из лекции (найти самый дорогой товар)
console.log('')
console.log('---практическое из лекции (слайд 132)---')

const products1 = {
    apple: 91,
    banana: 220,
    melon: 5,
};

function findMax(obj) {
    var max = 0;
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
        }
    }
    return max;
}

console.log('Стоимость самого дорогого товара - ' + findMax(products1));