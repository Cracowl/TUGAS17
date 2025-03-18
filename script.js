document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:9000/")
        .then(response => response.json())
        .then(data => {
            const bookList = document.querySelector(".book-list");

            data.forEach(book => {
                let bookItem = document.createElement("div");
                bookItem.classList.add("book");
                bookItem.innerHTML = `
                    <img src="https://api.dicebear.com/9.x/miniavs/svg?seed=${book.title}" alt="${book.title}">
                    <div>
                        <h2>${book.title}</h2>
                        <p>✍️ ${book.author}</p>
                    </div>
                    <button onclick="checkBook('${book.title}', '${book.author}')">Cek Buku</button>
                `;
                bookList.appendChild(bookItem);
            });
        })
        .catch(error => console.error("Gagal mengambil data:", error));
});

function checkBook(title, author) {
    alert(`📖 Judul: ${title}\n✍️ Penulis: ${author}`);
}
