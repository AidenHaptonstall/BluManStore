const homePage = document.getElementById('homeButton');
const shopPage = document.getElementById('shopButton');
const aboutUsPage = document.getElementById('aboutUsButton');
const contactPage = document.getElementById('contactButton');
const cartPage = document.getElementById('cartButton');

homePage.addEventListener('click', function(e) {
    window.location.href = "home.html";
});

shopPage.addEventListener('click', function(e) {
    window.location.href = "shop.html";
});

aboutUsPage.addEventListener('click', function(e) {
    window.location.href = "aboutUs.html";
});

contactPage.addEventListener('click', function(e) {
    window.location.href = "contact.html";
});

cartPage.addEventListener('click', function(e) {
    window.location.href = "cart.html";
});