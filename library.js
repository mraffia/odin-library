let myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        let readStatus = '';
        if (haveRead === "read") {
            readStatus = 'have read it';
        } else {
            readStatus = 'not yet read';
        }

        return this.title + " by " + this.author + ", " + this.pages + " page(s), " + readStatus + ".";
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

function displayBooks() {
    if (myLibrary.length > 0) {
        for(let i = 0; i < myLibrary.length; i++) {
            const div = document.createElement('div');
            div.classList.add('book-card');

            div.textContent = myLibrary[i].info();
            books.appendChild(div);
        }
    }
}

function addBooks(event) {
    event.preventDefault();

    addBookToLibrary(title.value, author.value, pages.value, readStatus.value);
    const div = document.createElement('div');
    div.classList.add('book-card');

    div.textContent = myLibrary[myLibrary.length - 1].info();
    books.appendChild(div);

    bookForm.reset();
}

addBookToLibrary("Some book", "Some Author", 42, "not-read");
displayBooks();

bookForm.addEventListener('submit', addBooks);