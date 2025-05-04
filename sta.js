function showRandomMessage() {
    const messages = [
        "нан",
        "туз",
        " макси чай",
        "нос",
        "штучный"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = randomMessage;
}
let minus = document.getElementsByClassName('minus')
let plus = document.getElementsByClassName('plus')
let num = document.getElementsByClassName('num')
let price = document.getElementsByClassName('price')
let add_to_cart = document.getElementsByClassName('add-to-cart')
let cart_count = document.getElementById('cart-count')
let count = 0;
let main =  document.getElementById('main')
let product_item = document.getElementsByClassName('product-item')
let store = document.getElementById('store')
let saved_items = '';
window.onhashchange = ()=>{
    if(window.location.hash =="#cart"){
        main.innerHTML = saved_items
    }else if(window.location.hash =='#home'){
     main.innerHTML = store.innerHTML    
    }
    count = cart_count.textContent

for(let i=0; i<add_to_cart.length; i++){
    add_to_cart[i].addEventListener('click', function(){
      saved_items+= product_item[i].innerHTML
        count++;
        cart_count.textContent =count
    })
}
for (let i = 0; i < minus.length; i++) {
    let count = 0;
    let sum = 0;
    let start_price = parseFloat(price[i].textContent)
    plus[i].addEventListener('click', function() {
        count++;
        num[i].textContent = count;
        sum += start_price;
        price[i].textContent = sum;
    })
    minus[i].addEventListener('click', function() {

        if (count > 0) {
            count--;
            num[i].textContent = count;
            sum -= start_price;
            price[i].textContent = sum;
        }

    })
}
}
count = cart_count.textContent

for(let i=0; i<add_to_cart.length; i++){
    add_to_cart[i].addEventListener('click', function(){
      saved_items+= product_item[i].innerHTML
        count++;
        cart_count.textContent =count
    })
}
for (let i = 0; i < minus.length; i++) {
    let count = 0;
    let sum = 0;
    let start_price = parseFloat(price[i].textContent)
    plus[i].addEventListener('click', function() {
        count++;
        num[i].textContent = count;
        sum += start_price;
        price[i].textContent = sum;
    })
    minus[i].addEventListener('click', function() {

        if (count > 0) {
            count--;
            num[i].textContent = count;
            sum -= start_price;
            price[i].textContent = sum;
        }

    })
}