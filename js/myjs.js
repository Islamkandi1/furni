let activePage = window.location.pathname;

let home = document.getElementById("home");
let shop = document.getElementById("shop");
let about = document.getElementById("about");
let services = document.getElementById("services");
let blog = document.getElementById("blog");
let contact = document.getElementById("contact");


switch (true) {
  case  activePage == "/index.html" || activePage == "/D:/newprojucts/furni-website/index.html":
    home.classList.add("nav-active");
    break;
  case activePage == "/html-pages/shop.html" || activePage == "/D:/newprojucts/furni-website/html-pages/shop.html":
    shop.classList.add("nav-active");
    break;
  case activePage == "/html-pages/about.html" || activePage == "/D:/newprojucts/furni-website/html-pages/about.html":
    about.classList.add("nav-active");
    break;
  case activePage == "/html-pages/services.html" || activePage == "/D:/newprojucts/furni-website/html-pages/services.html":
    services.classList.add("nav-active");
    break;
  case activePage == "/html-pages/blog.html" || activePage == "/D:/newprojucts/furni-website/html-pages/blog.html": 
    blog.classList.add("nav-active");
    break;
  case activePage == "/html-pages/contact.html" || activePage == "/D:/newprojucts/furni-website/html-pages/contact.html":
    contact.classList.add("nav-active");
    break;
    default:home.classList.add("nav-active");
    break;
}



 


