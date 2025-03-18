document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:9000/")
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("books", JSON.stringify(data)); // Simpan di localStorage
            displayBooks(data);
        })
        .catch(error => console.error("Gagal mengambil data:", error));
});

function displayBooks(data) {
    const bookList = document.querySelector(".book-list");
    bookList.innerHTML = ""; 

    data.forEach((book, index) => {
        let bookItem = document.createElement("div");
        bookItem.classList.add("book");
        bookItem.innerHTML = `
            <img src="https://api.dicebear.com/9.x/miniavs/svg?seed=${book.title}" alt="${book.title}">
            <div>
                <h2>${book.title}</h2>
                <p>✍️ ${book.author}</p>
            </div>
            <button class="check-btn" onclick="checkBook('${book.title}', '${book.author}')">Cek Buku</button>
            <button class="delete-btn" onclick="deleteBook(${index})">Hapus</button>
        `;
        bookList.appendChild(bookItem);
    });
}

function checkBook(title, author) {
    alert(`📖 Judul: ${title}\n✍️ Penulis: ${author}`);
}

function deleteBook(index) {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
    displayBooks(books);
}

function addBook() {
    let title = document.getElementById("newTitle").value.trim();
    let author = document.getElementById("newAuthor").value.trim();

    if (title === "" || author === "") {
        alert("Judul dan Penulis harus diisi!");
        return;
    }

    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({ title, author });
    localStorage.setItem("books", JSON.stringify(books));

    document.getElementById("newTitle").value = "";
    document.getElementById("newAuthor").value = "";

    displayBooks(books);
}

function showAvailableBooks() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    let bookList = document.getElementById("availableBooks");
    bookList.innerHTML = "";

    books.forEach(book => {
        let li = document.createElement("li");
        li.textContent = `${book.title} - ${book.author}`;
        bookList.appendChild(li);
    });

    document.getElementById("bookModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("bookModal").style.display = "none";
}
