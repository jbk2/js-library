document.addEventListener('DOMContentLoaded', () => {

  let booksArray = [];
  const addBookBtn = document.getElementById('add-book-btn');
  const booksTable = document.getElementById('books');

  function Book(author, title) {
    this.author = author;
    this.title = title;
  }

  let seedBook1 = new Book('To Kill a Mockingbird', 'Harper Lee');
  let seedBook2 = new Book('Animal Farm', 'George Orwell');
  booksArray.push(seedBook1, seedBook2);

  function createBook() {
    let [addBookTitle, addBookAuthor] = document.querySelectorAll('#add-book-title, #add-book-author');
    let newBook = new Book(addBookTitle.value, addBookAuthor.value);
    [addBookTitle.value, addBookAuthor.value] = ['', ''];
    console.log(newBook);
    return newBook;
  }
  
  function addBookToArray(book) {
    booksArray.push(book);
  };

  function displayBook(book) {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`;
    booksTable.appendChild(row);
  };

  function displayBooks() {
    booksArray.forEach((book) => {
      let row = document.createElement('tr');
      row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`;
      booksTable.appendChild(row);
    })
  };
  
  displayBooks();

  addBookBtn.addEventListener('click', () => {
    let newBook = createBook();
    addBookToArray(newBook);
    displayBook(newBook);
  });
});
