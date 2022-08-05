var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ){
        myNav.classList.add("nav-onscroll");
        myNav.classList.remove("nav-ontop");
    } 
    else {
        myNav.classList.add("nav-ontop");
        myNav.classList.remove("nav-onscroll");
    }
};

/* Shopping Cart */
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
}
