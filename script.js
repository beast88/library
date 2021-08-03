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

//Function to populate the library UI
const createLibrary = () => {
	//Iterate through the library array
	library.forEach(book => {
		const bookCard = document.createElement('div');
		bookCard.classList.add('card');

		bookCard.innerHTML = `<h3>${book.title}</h3>
			<p>By ${book.author}</p>
			<p>${book.pages} pages</p>

			<div class="book-buttons-controller">
				<button class="book-buttons ${book.read ? 'active' : ''}" id="read-button">Read</button>
				<button class="book-buttons ${book.read ? '' : 'active'}" id="unread-button">Unread</button>
			</div>
		`
		container.append(bookCard);
	})
}

const createBook = (e) => {
	e.preventDefault();
	//Get DOM Values
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	let read;

	if(document.getElementById('read').checked === true) {
			read = true
	} else {
			read = false
	}

	//Instantiate a new book and push it to the library
	const newBook = new Book(title, author, pages, read);
	library.push(newBook);

	//Reset and close form & populate library
	createForm.reset()
	formModal.style.display = 'none';
	container.innerHTML = '';
	createLibrary();
}

//Handle submitting the form
submitButton.addEventListener('click', createBook);

//Testing create library
createLibrary();
