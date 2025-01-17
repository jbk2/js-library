import Book from './book.js'

document.addEventListener('DOMContentLoaded', () => {
  const booksArray = [];
  const addBookForm = document.getElementById('add-book-form');
  

  let seedBook1 = new Book('To Kill a Mockingbird', 'Harper Lee', 300, false);
  let seedBook2 = new Book('Animal Farm', 'George Orwell', 290, true);
  booksArray.push(seedBook1, seedBook2);

  function createBook() {
    let [
      addBookTitle,
      addBookAuthor,
      addBookPages,
      addBookRead,
      errorMssg
    ] = document.querySelectorAll('#add-book-title, #add-book-author, #add-book-pages, #add-book-read, #error-mssg');
    
    try {
      let newBook = new Book(addBookTitle.value, addBookAuthor.value, parseInt(addBookPages.value), addBookRead.checked);
      [addBookTitle.value, addBookAuthor.value, addBookPages.value, addBookRead.checked, errorMssg.textContent] = ['', '', 200, false, ''];
      console.log(newBook);
      return newBook;
    } catch (error) {
      console.error(error);
      displayErrorMessage(error.message);
      return null;
    }
  }

  function displayErrorMessage(message) {
    let errorElement = document.getElementById('error-mssg');
    errorElement.textContent = message;
  }
  
  function saveBook(book) {
    booksArray.push(book);
    return booksArray.length - 1;
  };

  function getRandomHSLColors() {
    const hue = Math.floor(Math.random() * 360); // Random hue: 0-360
    const saturation = Math.floor(Math.random() * 31) + 70; // Saturation: 70-100% for vibrant colors
    const lightness = Math.floor(Math.random() * 86) + 25; // Lightness: 15-100%
    let colors = { main: `hsl(${hue}, ${saturation}%, ${lightness}%)`, dark: `hsl(${hue}, ${saturation}%, ${lightness - 15}%)`}
    return colors
  }

  function removeBook(index) {
    let deleteBtn = document.querySelector(`.book-delete-btn[data-book-index="${index}"`)
    deleteBtn.parentElement.remove();
  };

  function deleteBook(index) {
    console.log(booksArray);
    booksArray.splice(index, 1);
    console.log(booksArray);
  };

  function displayBook(book, index) {
    let colors = getRandomHSLColors();
    let backgroundImage = `linear-gradient(to right, ${colors.dark} 10px, ${colors.dark} 28px, transparent 29px)`;
    // let read = book.read === true ? 'on' : 'off';
    let bookElement = `
      <div class="book" style="background: ${colors.main}; background-image: ${backgroundImage}">
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <button class="book-delete-btn" data-book-index="${index}">x</button>
        <div id="checkbox">
          <label for="book-read">Read?</label>
          <input type="checkbox" data-book-index="${index}" ${book.read ? 'checked' : ''}>
        </div>
      </div>
    `;
    
    document.querySelector('body').insertAdjacentHTML('beforeend', bookElement);
    
    let deleteBtn = document.querySelector(`.book-delete-btn[data-book-index="${index}"`)
    let readCheckbox = document.querySelector(`input[type="checkbox"][data-book-index="${index}"]`)

    deleteBtn.addEventListener('click', (event) => {
      let clickedIndex = event.target.dataset.bookIndex;
      removeBook(clickedIndex);
      deleteBook(clickedIndex);
    });

    readCheckbox.addEventListener('change', (event) => {
      booksArray[event.target.dataset.bookIndex].read = event.target.checked;
    });
  };

  function displayBooks() {
    booksArray.forEach((book, index) => {
      displayBook(book, index);
    })
  };
  
  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newBook = createBook();
    if (newBook) {
      let newBookIndex = saveBook(newBook);
      displayBook(newBook, newBookIndex);
    }
  });
  
  displayBooks();

});
