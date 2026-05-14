let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cartItems");
    const totalText = document.getElementById("cartTotal");

    if (!list || !totalText) return;

    list.innerHTML = "";

    cart.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="remove-btn" onclick="removeItem(${index})">X</button>
        `;

        list.appendChild(li);
    });

    totalText.textContent = "Total: $" + total.toFixed(2);
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function toggleCart() {
    const panel = document.getElementById("cartPanel");
    if (panel) panel.classList.toggle("active");
}

/* Welcome message */
function showMessage() {
    let name = document.getElementById("nameInput")?.value;
    let text = document.getElementById("welcomeText");

    if (!text) return;

    if (!name) {
        text.innerHTML = "Welcome! Enter your name.";
    } else {
        text.innerHTML = "Welcome " + name + "!";
    }
}