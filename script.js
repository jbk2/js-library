document.addEventListener('DOMContentLoaded', () => {

  let books = [{title: 'To Kill a Mockingbird', author: 'Harper Lee'}, {title: 'Animal Farm', author: 'George Orwell'}];
  const addBookBtn = document.getElementById('add-book-btn');
  const booksTable = document.getElementById('books');

  function addBook() {
    const [addBookTitle, addBookAuthor] = document.querySelectorAll('#add-book-title, #add-book-author');

    let row = document.createElement('tr');
    row.innerHTML = `<td>${addBookTitle.value}</td><td>${addBookAuthor.value}</td>`;
    booksTable.appendChild(row);
    
    let newBook = {title: addBookTitle.value , author: addBookAuthor.value}
    books.push(newBook)
    [addBookTitle, addBookAuthor] = ['', ''];
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
