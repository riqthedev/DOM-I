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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const firstLink = document.querySelector("nav a:nth-of-type(1)");
const secondLink = document.querySelector("nav a:nth-of-type(2)");
const thirdLink = document.querySelector("nav a:nth-of-type(3)");
const fourthLink = document.querySelector("nav a:nth-of-type(4)");
const fifthLink = document.querySelector("nav a:nth-of-type(5)");
const sixthLink = document.querySelector("nav a:nth-of-type(6)");



firstLink.textContent = "Services"
secondLink.textContent = "Products"
thirdLink.textContent = "Vision"
fourthLink.textContent = "Features"
fifthLink.textContent = "About"
sixthLink.textContent = "Contact"

const mainImg = document.getElementById("cta-img");
mainImg.setAttribute("src", siteContent["cta"]["img-src"])

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"]

const headerText = document.querySelector(".cta-text h1");
headerText.textContent = siteContent["cta"]["h1"]

//


const features = document.querySelector(".text-content h4");
features.textContent = siteContent["main-content"]["features-h4"]

const featureContent = document.querySelector(".text-content p:nth-of-type(1)");
featureContent.textContent = siteContent["main-content"]["features-content"]



const about = document.querySelector(".text-content:nth-of-type(2) h4");
about.textContent = siteContent["main-content"]["about-h4"]

const aboutContent = document.querySelector(".text-content:nth-of-type(2) p");
aboutContent.textContent = siteContent["main-content"]["about-content"]


//

const services = document.querySelector(".bottom-content .text-content h4");
services.textContent = siteContent["main-content"]["services-h4"]

const servicesContent = document.querySelector(".bottom-content .text-content p");
servicesContent.textContent = siteContent["main-content"]["services-content"]


const product = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
product.textContent = siteContent["main-content"]["product-h4"]


const productContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productContent.textContent = siteContent["main-content"]["product-content"]



const vision = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
vision.textContent = siteContent["main-content"]["vision-h4"]


const visionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
visionContent.textContent = siteContent["main-content"]["vision-content"]

//



const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"]

const contactContent = document.querySelector(".contact p:nth-of-type(1)");
contactContent.textContent = siteContent["contact"]["address"]

const contactContent2 = document.querySelector(".contact p:nth-of-type(2)");
contactContent2.textContent = siteContent["contact"]["phone"]

const contactContent3 = document.querySelector(".contact p:nth-of-type(3)");
contactContent3.textContent = siteContent["contact"]["email"]


const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"]