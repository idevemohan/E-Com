// Side-nav
const sideNav=document.querySelector(".side-nav")
document.querySelector(".menu-bar").addEventListener("click",function(){
    sideNav.style.display="block"
})
 
const sideNavClose=document.getElementById("side-nav-close")
sideNavClose.addEventListener("click",function(){
   
    sideNav.style.display="none"
})