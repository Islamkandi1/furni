let activePage = window.location.pathname;

let home = document.getElementById("home");
let shop = document.getElementById("shop");
let about = document.getElementById("about");
let services = document.getElementById("services");
let blog = document.getElementById("blog");
let contact = document.getElementById("contact");


switch (true) {
  case activePage == '/furni/index.html':
    home.classList.add("nav-active");
    break;
  case activePage =='/furni/html-pages/shop.html':
    shop.classList.add("nav-active");
    break;
  case activePage =='/furni/html-pages/about.html':
    about.classList.add("nav-active");
    break;
  case activePage == '/furni/html-pages/services.html':
    services.classList.add("nav-active");
    break;
  case  activePage =='/furni/html-pages/blog.html': 
    blog.classList.add("nav-active");
    break;
  case activePage == '/furni/html-pages/contact.html':
    contact.classList.add("nav-active");
    break;
    default:home.classList.add("nav-active");
    break;
}



 


