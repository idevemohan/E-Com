import { books } from "./book.js";

const offerbar = document.querySelector(".offer-bar");
document.getElementById("offer-close").addEventListener("click", function () {
    offerbar.style.display = "none";
});

const menubar = document.querySelector(".menu-bar");
const sidenav = document.getElementById("side-nav");

menubar.addEventListener("click", function () {
    sidenav.style.marginLeft = "0px";
});

document.getElementById("side-nav-close").addEventListener("click", () => {
    sidenav.style.marginLeft = "-60%";
});

const booksContainer = document.querySelector(".books");

books.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book");
    card.innerHTML = `
        <img style="width:20vw;" src="${book.img}" alt="${book.title}">
        <h1>${book.title}</h1>
        <p>${book.price}</p>
    `;
    card.dataset.tags = `${book.description},${book.price},${book.reviews}`;
    booksContainer.append(card);
});

const filterList = [];
const tags = document.querySelectorAll('input[name="tags"]');

function update() {
    const bookList = document.querySelectorAll(".book");
    bookList.forEach(book => {
        const tagsArray = book.dataset.tags.split(',').map(tag => tag.trim());
        let show = filterList.length === 0 || filterList.some(filter => tagsArray.includes(filter));
        book.style.display = show ? "block" : "none";
    });
}

tags.forEach(tag => {
    tag.addEventListener("change", (e) => {
        if (e.target.checked) {
            filterList.push(e.target.value);
        } else {
            const index = filterList.indexOf(e.target.value);
            if (index > -1) {
                filterList.splice(index, 1);
            }
        }
        update();
    });
});

// Search functionality
const searchInput = document.querySelector('.navbar-search input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.book').forEach(book => {
        const title = book.querySelector('h1').innerText.toLowerCase();
        const tags = book.dataset.tags.toLowerCase();
        book.style.display = title.includes(searchTerm) || tags.includes(searchTerm) ? "block" : "none";
    });
});
