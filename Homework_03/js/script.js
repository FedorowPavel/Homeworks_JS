console.log('');
console.log('Task_1');

//пузырьковая сортирова 
//Заключается в поочередном сравнении двух соседних элементов
//и перестановкой их местами, если следующий больше текущего
//Выполняется до тех пор, пока в последней итерации, при сравнении
//соседних элементов условие всегда будет ложным.

var array = [6, 2, 3, 7, 5, 4, 1]; //создаем массив для сортировки


function bubbleSort(arr) {//создаем функцию которая будет сортировать массив

    //внешний цикл, который отвечает за количество итераций, то есть сколько раз
    //наш внунтренний цикл выполнится для всего массива
    //равен количеству элементов в исходном массиве
    for (let j = 0; j < arr.length; j++) {

        //внутренний цикл, который проходится по всему массиву 
        //и сравнивает текущий элемент со следующим
        //этот цикл выполнится j раз (j количество элементов в массиве)
        for (let i = 0; i < arr.length; i++) {

            //условие сравнения текущего элемента массива со следующим
            if (arr[i] > arr[i + 1]) {//тело цикла которое выполнятеся при условии, что в скобках true
                //временная переменная для хранения текущего элемента
                var temp = arr[i];
                //заменяем текущий элемент на следующий (при условии, что следующий больше )
                arr[i] = arr[i + 1];
                //перезаписываем временную переменную
                arr[i + 1] = temp;
            }//после выполнения первой итерации выполнится следующая
            //до тех пор пока условие arr[i] > arr[i + 1] не будет ложным всегда
        }
    }
    return arr;//возвращаем отсортированный массив
}
console.log(bubbleSort(array));


//next task
console.log('');
console.log('Task_2a');

var newArr = [];

function fill(arrayLength, arrayItem) {

    for (var i = 0; i < arrayLength; i++) {
        newArr.push(arrayItem);
    }

    return newArr;
}

fill(7, 3);
console.log(newArr);


//next task
console.log('');
console.log('Task_2b');

var arrayForReverse = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('Исходный массив - ' + arrayForReverse)

//Task_2b первый вариант решения
console.log('')
console.log('первый вариант решения')
function reverse(array) {
    newArray = array.reverse();
    return newArray;
}
console.log("Обратный массив - " + reverse(arrayForReverse));

//Task_2b второй вариант решения
console.log('')
console.log('второй вариант решения')

var arrayForReverse2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function reverse2(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

console.log("Обратный массив - " + reverse2(arrayForReverse2));

//Task_2b третий вариант решения
console.log('')
console.log('третий вариант решения')

var arrayForReverse3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function reverse3(array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log("Обратный массив - " + reverse3(arrayForReverse3));


//next task
console.log('');
console.log('Task_2c');

var arrayForCompact = [1, 2, 3, false, undefined, "", 0, null, 4, 5, null, undefined, 7];
console.log('Исходный массив - ' + arrayForCompact);

function compact(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log("Отредактированный массив - " + compact(arrayForCompact));



//next task
console.log('');
console.log('Task_2d');

var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = [1, 2, 3, 5, 7];

function isEqual(array1, array2) {
    if (array1.length !== array2.length) {
        console.log("Массивы не идентичны, так как у них разная длинна");
        return;
    };

    var arraysLength = array1.length;

    for (var i = 0; i < arraysLength; i++) {
        if (array1[i] !== array2[i]) {
            console.log(`Массивы не идентичны, так как разнятся как минимум значения под индексом ${i}`);
            return
        }
    }
    console.log('Массивы идентичны');
}

isEqual(arrayOne, arrayTwo);



//next task
console.log('');
console.log('Task_2e');

console.log('Исходные массивы')
var arrayOne = [1, 2, 3, 8, 'd', 3, 'a', 4, 'c', 5, 9];
console.log(arrayOne);
var arrayTwo = ['a', 2, 'b', 'c', 'd', 3, 'd'];
console.log(arrayTwo);

function intersection(array1, array2) {
    var newArray = [];

    for (var i = 0; i < array1.length; i++) {
        var currentItem = array1[i];

        for (var j = 0; j < array2.length; j++) {
            if (currentItem === array2[j]) {
                newArray.push(currentItem);
            }
        }
    }

    newArray = new Set(newArray);
    newArray = Array.from(newArray);

    return newArray;
}

console.log('Итоговый массив - ' + intersection(arrayOne, arrayTwo));

// //next task
// console.log('');
// console.log('Task_2e');

// console.log('Исходные массивы')
// var arrayOne = [1, 2, 3, 8, 'd', 3, 'a', 4, 'c', 5, 9];
// console.log(arrayOne);
// var arrayTwo = ['a', 2, 'b', 'c', 'd', 3, 'd'];
// console.log(arrayTwo);

// function intersection(array1, array2) {
//     var bigArray;
//     var smallArray;

//     if (array1.length >= array2.length) {
//         var outerLength = array1.length;
//         var innerLength = array2.length;
//         bigArray = array1;
//         smallArray = array2;
//     } else {
//         var outerLength = array2.length;
//         var innerLength = array1.length;
//         bigArray = array2;
//         smallArray = array1;
//     }

//     console.log(outerLength, innerLength, smallArray)

//     var newArray = [];

//     for (var i = 0; i < outerLength; i++) {
//         var currentItem = bigArray[i];

//         for (var j = 0; j < innerLength; j++) {
//             if (currentItem === smallArray[j]) {
//                 newArray.push(currentItem);
//             }
//         }
//     }

//     newArray = new Set(newArray);
//     newArray = Array.from(newArray);

//     return newArray;
// }

// console.log('Итоговый массив - ' + intersection(arrayOne, arrayTwo));



// //next task
// console.log('');
// console.log('Task_2e_второй вариант');

// console.log('Исходные массивы')
// var arrayOne = [1, 2, 3, 8, 'd', 3, 'a', 4, 'c', 5, 9];
// console.log(arrayOne);
// var arrayTwo = ['a', 2, 'b', 'c', 'd', 3, 'd'];
// console.log(arrayTwo);

// function intersection(array1, array2) {

//     var newArray = array1.concat(array2);

//     newArray = new Set(newArray);
//     newArray = Array.from(newArray);

//     return newArray;
// }


// console.log('Итоговый массив - ' + intersection(arrayOne, arrayTwo));




