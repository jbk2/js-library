document.addEventListener('DOMContentLoaded', () => {

  let books = [{title: 'To Kill a Mockingbird', author: 'Harper Lee'}, {title: 'Animal Farm', author: 'George Orwell'}];
  const addBookBtn = document.getElementById('add-book-btn');
  const booksTable = document.getElementById('books');




  function addBook() {
    let addBookTitle = document.getElementById('add-book-title');
    let addBookAuthor = document.getElementById('add-book-author');
    console.log(addBookAuthor.value);

    let newBook = {title: addBookTitle.value , author: addBookAuthor.value}
    books.push(newBook)
  }

  addBookBtn.addEventListener('click', addBook);


  function displayBooks() {
    books.forEach((book) => {
      let row = document.createElement('tr');
      row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`;
      booksTable.appendChild(row);
    })
  };

  displayBooks();
});
