let myLibrary = [
  {
    author: "JK Rowling",
    title: "Harry Potter and the Philosopher's Stone",
    pages: 223,
    read: true,
  },
  {
    author: "Suzanne Collins",
    title: "The Hunger Games",
    pages: 374,
    read: true,
  },
  {
    author: " J. R. R. Tolkien",
    title: "The Hobbit",
    pages: 304,
    read: false,
  },
];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const onLoad = () => {
  books();
  showForm();
};

function addBookToLibrary() {
  var author = document.getElementById("author").value;
  var title = document.getElementById("title").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("read").checked;

  if (author === "" || title === "") {
    alert("Author or Title should not be blank");
  } else {
    myLibrary.push(new Book(author, title, pages, read));
    books();
  }

  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

const books = () => {
  var book_list = myLibrary
    .map((book, index) => {
      return `
        <li class="book" id="${index}">
            <div class="book-details">
                <h2 class="title">${book.title}</h2>
                <h3 class="author">${book.author}</h3>
                <p class="pages">${book.pages} pages</p>
                <p class="book-read">${book.read ? "Read" : "Not Read"}</p>
            </div>
            <div class="books-buttons">
                <button class="delete-btn" style="background-color: #ff3333;" onclick="deleteBook(${index})" >
                    <span style="height: 0.5rem" class="material-icons">delete_forever<span>
                </button>
                <button  class="read-toggle" onclick="readStatus(${index})" style="background-color: ${
        book.read ? "#ff3333" : "#00ff00"
      }" >Mark as ${!book.read ? "Read" : "Not Read"}</button>
            </div>
        </li>`;
    })
    .join("");
  document.getElementById("book-list").innerHTML = book_list;
};

const showForm = () => {
  const form = document.getElementById("input");
  if (form.style.display === "none") {
    form.style.display = "block";
    changeButton(`<span class="material-icons"> expand_less </span>Hide Form`);
    let buttonColor = document.getElementById("show-form");
    buttonColor.style.backgroundColor = "#ff3333";
  } else {
    form.style.display = "none";
    changeButton(`<span class="material-icons"> expand_more </span>Add Book`);
    let buttonColor = document.getElementById("show-form");
    buttonColor.style.backgroundColor = "#00ff00";
  }
};

const changeButton = (status) => {
  let buttonColor = document.getElementById("show-form");
  document.getElementById("show-form").innerHTML = status;
};

const deleteBook = (index) => {
  delete myLibrary[index];
  myLibrary.sort();
  myLibrary.pop();
  books();
};

const readStatus = (index) => {
  myLibrary[index]["read"] = !myLibrary[index]["read"];
  books();
};
