document.addEventListener('DOMContentLoaded', () => {

  let booksArray = [];
  const addBookForm = document.getElementById('add-book-form');
  const booksTable = document.getElementById('books');

  function Book(title, author, noOfPages, read = false) {
    this.title = title;
    this.author = author;
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
    let read = addBookRead.value === 'on' ? true : false
    let newBook = new Book(addBookTitle.value, addBookAuthor.value, addBookPages.value, read);

 [addBookTitle.value, addBookAuthor.value, addBookPages.value, addBookRead.checked] = ['', '', '', false];   
    console.log(newBook);
    return newBook;
  }
  
  function saveBook(book) {
    booksArray.push(book);
  };

  function getRandomHSLColors() {
    const hue = Math.floor(Math.random() * 360); // Random hue: 0-360
    const saturation = Math.floor(Math.random() * 31) + 70; // Saturation: 70-100% for vibrant colors
    const lightness = Math.floor(Math.random() * 86) + 25; // Lightness: 15-100%
    let colors = { main: `hsl(${hue}, ${saturation}%, ${lightness}%)`, dark: `hsl(${hue}, ${saturation}%, ${lightness - 15}%)`}
    return colors
  }

  function displayBook(book) {
    let colors = getRandomHSLColors();
    let backgroundImage = `linear-gradient(to right, ${colors.dark} 10px, ${colors.dark} 28px, transparent 29px)`;
    let bookElement = `
      <div class="book" style="background: ${colors.main}; background-image: ${backgroundImage}">
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
      </div>
    `;
    document.querySelector('body').insertAdjacentHTML('beforeend', bookElement);
  };

  function displayBooks() {
    booksArray.forEach((book) => {
      displayBook(book);
    })
  };
  
  displayBooks();

  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newBook = createBook();
    saveBook(newBook);
    displayBook(newBook);
  });



});
