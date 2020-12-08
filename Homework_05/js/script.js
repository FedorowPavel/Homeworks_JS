
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
        //без этого не работала строчка 31
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
        } else {
            //сортируем массив по алфавиту
            const sortIngredients = this.ingredients.sort();
            //делаем реверс сортированного массива
            //так как редьюс идет с конца
            const reverseSortedIngredients = sortIngredients.reverse();

            const name = reverseSortedIngredients.reduce(function (result, curr) {
                const resultName = curr;
                return `${resultName} ${result}`;
            }, `Fusion`)
            return name;
        }
    }
}

const newSmothie = new Smoothie(['Raspberries', 'Strawberries', 'Blueberries']);

console.log(newSmothie.ingredients);
// console.log(newSmothie.ingredientsMap);
// console.log(newSmothie.ingredientMap['Strawberries']);
console.log(newSmothie.getCost());
console.log(newSmothie.getName());



console.log('');
console.log('Task_02');


class GameOfWords {

    constructor() {
        this.listOfWords = [];
    }

    play(word) {
        if (this.listOfWords.length === 0) {
            return [...this.listOfWords, word];
        } else {
            this.listOfWords = [...this.listOfWords, word];
            return this.listOfWords;
        }

    }


}

const game = new GameOfWords();

console.log(game);

console.log(game.play('ball'));
console.log(game);
console.log(game.play('long'));
// console.log(game);