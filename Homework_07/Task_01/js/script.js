console.log('homework_07')

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

const firstDiv = document.getElementsByTagName('div')[0];
console.log(firstDiv);

const firstDiv2 = document.querySelector('div');
console.log(firstDiv2);

const idJumbotron = document.getElementById('jumbotron-text');
console.log(idJumbotron);

const allParagraphsInClass = document.querySelectorAll('.primary-content p');
console.log(allParagraphsInClass);



//task
const alertButton = document.getElementById('alertBtn');

alertButton.addEventListener('click', () => {
    alert('Thanks fot visiting Refugees!')
});

const changeColorButton = document.getElementById('bgrChangeBtn');

changeColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'gray';
});





//task
const buttons = document.getElementsByClassName('buttons')[0];
console.log(buttons);

const newParagraph = document.createElement('p');

const firstButton = document.querySelector('.buttons a:nth-child(1)');

newParagraph.textContent = "Read More Below";

const textButton = document.getElementById('addTextBtn');

textButton.addEventListener('click', () => {
    buttons.insertBefore(newParagraph, firstButton);
})


//HOMEWORK TASK

const largeTextButton = document.getElementById('largerLinksBtn');
const allButtons = document.querySelectorAll('a');

largeTextButton.addEventListener('click', () => {
    allButtons.forEach(item => item.style.fontSize = '1.5rem')
})












