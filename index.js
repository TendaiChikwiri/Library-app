"use strict";
let myLibrary = [
    // {
    //     author: "JK Rowling",
    //     title: "Harry Potter and the Philosopher's Stone",
    //     pages: 350,
    //     read: true,

    // },
    // {
    //     author: "Suzanne Collins",
    //     title: "Hunger Games",
    //     pages: 250,
    //     read: true,
    // },
    // {
    //     author: " J. R. R. Tolkien",
    //     title: "The Lord of the Rings",
    //     pages: 800,
    //     read: false,
    // }

];


function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

const onLoad = () =>{
    books();
    showForm();
};

function addBookToLibrary() {
    var author = document.getElementById("author").value;
    var title = document.getElementById("title").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").checked;

    if (author === ""|| title === ""){
        alert("Author or Title should not be blank")
    }
    else{
        myLibrary.push(new Book(author, title, pages, read))
        books()

    }

    document.getElementById("author").value = ""
    document.getElementById("title").value = ""
    document.getElementById("pages").value = ""
    document.getElementById("read").checked = false

    

}

const books = () => {
    var book_list = myLibrary.map((book, index) => {
        return(`<li id="${index}">${book.author}<br>${book.title}<br>${book.pages} pages<br>${book.read ? "Read": "Not Read"}</li><button style="background-color: #ff3333;" onclick="deleteBook(${index})" >Delete</button> <button  onclick="readStatus(${index})" style="background-color: ${book.read ? "#00ff00": "#ff3333"}" >Mark as ${!book.read ? "Read": "Not Read"}</button><br>`)
    }).join("");
    document.getElementById("book_list").innerHTML = book_list;

}

const showForm = () =>{
    const form = document.getElementById("input");
    if (form.style.display === "none") {
        form.style.display = "block";
        changeButton("Hide Form")
    }
    else{
        form.style.display = "none";
        changeButton("Show Form")
    }
}

const changeButton = (status)=>{
    let buttonColor = document.getElementById("show-form");
    status === "Show Form"? buttonColor.style.backgroundColor = "#00ff00": buttonColor.style.backgroundColor = "#ff3333"
    
    document.getElementById("show-form").innerHTML = status
}

const deleteBook = (index)=>{
    delete myLibrary[index]
    myLibrary.sort()
    myLibrary.pop()
    books()
}

const readStatus = (index) =>{
    myLibrary[index]["read"] = !myLibrary[index]["read"]
    books()
}