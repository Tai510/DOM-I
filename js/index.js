const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let headerNav = document.querySelectorAll("a");
let headerNav2 = Array.from(headerNav);
headerNav2.map((item , index) => {
item.textContent = Object.values(siteContent.nav)[index];
})



let h1 = document.querySelector("h1").textContent = siteContent.cta["h1"];

let buttonText = document.querySelector("button").textContent = siteContent.cta["button"];

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"]);

let mainContentItems = document.querySelectorAll(".main-content h4, .main-content p, .main-content img")
let mainContentItems2 = Array.from(mainContentItems)
console.log(mainContentItems2)
mainContentItems2.map((item, index) => {
  Object.keys(siteContent["main-content"])[index].includes("img") ? 
      item.src = Object.values(siteContent["main-content"])[index] :
      item.textContent = Object.values(siteContent["main-content"])[index]
})

let contactItems = document.querySelectorAll(".contact h4, .contact p ")
let contactItems2 = Array.from(contactItems)
contactItems2.map((item , index) => {
item.textContent = Object.values(siteContent.contact)[index];
})

let footerItems = document.querySelectorAll("footer p")
let footerItems2 = Array.from(footerItems)
footerItems2.map((item , index) => {
item.textContent = Object.values(siteContent.footer)[index];
})



















// let featureText = document.querySelectorAll(".top-content h4")[0].textContent = siteContent["main-content"]["features-h4"];

// let featureText2 = document.querySelectorAll(".top-content p")[0].textContent = siteContent["main-content"]["features-content"];

// let aboutText = document.getElementsByClassName("text-content")[1].textContent = siteContent["main-content"]["about-h4"];

// let aboutText2 = document.getElementsByClassName("text-content")[1].textContent = siteContent["main-content"]["about-content"];

// let logo3 = document.getElementById("middle-img");
// logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// let serviceText = document.getElementsByClassName("text-content")[2].textContent = siteContent["main-content"]["services-h4"];

// let serviceText2 = document.getElementsByClassName("text-content")[2].textContent = siteContent["main-content"]["services-content"];