// Side-nav
const sideNav=document.querySelector(".side-nav")
document.querySelector(".menu-bar").addEventListener("click",function(){
    sideNav.classList.remove("hidden")
})
 
const sideNavClose=document.getElementById("side-nav-close")
sideNavClose.addEventListener("click",function(){
   
    sideNav.classList.add("hidden")
})