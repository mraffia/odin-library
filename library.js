let myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " page(s).";
    }
}

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead);
    myLibrary.push(newBook);
}

const books = document.querySelector('.books');
const bookForm = document.querySelector('#book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readStatus = document.querySelector('#status');
const addButton = document.querySelector('.button-con');

let bookFormData = new FormData(bookForm);

function createBookCard(bookObject) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const cardText = document.createElement('p');
    cardText.textContent = bookObject.info();

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-book');
    deleteButton.textContent = "Delete Book";

    const readButton = document.createElement('button');
    readButton.classList.add('read-book');

    if (bookObject.haveRead === 'read') {
        readButton.textContent = "Have Read";
    } else {
        readButton.textContent = "Not Yet Read";
    }

    bookCard.appendChild(cardText);
    bookCard.appendChild(deleteButton);
    bookCard.appendChild(readButton);
    books.appendChild(bookCard);
}

function displayBooks() {
    if (myLibrary.length > 0) {
        for(let i = 0; i < myLibrary.length; i++) {
            createBookCard(myLibrary[i]);
        }
    }
}

function addBooks(event) {
    event.preventDefault();

    addBookToLibrary(title.value, author.value, pages.value, readStatus.value);
    createBookCard(myLibrary[myLibrary.length - 1]);

    bookForm.reset();
}

addBookToLibrary("Some book", "Some Author", 42, "not-read");
displayBooks();

bookForm.addEventListener('submit', addBooks);