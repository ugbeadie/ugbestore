const toggleButton = document.getElementsByClassName("toggle")[0]
const navUl = document.getElementsByClassName('nav-items')[0];
const navMenu = document.querySelector('.nav')

toggleButton.addEventListener('click', () => {
    // alert('fhfg')
    navUl.classList.toggle('active');
    document.body.classList.toggle("close");
    document.body.classList.toggle('hidden')
})

window.addEventListener('scroll',  function() {
    if (window.scrollY > 500) {
        navMenu.classList.add('scroll')
        // topLink.classList.add("show-link");

    }else{
        navMenu.classList.remove('scroll')
        // topLink.classList.remove("show-link");

    }
});

let cartIcon = document.querySelector('.cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('.close-cart')

cartIcon.addEventListener('click', () => {
    cart.classList.add('display')
    navMenu.style.display = 'none'
})

closeCart.addEventListener('click', () => {
    cart.classList.remove('display')
    navMenu.style.display = 'flex'
})

let deleteItemBtn = document.querySelectorAll('.cart-remove')
    for (let i = 0; i < deleteItemBtn.length; i++) {
        let button = deleteItemBtn[i];
        button.addEventListener('click', deleteItem)
    }

let inputs = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.addEventListener('change', quantityChanged)
    }

let addToCart = document.querySelectorAll('.add-to-cart')
    for (let i = 0; i < addToCart.length; i++) {
        const button = addToCart[i];
        button.addEventListener('click', addItemToCartClicked)
}

document.querySelector('.checkout').addEventListener('click', purchased)

function deleteItem(e) {
    let buttonClicked = e.target
        buttonClicked.parentElement.remove()
        updateTotal()
}

function quantityChanged(e) {
    var input = e.target
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1
    }
    updateTotal()
    updateNumberOfItemsInCart()
}

function updateNumberOfItemsInCart() {
    let itemNumber = document.querySelector('.item-quanity').textContent++
    console.log(itemNumber)
}

function updateTotal () {
    let total = 0
    let cartContainer = document.getElementsByClassName('cart-content')[0]
    let cartBoxes = cartContainer.getElementsByClassName('cart-box')
    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i]
        let priceEl = cartBox.getElementsByClassName('item-price')[0]
        let quantityEl = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceEl.innerHTML.replace('$', ''))
        let quantity = quantityEl.value
        total = total + (price * quantity)
    }
    document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
}

function addItemToCartClicked(e) {
    let button = e.target
    let Item = button.parentElement.parentElement
    let name = Item.querySelector('.name').textContent
    let price = Item.querySelector('.price .amount').textContent
    let img = Item.querySelector('.img-front').src
    let itemNumber = document.querySelector('.item-quanity').textContent
    addItemToCart(name, price, img, itemNumber)
    updateTotal()
}

function addItemToCart(name, price, img, itemNumber) {
    let cartBox = document.createElement('div')
    let cartItems = document.querySelector('.cart-content')
    let cartItemNames = cartItems.querySelectorAll('.item-name')
    // let itemNumber = cartItems.querySelector('.item-quanity')
    // localStorage.getItem('CART')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].textContent === name) {
            alert('item already in cart')
            return
        }        
    }
    let cartBoxItem = `
        <div class="cart-box">
            <img src="${img}" alt="" class="item-img">
            <div class="detail-box">
                <div class="item-name">${name}</div>
                <div class="cart-price">
                    <span class="item-quantity">${itemNumber}</span>
                    <span class="x">x</span>
                    <span class="item-price">${price}</span>
                </div>
                <input type="number" value="1" class="cart-quantity">
            </div>
            <img src="./images/icons8-trash-30.png" alt="" class="cart-remove">
        </div>`
        // let inputValue = cartItems.querySelector('.cart-quantity')
    // cartNumber.style.display = "flex"; 
    // console.log(itemNumber)
    cartBox.innerHTML = cartBoxItem
    cartItems.append(cartBox)
    cartBox.getElementsByClassName('cart-remove')[0].addEventListener('click', deleteItem)
    cartBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
    // localStorage.setItem('CART', JSON.stringify(cartBoxItem))
    // console.log(localStorage)
}

function purchased() {
    alert('Thank you for your purchase')
    let cartItems = document.querySelector('.cart-content')
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateTotal()
}



























// navItem.addEventListener('click', function (e) {
//     const id = e.target.dataset.id;
//     if (id) {
//         btns.forEach(function(btn) {
//             btn.classList.remove('active')
//             e.target.classList.add('active')
//         })
//     }
// })

// const leftImgs = document.querySelector('.left')
// let smallImg = document.getElementsByClassName('small-img')
// let largeImg = document.querySelector('.big-img')

// smallImg[0].onclick = function() {
//     largeImg.src = smallImg[0].src;
// }-
// smallImg[1].onclick = function() {
//     largeImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function() {
//     largeImg.src = smallImg[2].src;
// }
// smallImg[3].onclick = function() {
//     largeImg.src = smallImg[3].src;
// }

// leftImgs.addEventListener('click', function (e) {
//     const imgs = document.querySelectorAll('.small-img')
//     const id = e.target.dataset.id;
//     if (id) {
//         imgs.forEach(function(img) {
//             img.classList.remove('active');
//             e.target.classList.add('active')
//         })
//     }
// })


// const btns = document.querySelectorAll('.tab-btn')
// const navItem = document.querySelector('.nav-items')
// const prodItem = document.querySelector('.product-tabs')

// // const itemCount = document.getElementById('userInput').value;
// const minus = document.getElementsByClassName('minus')[0];
// const plus = document.getElementsByClassName('plus')[0];
// let count = 1;

// plus.addEventListener('click', () => {
//     var input = document.getElementById('userInput').value = count+=1;
//     console.log(input)
// })

// minus.addEventListener('click', () => {
//     if (count > 1) {
//     var input = document.getElementById('userInput').value = count-=1;
//   }
// })