let cart = $("#cart-list");
let cartItems = JSON.parse(localStorage.getItem("cartItems"));

function calculateQuantity(product) {
    let quantity = 0;
    for(let item of cartItems) {
        if(item.id === product.id) {
            quantity++;
        }
    }
    return quantity;
}

function displayCart(product) {
    let productCard = $("<article></article>");
    let heading = $("<h3></h3>");
    let description = $("<p></p>");
    let price = $("<footer></footer>");
    let image = $("<img>");
    let quantity = $("<span></span>");

    heading.text(product.Name);
    image.attr("src", product.Image);
    description.text(product.Description);
    price.text(`${product.Price} SEK$`);
    quantity.text(`${calculateQuantity(product)}`);

    productCard.append(heading);
    productCard.append(image);
    productCard.append(description);
    productCard.append(price);
    productCard.append(quantity);
    cart.append(productCard);
}

function loadItems() {
    let deDuplicatedArray = cartItems.filter((product, index, cartItems) => {
        return cartItems.map(object => {
            return object["name"]}).indexOf(product["name"]) === index;
});
    cartItems === null
        ? cart.innerHTML = `<h2>No products in your cart!, Please buy someting</h2>`
        : deDuplicatedArray.forEach(function(item){
            displayCart(item)
        });
}
loadItems();