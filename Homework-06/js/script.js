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
        this.boardScheme = boardScheme;
        this.board = this.getBoard();
    }

    getBoard() {
        return Array(5).fill(0).map((_, i) => {
            return Array(5).fill(0).map((_, j) => {
                const letter = String.fromCharCode(j + 65);
                const coordinate = `${letter}${i + 1}`;

                if (scheme.includes(coordinate)) {
                    return 1;
                }

                return 0;
            });
        })
    }

    getNeighbourShip(letter, index) {

    }

    turn(coordinate) {
        if (this.boardScheme.includes(coordinate)) {
            this.boardScheme = this.boardScheme.filter((item) => item !== coordinate);

            const letter = coordinate[0].charCodeAt(0) - 65;
            const index = parseInt(coordinate[1], 10) - 1;

            this.board[index][letter] = -1;

            if (this.board[index][letter + 1]) {
                if (this.board[index][letter + 1] === -1) {
                    return 'killed';
                }
                return 'unjured';
            }

            if (this.board[index][letter - 1]) {
                if (this.board[index][letter - 1] === -1) {
                    return 'killed';
                }
                return 'unjured';
            }
            if (this.board[index + 1][letter]) {
                if (this.board[index + 1][letter] === -1) {
                    return 'killed';
                }
                return 'unjured';
            }
            if (index && this.board[index - 1][letter]) {
                if (this.board[index - 1][letter] === -1) {
                    return 'killed';
                }
                return 'unjured';
            }

            return 'killed!';
        };
        return 'miss!';
    }


}

const battleship = new Battleship(scheme);
console.log(battleship.getBoard());
console.log(battleship.turn('A1'));
console.log(battleship.turn('D1'));
console.log(battleship.turn('A2'));

