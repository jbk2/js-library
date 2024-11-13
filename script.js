document.addEventListener('DOMContentLoaded', () => {

  let booksArray = [];
  const addBookForm = document.getElementById('add-book-form');
  const booksTable = document.getElementById('books');

  function Book(author, title, noOfPages, read = false) {
    this.author = author;
    this.title = title;
    this.noOfPages = noOfPages;
    this.read = read;
  }

  let seedBook1 = new Book('To Kill a Mockingbird', 'Harper Lee', 300, false);
  let seedBook2 = new Book('Animal Farm', 'George Orwell', 290, true);
  booksArray.push(seedBook1, seedBook2);

  function createBook() {
    let [
      addBookTitle,
      addBookAuthor,
      addBookPages,
      addBookRead
    ] = document.querySelectorAll('#add-book-title, #add-book-author, #add-book-pages, #add-book-read');
    let newBook = new Book(addBookTitle.value, addBookAuthor.value, addBookPages.value, addBookRead.value);
    
    [addBookTitle.value, addBookAuthor.value, addBookPages.value, addBookRead.value] = ['', '', '', ''];
    console.log(newBook);
    return newBook;
  }
  
  function addBookToArray(book) {
    booksArray.push(book);
  };

  function displayBook(book) {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.noOfPages}</td><td>${book.read}</td>`;
    booksTable.appendChild(row);
    console.log(booksArray);
  };

  function displayBooks() {
    booksArray.forEach((book) => {
      let row = document.createElement('tr');
      row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.noOfPages}</td><td>${book.read}</td>`;
      booksTable.appendChild(row);
    })
    console.log(booksArray);
  };
  
  displayBooks();

  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newBook = createBook();
    addBookToArray(newBook);
    displayBook(newBook);
  });
});
