// offer-bar function
    const offerbar=document.querySelector(".offer-bar")
    document.getElementById("offer-close").addEventListener("click",function(){

    offerbar.style.display="none"
})

// Side-nav
const sideNav=document.querySelector(".side-nav")
document.querySelector(".menu-bar").addEventListener("click",function(){
    sideNav.style.display="block"
})
 
const sideNavClose=document.getElementById("side-nav-close")
sideNavClose.addEventListener("click",function(){
   
    sideNav.style.display="none"
})

// Slider section

var sliderleftbutton=document.getElementById("slider-left-activate")
var sliderrightbutton=document.getElementById("slider-right-activate")
var sliderimg=document.querySelector(".carousel-slide")
var slidermargin=0
console.log(sliderleftbutton)
sliderrightbutton.addEventListener("click",function(){
    slidermargin=slidermargin+100
    if(slidermargin>200)
    {
        slidermargin=0
        sliderimg.style.marginLeft=0
    }
    else{
        sliderimg.style.marginLeft="-" +slidermargin+"vw"
    }
})

sliderleftbutton.addEventListener("click",function(){
    if(slidermargin==0)
    {
        slidermargin=200
        sliderimg.style.marginLeft="-"+slidermargin +"vw"
    }
    else{
        slidermargin=slidermargin-100
        sliderimg.style.marginLeft="-"+slidermargin+"vw"
    }
})

window.addEventListener("scroll",function(){
    var elements=this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight=this.window.innerHeight
        var elbound=el.getBoundingClientRect()

        console.log(windowHeight)
        console.log(elbound.top)
        if(windowHeight>elbound.top-100)
        {
            console.log("hello")
            el.classList.remove("reveal-scroll-animate")
        }
    })
})


import { books } from "./book.js";

const container = document.querySelector(".book-container");

books.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.innerHTML = `
        <img src="${book.img}" alt="${book.title}" style="width: 200px;">
        <h3>${book.title}</h3>
        <p>${book.price}</p>
        <button class="shop-now" data-id="${book.id}">Shop Now</button>
    `;
    container.append(card);
});


// Cart logic
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("shop-now")) {
        const bookId = parseInt(e.target.dataset.id);
        const selectedBook = books.find(book => book.id === bookId);
        addToCart(selectedBook);
    }
});

function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${book.title} added to cart!`);
}

// best seller scroll down

document.addEventListener("DOMContentLoaded", () => {
    const bestSellerLink = document.querySelector(".best-seller-link");
    const bestSellerSection = document.getElementById("best-seller");

    if (bestSellerLink && bestSellerSection) {
        bestSellerLink.addEventListener("click", (e) => {
            e.preventDefault();
            bestSellerSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});


// todays deal scroll down

document.addEventListener("DOMContentLoaded", () => {
    const todaysDealLink = document.querySelector(".todays-deal-link");
    const sideTodaysDealLink = document.querySelector(".side-todays-deal-link");
    const todaysDealSection = document.getElementById("todays-deal");

    function scrollToTodaysDeal(e) {
        e.preventDefault();
        todaysDealSection.scrollIntoView({ behavior: "smooth" });
    }

    if (todaysDealLink) {
        todaysDealLink.addEventListener("click", scrollToTodaysDeal);
    }

    if (sideTodaysDealLink) {
        sideTodaysDealLink.addEventListener("click", scrollToTodaysDeal);
    }
});

