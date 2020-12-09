console.log('');
console.log('Task_01');

class Smoothie {
    //конструктор принимает в себя список ингридиентов
    constructor(ingredients) {
        //создаем состояние класса
        //присваиваем список ингридиентов в объект, который создастся из класса smothi
        this.ingredients = ingredients;
        //мап ингридиентов, откуда возьмется цена соответсвтующего ингридиента
        this.ingredientsMap = {
            'Strawberries': 1.5,
            'Banana': 0.5,
            'Mango': 2.5,
            'Blueberries': 1,
            'Raspberries': 1,
            'Apple': 1.75,
            'Pineapple': 3.5,
        }
    }

    //метод подсчета стоимости смуззи
    getCost() {
        //без этого не работала строчка 27
        const ingMap = this.ingredientsMap
        const cost = this.ingredients.reduce(function (result, curr) {
            const ingredientCost = ingMap[curr];
            return result + ingredientCost;
        }, 0)
        return `$${cost.toFixed(2)}`;
    }

    getName() {
        if (this.ingredients.length === 1) {
            return `${this.ingredients[0]} Smoothie`
        }
        //копируем во временный массив весь исходный массив
        //чтобы избежать мутирования начального массива
        const tempIngredients = [...this.ingredients];
        //сортируем массив по алфавиту
        const sortIngredients = tempIngredients.sort();
        //делаем реверс сортированного массива
        //так как редьюс идет с конца
        const reverseSortedIngredients = sortIngredients.reverse();
        const name = reverseSortedIngredients.reduce(function (result, curr) {
            return `${curr} ${result}`;
        }, `Fusion`)
        return name;
    }
}

const newSmothie = new Smoothie(['Raspberries', 'Strawberries', 'Blueberries']);

console.log(newSmothie.ingredients);
console.log(newSmothie.getCost());
console.log(newSmothie.getName());
console.log(newSmothie.ingredients);



console.log('');
console.log('Task_02');


class GameOfWords {

    constructor() {
        this.words = [];
        this.gameOver;
    }

    play(word) {
        //случай для первого вызова метода play
        //просто копирем первое слово в список слов

        if (this.words.length === 0) {
            return [...this.words, word];
        }

    }

    restart() {

    }
}

const game = new GameOfWords();

console.log(game);

console.log(game.play('ball'));
// console.log(game);
console.log(game.play('wall'));
// console.log(game);
