let myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.haveRead;
    }
}

function addBookToLibrary(title, author, pages, haveRead) {
    let readStatus = '';
    if(haveRead) {
        readStatus = 'have read it';
    } else {
        readStatus = 'not yet';
    }

    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
}

let someBook = new Book('Beluga', 'Raffi', 325, 'have read it');
myLibrary.push(someBook);
myLibrary.push(someBook);
myLibrary.push(someBook);

const books = document.querySelector('.books');

function displayBooks() {
    for(let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.classList.add('book-card');

        div.textContent = myLibrary[i].info();
        books.appendChild(div);
    }
}

displayBooks();