let itemList = document.querySelector('.items');
let cart = document.querySelector('.cart');
let cartList = document.querySelector('.cart-list');
let total = document.querySelector('.total');
let tax = document.querySelector('.tax');
let subtotal = document.querySelector('.subtotal');

let items = [
    {
        id: 1,
        name: 'Mouse',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 50
    },
    {
        id: 2,
        name: 'Keyboard',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D',
        price: 150
    },
    {
        id: 3,
        name: 'Monitor',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D',
        price: 300
    },
    {
        id: 4,
        name: 'Mouse Pad',
        image: 'https://images.unsplash.com/photo-1631098983935-5363b8e50edb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 20
    },
    {
        id: 5,
        name: 'Printer',
        image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 200
    },
    {
        id: 6,
        name: 'Laptop',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww',
        price: 1000
    },
    {
        id: 7,
        name: 'Coka-cola',
        image: 'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 30
    },
    {
        id: 8,
        name: 'Tech Wear',
        image: 'https://t4.ftcdn.net/jpg/05/88/53/73/360_F_588537391_cV7h8YECScFs1jbv5gYCS6UWnPwyBhSP.jpg',
        price: 100
    },
    {
        id: 9,
        name: 'Web Development E-Book',
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 10
    },
    {
        id: 10,
        name: 'React Book',
        image: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh95coelvsycl5byd9oy7.jpg',
        price: 20
    },
    {
        id: 11,
        name: 'Tech Shoes',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHKY5rCX8b4oluD7kDPd0c8PJfx-MvK6xzw&s',
        price: 50
    },
    {
        id: 12,
        name: 'Python Book',
        image: 'https://m.media-amazon.com/images/I/51M3xZKX9hL._AC_UF1000,1000_QL80_.jpg',
        price: 100 
    }
];

function initItem() {
    items.forEach((value, key) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('style', 'width: 15rem;');
        card.innerHTML = `
            <img src="${value.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title text-center">${value.name}</h4>
                <p class="card-text text-center">Price: $${value.price}</p>
                <button class="add-to-cart btn btn-dark form-control" onclick="addToCart(${key})">Add to Cart</button>
            </div>`;
        itemList.appendChild(card);
    });
}

initItem();

let cartLists = [];

function addToCart(key) {
    if (cartLists[key] == null) {
        cartLists[key] = JSON.parse(JSON.stringify(items[key]));
        cartLists[key].quantity = 1;
    } else {
        cartLists[key].quantity += 1;
        cartLists[key].price = cartLists[key].quantity * items[key].price;
    }
    reloadCart();
}

function reloadCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    cartLists.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price;

            let listItem = document.createElement('li');
            listItem.setAttribute('class', 'list-group-item');
            listItem.innerHTML = `
                <div><img src="${value.image}" style="width: 80px"/></div>
                <div><h5 class="mt-1">${value.name}</h5></div>
                <div><h6 class="mt-2">$${value.price.toLocaleString()}</h6></div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count m-2">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            cartList.appendChild(listItem);
        }
    });

    // Calculate subtotal, tax, and total
    subtotal.innerText = `$${totalPrice.toLocaleString()}`;
    let calculatedTax = totalPrice * 0.12;
    tax.innerText = `$${calculatedTax.toLocaleString()}`;
    total.innerText = `$${(totalPrice + calculatedTax).toLocaleString()}`;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete cartLists[key];
    } else {
        cartLists[key].quantity = quantity;
        cartLists[key].price = quantity * items[key].price;
    }
    reloadCart();
}

function clearCart() {
    cartLists = [];
    reloadCart();
}