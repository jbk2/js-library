export default class Book { 
  constructor(title, author, noOfPages, read = false) {
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.read = read;
  }

  set title(value) {
    if (value.length < 4 ) { throw new Error("Title must be > 4 chars") }
    this._title = value;
  }
  
  get title() {
    return this._title;
  }
  
  set author(value) {
    if (value.length < 2 ) { throw new Error("Author must be > 2 chars") }
    this._author = value;
  }
  
  get author() {
    return this._author;
  }
  
  set noOfPages(value) {
    if (value.length < 1 ) { throw new Error("No of Pages must be a positive integer") }
    this._noOfPages = value;
  }
  
  get noOfPages() {
    return this._noOfPages;
  }
  
  set read(value) {
    if (typeof value != 'boolean' ) { throw new Error("Must be true or false") }
    this._read = value;
  }

  get read() {
    return this._read;
  } 
}

// export default Book;