let library = [];

//Object constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

//Prototypes to handle changing the read status of the book
Book.prototype.isRead = function() {
	this.read = true;
}

Book.prototype.isUnread = function() {
	this.read = false;
}

//Instantiate the objects
const bookOne = new Book('Carrie', 'Stephen King', 435, true);
const bookTwo = new Book('The Hobbit', 'JRR Tolkien', 376, false);

library.push(bookOne, bookTwo);

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
	library.forEach((book, index) => {
		const bookCard = document.createElement('div');
		bookCard.classList.add('card');

		bookCard.innerHTML = `<h3>${book.title}</h3>
			<p>By ${book.author}</p>
			<p>${book.pages} pages</p>

			<div class="book-buttons-controller">
				<button class="book-buttons ${book.read ? 'active' : ''}" id="${index} read-button">Read</button>
				<button class="book-buttons ${book.read ? '' : 'active'}" id="${index} unread-button">Unread</button>
			</div>
		`
		container.append(bookCard);
		handleBookButtons(index, book);
	})
}

const handleBookButtons = (index, book) => {
	//Add Event listeners to the buttons -- outsource to its own function
	const readBtn = document.getElementById(`${index} read-button`);
	const unreadBtn = document.getElementById(`${index} unread-button`);

	readBtn.addEventListener('click', () => {
		if(book.read === false) {
			//Function to change the value of read
			book.isRead();
			readBtn.classList.toggle('active');
			unreadBtn.classList.toggle('active');
		}
	})

	unreadBtn.addEventListener('click', () => {
		if(book.read === true) {
			//Function to change the value of read
			book.isUnread();
			readBtn.classList.toggle('active');
			unreadBtn.classList.toggle('active');
		}
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

//Create library from the pre-populated library
createLibrary();
