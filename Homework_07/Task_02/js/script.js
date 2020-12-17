console.log('homework_07_task_02')

//task 1
console.log('\ntask 2.1')

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
        const newH1 = document.createElement('H1');
        newH1.textContent = `Name - ${item.name}`;
        content.appendChild(newH1);

        const newH2 = document.createElement('H2');
        newH2.textContent = `Job - ${item.job}`;
        content.appendChild(newH2);
    })
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
        // console.log(newListItem);
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

        // создаем  span для название книги
        const titleSpan = document.createElement('span');
        bookInfo.appendChild(titleSpan);
        //добавляем в span текст названия книги
        titleSpan.textContent = item.title;

        //создаем span для автора книги
        const authorSpan = document.createElement('span');
        bookInfo.appendChild(authorSpan);
        //добавляем в span текст с автором
        authorSpan.textContent = ` - ${item.author}`;

        //добавляем картинку в соостветвии с названием
        const img = document.createElement('IMG');
        img.src = `../images/${item.title}.jpg`;
        singleBook.appendChild(img);

        if (item.alreadyRead) {
            singleBook.style.backgroundColor = 'green';
        } else {
            singleBook.style.backgroundColor = 'red';
        }
    })

}

exerciseThree(books);


