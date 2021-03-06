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
        const reverseSortedIngredients = [...this.ingredients].sort().reverse();
        //сортируем массив по алфавиту
        //делаем реверс сортированного массива
        //так как редьюс идет с конца
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
        this.gameOver = false;
    }

    play(word) {
        //сперва провряем состояние this.gameOver
        //если true то не можем играть
        if (this.gameOver) {
            return `Game Over`;
        }

        //проверяем одно ли слово в строке 
        //проверяем не пустая ли строка введена
        if (word.trim().split(' ').length > 1 || word.trim() === '') {
            return 'введите одно слово';
        };

        //проверяем совпадает ли последняя буква последнего слова с первой буквой нового слова
        //если нет то игра окончена
        if (this.words.join().slice(-1) !== word.trim().toUpperCase()[0] &&
            this.words.length !== 0) {
            // this.words = [];
            this.gameOver = true;
            return `Game Over - слово ${word} начинается не на ту букву `;
        }

        //проверяем не повторяется ли в существующих словах
        if (this.words.join().includes(word.trim().toUpperCase())) {
            // this.words = [];
            this.gameOver = true;
            return `Game Over - ${word.trim().toUpperCase()} уже имеется`;
        }

        // word.trim() --убираем пробелы в начале и конце слова
        //и переводим в верхний регистр добавленное слово
        return this.words = [...this.words, word.trim().toUpperCase()];
    }

    restart() {
        this.words = [];
        this.gameOver = false;
        return 'Game restarted';
    }
}

const game = new GameOfWords();


// console.log(game.play('  ball  '));
// console.log(game.play('lord'));
// console.log(game.play('dood  '));
// console.log(game.play(' dood'));
// console.log(game.words);

// console.log(game.play('  ball  '));
// console.log(game.play('lord'));
// console.log(game.play('dood  '));
// console.log(game.play('doctor'));
// console.log(game.play('kick'));

// console.log(game.restart());
// console.log(game.words);

console.log(game.play('apple apple'));
console.log(game.play('apple'));
console.log(game.play('ear'));
console.log(game.play('rhino'));
console.log(game.play('corn'));
console.log(game.play('corn'));
console.log(game.words);

console.log(game.restart());
console.log(game.words);

console.log(game.play('hostess'));
console.log(game.play('stash'));
console.log(game.play('hostess'));
console.log(game.play('apple'));


console.log('');
console.log('Task_03');


class Console {
    constructor() {
        this.consoleHistory = [];
    }

    myLog(value) {
        this.consoleHistory = [...this.consoleHistory, String(value)];
        return `\"${String(value)}\"`;
    }

    history(from, to) {
        const logHistory = this.consoleHistory.slice(from, to).reduce(function (result, curr) {
            return `${result}\n${curr}`
        });
        return `Console history:\n${logHistory}`;
    }

    clearHistory() {
        return `History is empty ${this.consoleHistory = []}`;
    }
}

const myConsole = new Console();

console.log(myConsole.myLog([1, 2, 3, 4]));
console.log(myConsole.myLog(1));
console.log(myConsole.myLog("dog"));
console.log(myConsole.myLog(true));
console.log(myConsole.myLog("dog"));
console.log(myConsole.consoleHistory);
console.log(myConsole.history(0, 3));
console.log(myConsole.history(2));
console.log(myConsole.consoleHistory);
console.log(myConsole.clearHistory());
console.log(myConsole.consoleHistory);

console.log(myConsole.myLog([1, 2, 3, 4]));
console.log(myConsole.myLog("ok : ", function () { return "hello world !" }));
console.log(myConsole.history());
console.log(myConsole.consoleHistory);
