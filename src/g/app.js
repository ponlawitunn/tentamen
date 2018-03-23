// JavaScript för att implementera kraven A-E.
let productList = $("#list-of-products");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function getProducts() {
    $.get("http://demo.edument.se/api/products", (response) => {
        for(let product of response) {
        addProductCard(product);
    }
});
}

function updateQuantity() {
    let checkoutQuantity = $("div");
    checkoutQuantity.text(String(cartItems.length));
}

function addToCart(product) {
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

function addProductCard(product) {
    let productCard = $("<article></article>");
    let heading = $("<h3></h3>");
    let description = $("<p></p>");
    let price = $("<footer></footer>");
    let image = $("<img>");
    let button = $("<button></button>");

    heading.text(product.Name);
    image.attr("src", product.Image);
    description.text(product.Description);
    price.text(`${product.Price} SEK`);
    button.text("Add to Cart");
    button.attr("id", "add-to-cart");
    button.click(() => {
        addToCart(product);
    updateQuantity();
});
    productCard.append(heading);
    productCard.append(image);
    productCard.append(description);
    productCard.append(price);
    productCard.append(button);
    productList.append(productCard);
}

updateQuantity();
getProducts();
