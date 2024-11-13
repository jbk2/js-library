document.addEventListener('DOMContentLoaded', () => {

  let books = [];
  const addBookBtn = document.getElementById('add-book-btn');
  const booksTable = document.getElementById('books');

  function Book(author, title) {
    this.author = author;
    this.title = title;
  }

  let seedBook1 = new Book('To Kill a Mockingbird', 'Harper Lee');
  let seedBook2 = new Book('Animal Farm', 'George Orwell');

  books.push(seedBook1, seedBook2);

  function addBook() {
    let [addBookTitle, addBookAuthor] = document.querySelectorAll('#add-book-title, #add-book-author');

    let newBook = new Book(addBookTitle.value, addBookAuthor.value);
    books.push(newBook)

    let row = document.createElement('tr');
    row.innerHTML = `<td>${newBook.title}</td><td>${newBook.author}</td>`;
    booksTable.appendChild(row);
    
    [addBookTitle, addBookAuthor] = ['', ''];
     console.log(books);
  }

  function displayBooks() {
    // booksTable.innerHTML = "";
    books.forEach((book) => {
      let row = document.createElement('tr');
      row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`;
      booksTable.appendChild(row);
    })
  };
  
  displayBooks();
  addBookBtn.addEventListener('click', addBook);
});
