console.log('');
console.log('Task_01');


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
console.log('Task_02_sea_battle');

const scheme = ['A1', 'D1', 'E1', 'B3', 'E3', 'B4', 'D5'];

class Battleship {
    constructor(boardScheme) {
        //добавляем введенные координаты кораблей в наш объект
        this.boardScheme = boardScheme;
        //отрисовываем доску с расположением кораблей
        this.board = this.getBoard();
    }

    getBoard() {
        //создаем внешний массив из 5 элементов
        return Array(5).fill(0).map((_, i) => {
            //каждый из внутернних элементов заполняем массивом из 5 элементов
            return Array(5).fill(0).map((_, j) => {
                //присваиваем буквенную часть координаты элемента
                //получаем из позиции циферной позицию буквенную
                const letter = String.fromCharCode(j + 65);
                //записываем итоговые координаты (буква, число)
                const coordinate = `${letter}${i + 1}`;

                //если в схеме расположени кораблей есть такая координата
                //то ставим на это место корабль (ставим 1)
                if (scheme.includes(coordinate)) {
                    return 1;
                }
                //иначе ставим 0
                return 0;
            });
        })
    }

    getNeighbourShip(letter, index) {

    }

    turn(coordinate) {
        //проверяем условие, есть ли введенная коордната 
        //в списке координат кораблей
        if (this.boardScheme.includes(coordinate)) {
            //если есть то
            //отфильтруем массив координат кораблей
            //по значению введенному в координаты
            //то есть оставим только это значение
            this.boardScheme = this.boardScheme.filter((item) => item !== coordinate);

            //переведем координаты в численные значения
            const letter = coordinate[0].charCodeAt(0) - 65;
            const index = parseInt(coordinate[1], 10) - 1;

            //заменяем значение в данной ячейке на -1 (было 1)
            this.board[index][letter] = -1;

            //проводим проверки одиночный или двойной корабль

            //если знчение справа истинно (не равно 0) то
            if (this.board[index][letter + 1]) {
                //и если это значине равно -1 (раненый корабль)
                if (this.board[index][letter + 1] === -1) {
                    //то убили
                    return 'killed';
                }
                //если не равно -1 то ранили (значит значение 1)
                return 'unjured';
            }

            //если знчение слева истинно (не равно 0) то
            if (this.board[index][letter - 1]) {
                //и если это значине равно -1 (раненый корабль)
                if (this.board[index][letter - 1] === -1) {
                    //то убили
                    return 'killed';
                }
                //если не равно -1 то ранили (значит значение 1)
                return 'unjured';
            }

            //если знчение снизу истинно (не равно 0) то
            //<4 отсекает для проверки последнюю строку
            if (index < 4 && this.board[index + 1][letter]) {
                //и если это значине равно -1 (раненый корабль)
                if (this.board[index + 1][letter] === -1) {
                    //то убили
                    return 'killed';
                }
                //если не равно -1 то ранили (значит значение 1)
                return 'unjured';
            }

            //если знчение сверху истинно (не равно 0) то
            if (index && this.board[index - 1][letter]) {
                //и если это значине равно -1 (раненый корабль)
                if (this.board[index - 1][letter] === -1) {
                    //то убили
                    return 'killed';
                }
                //если не равно -1 то ранили (значит значение 1)
                return 'unjured';
            }
            //если проверки не прошли значит корабль одиночный и убили
            return 'killed!';
        };
        //ввели координату где нет корабля
        return 'miss!';
    }


}

const battleship = new Battleship(scheme);
console.log(battleship.getBoard());
console.log(battleship.turn('A1'));
console.log(battleship.turn('A2'));
console.log(battleship.turn('A3'));
console.log(battleship.turn('A4'));
console.log(battleship.turn('A5'));
console.log(battleship.turn('B1'));
console.log(battleship.turn('B2'));
console.log(battleship.turn('B3'));
console.log(battleship.turn('B4'));
console.log(battleship.turn('B5'));
console.log(battleship.turn('C1'));
console.log(battleship.turn('C2'));
console.log(battleship.turn('C3'));
console.log(battleship.turn('C4'));
console.log(battleship.turn('C5'));
console.log(battleship.turn('D1'));
console.log(battleship.turn('D2'));
console.log(battleship.turn('D3'));
console.log(battleship.turn('D4'));
console.log(battleship.turn('D5'));
console.log(battleship.turn('E1'));
console.log(battleship.turn('E2'));
console.log(battleship.turn('E3'));
console.log(battleship.turn('E4'));
console.log(battleship.turn('E5'));

