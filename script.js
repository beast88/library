let library = [];

//Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Instantiate the objects
const bookOne = new Book('Harry Potter', 'JK Rowling', 435, true);
const bookTwo = new Book('The Hobbit', 'JRR Tolkien', 376, false);

library.push(bookOne, bookTwo);

console.log(library);
console.log(library[1].author);

//Get DOM elements
const createButton = document.getElementById('create-button');
const container = document.getElementById('main-container');
const formModal = document.getElementById('form-modal');
const createForm = document.getElementById('create-form');
const submitButton = document.getElementById('submit-button');

//Open the form
createButton.addEventListener('click', e => {
    formModal.style.display = 'block';
})
