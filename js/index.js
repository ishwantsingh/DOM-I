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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//const container = document.querySelector('.container');

const navigation = document.getElementsByTagName('a');
for (let i=0; i<6; i++) {
  navigation[i].innerHTML = siteContent.nav[`nav-item-${i+1}`];
}
//console.log(siteContent.nav["nav-item-1"])
//navigation[0].innerHTML = 'okay'
// Array.from




const ctaH1 = document.querySelector(`section.cta > div > h1`);
ctaH1.innerHTML = siteContent.cta[`h1`];
//k


const ctaBut = document.querySelector(`section.cta > div > button`);
ctaBut.innerHTML = siteContent.cta[`button`];
//k


const ctaImg = document.getElementById("cta-img");
//ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
ctaImg.src = siteContent.cta['img-src'];
//k

// const ctaText = document.querySelector('.cta-text');
const texConH41 = document.querySelector(`body > div > section.main-content > div.top-content > div:nth-child(1) > h4`);
texConH41.innerHTML = siteContent["main-content"]["features-h4"];
//k

const texConP1 = document.querySelector(`body > div > section.main-content > div.top-content > div:nth-child(1) > p`);
texConP1.innerHTML = siteContent["main-content"]["features-content"];
//k

const texConH42 = document.querySelector(`body > div > section.main-content > div.top-content > div:nth-child(2) > h4`);
texConH42.innerHTML = siteContent["main-content"]["about-h4"];
//k

const texConP2 = document.querySelector(`body > div > section.main-content > div.top-content > div:nth-child(2) > p`);
texConP2.innerHTML = siteContent["main-content"]["about-content"];
//k


const mainConImg = document.getElementById("middle-img");
mainConImg.src = siteContent["main-content"]["middle-img-src"];
//k


const botTexConH41 = document.querySelector(`body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4`);
botTexConH41.innerHTML = siteContent["main-content"]["services-h4"];
//k


const botTexConP1 = document.querySelector(`body > div > section.main-content > div.bottom-content > div:nth-child(1) > p`);
botTexConP1.innerHTML = siteContent["main-content"]["services-content"];
//k


const botTexConH42 = document.querySelector(`body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4`);
botTexConH42.innerHTML = siteContent["main-content"]["product-h4"];
//k



const botTexConP2 = document.querySelector(`body > div > section.main-content > div.bottom-content > div:nth-child(2) > p`);
botTexConP2.innerHTML = siteContent["main-content"]["product-content"];
//k


const botTexConH43 = document.querySelector(`body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4`);
botTexConH43.innerHTML = siteContent["main-content"]["vision-h4"];
//k


const botTexConP3 = document.querySelector(`body > div > section.main-content > div.bottom-content > div:nth-child(3) > p`);
botTexConP3.innerHTML = siteContent["main-content"]["vision-content"];
//k


const contactH4 = document.querySelector(`body > div > section.contact > h4`);
contactH4.innerHTML = siteContent["contact"]["contact-h4"];
//k


const contactP1 = document.querySelector(`body > div > section.contact > p:nth-child(2)`);
contactP1.innerHTML = siteContent["contact"]["address"];
//k


const contactP2 = document.querySelector(`body > div > section.contact > p:nth-child(3)`);
contactP2.innerHTML = siteContent["contact"]["phone"];
//k


const contactP3 = document.querySelector(`body > div > section.contact > p:nth-child(4)`);
contactP3.innerHTML = siteContent["contact"]["email"];
//k


const footer = document.querySelector(`body > div > footer`);
footer.innerHTML = siteContent["footer"]["copyright"];
//k


