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
        console.log("Book added")
    }

    document.getElementById("author").value = ""
    document.getElementById("title").value = ""
    document.getElementById("pages").value = ""
    document.getElementById("read").checked = false

    

}

const books = () => {
    var book_list = myLibrary.map((book, index) => {
        return(`<li id="${index}">${book.author}<br>${book.title}<br>${book.pages} pages<br>${book.read ? "Read": "Not Read"}</li><button  onclick="deleteBook(${index})" >Delete</button> <button  onclick="readStatus(${index})" >Mark as ${!book.read ? "Read": "Not Read"}</button><br>`)
    }).join("");
    document.getElementById("book_list").innerHTML = book_list;

}

const showForm = () =>{
    const form = document.getElementById("input");
    if (form.style.display === "none") {
        form.style.display = "block";
    }
    else{
        form.style.display = "none"
    }
}


const deleteBook = (index)=>{
    console.log(`deleted index ${index}`)
    delete myLibrary[index]
    myLibrary.sort()
    myLibrary.pop()
    books()
}

const readStatus = (index) =>{
    console.log()
    myLibrary[index]["read"] = !myLibrary[index]["read"]
    console.log(myLibrary[index]["read"], !myLibrary[index]["read"])
    books()
}