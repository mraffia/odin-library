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