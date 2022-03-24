let myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

Book.prototype.idCounter = 0;
Book.prototype.idSet = function() {
    this.id = this.idCounter;
}
Book.prototype.info = function() {
    return this.title + " by " + this.author + ", " + this.pages + " page(s).";
}

function addBookToLibrary(title, author, pages, haveRead) {
    const newBook = new Book(title, author, pages, haveRead);
    newBook.idSet();
    Book.prototype.idCounter++;
    myLibrary.push(newBook);
}

const books = document.querySelector('.books');
const bookForm = document.querySelector('#book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readStatus = document.querySelector('#status');

const deleteBooks = document.getElementsByClassName('delete-book');
const readBooks = document.getElementsByClassName('read-book');

function createBookCard(bookObject) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const cardText = document.createElement('p');
    cardText.textContent = bookObject.info();

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-book');
    deleteButton.setAttribute('id', bookObject.id + '');
    deleteButton.textContent = "Delete Book";

    const readButton = document.createElement('button');
    readButton.classList.add('read-book');
    readButton.setAttribute('id', bookObject.id + '');

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

        for (let i = 0; i < deleteBooks.length; i++) {
            deleteBooks[i].addEventListener('click', deleteBookCard);
        }
    } else {
        const emptyText = document.createElement('p');
        emptyText.textContent = "Yo, the library is empty. Add some books wil ya?";

        books.appendChild(emptyText);
    }
}

function addBooks(event) {
    event.preventDefault();

    addBookToLibrary(title.value, author.value, pages.value, readStatus.value);
    
    books.textContent = '';
    displayBooks();

    bookForm.reset();
}

function deleteBookCard(e) {
    let selectedBook;

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].id === parseInt(e.target.id)) {
            selectedBook = myLibrary[i];
        }
    }

    const confirmDelete = confirm("Are you sure you want to delete the book \"" + selectedBook.title + "\"?");
    if (confirmDelete) {
        const bookIndex = myLibrary.indexOf(selectedBook);
        if (bookIndex > -1) {
            myLibrary.splice(bookIndex, 1);
        }
        books.textContent = '';
        displayBooks();
    }

}

addBookToLibrary("Some Book", "Some Author", 42, "not-read");
displayBooks();

bookForm.addEventListener('submit', addBooks);
