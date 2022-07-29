document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

});

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(books => (renderBooks(books))
   
  
)}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    console.log(book)
    const h2 = document.createElement('h2');
    h2.textContent = book.name
    main.append(h2);
  });
}

