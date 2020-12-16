console.log('homework_07_task_02')

//task 1
console.log('\ntask 2.1')

//изначально не правильно сделал задание создал массив в виде 
// [
//     { Chris: 'teacher' },
//     { Joanna: 'Student' },
//     { Boris: 'Prime Minister' },
// ]

// function exerciseOne(arrayOfPeople) {
//     const content = document.querySelector("#content");

//     arrayOfPeople.forEach((item) => {
//         for (let key in item) {

//             let newH1 = document.createElement('H1');
//             newH1.textContent = `Name - ${key}`;
//             content.appendChild(newH1);

//             let newH2 = document.createElement('H2');
//             newH2.textContent = `Job - ${item[key]}`;
//             content.appendChild(newH2);
//         }
//         console.log(item);
//     })
//     console.log(content);
// }

const people = [
    { name: "Chris", job: "Teacher" },
    { name: "Joanna", job: "Student" },
    { name: "Boris", job: "Prime Minister" },
    { name: "Jesus", job: "God" },
];


//для правильного массива
function exerciseOne(arrayOfPeople) {
    const content = document.querySelector("#content__task1");

    arrayOfPeople.forEach((item) => {
        for (let key in item) {
            if (key === 'name') {
                const newH1 = document.createElement('H1');
                newH1.textContent = `Name - ${item[key]}`;
                content.appendChild(newH1);
            }
            if (key === 'job') {
                const newH2 = document.createElement('H2');
                newH2.textContent = `Job - ${item[key]}`;
                content.appendChild(newH2);
            }
        }
    })
    console.log(content);
}

exerciseOne(people);


//task 2
console.log('\ntask 2.2')

const shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

function exerciseTwo(shoppingList) {
    const newList = document.createElement('ul');

    const content = document.querySelector("#content__task2");
    content.appendChild(newList);

    shoppingList.forEach((item) => {
        const newListItem = document.createElement('li');
        newListItem.textContent = item;
        newList.appendChild(newListItem);
        console.log(newListItem);
    })
}

exerciseTwo(shopping);

//task 3
console.log('\ntask 2.3')


const books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        alreadyRead: true
    }
];



function exerciseThree(listOfBooks) {
    //создаем список для книг
    const booksList = document.createElement('ul');

    //выбираем блок куда добавим список книг
    const booksBlock = document.getElementById('content__task3');

    //добавляем список в блок для книг
    booksBlock.appendChild(booksList);

    listOfBooks.forEach((item) => {
        //создаем ячейку для каждой книги
        const singleBook = document.createElement('li');
        booksList.appendChild(singleBook);
        //создаем параграф для записи названия и автора
        const bookInfo = document.createElement('p');
        singleBook.appendChild(bookInfo);

        for (let key in item) {

            if (key === 'title') {
                //получаем название книги
                const bookTittle = item[key];
                //создаем для него span
                const titleSpan = document.createElement('span');
                bookInfo.appendChild(titleSpan);
                //добавляем в span текст названия книги
                titleSpan.textContent = bookTittle;
                console.log(bookTittle);

                //добавляем картинку в соостветвии с названием
                const img = document.createElement('IMG');
                img.src = `../images/${item[key]}.jpg`;
                singleBook.appendChild(img);

            }
            if (key === 'author') {
                //получаем название книги
                const bookAuthor = item[key];
                //создаем для него span
                const titleSpan = document.createElement('span');
                bookInfo.appendChild(titleSpan);
                //добавляем в span текст названия книги
                titleSpan.textContent = ` - ${bookAuthor}`;
                console.log(bookAuthor);
            }
            if (item[key] === true) {
                singleBook.style.backgroundColor = 'green';
            }
            if (item[key] === false) {
                singleBook.style.backgroundColor = 'red';
            }
        }
    })

}

exerciseThree(books);


