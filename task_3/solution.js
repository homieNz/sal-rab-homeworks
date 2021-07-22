function renderCartItem(item) {
    const product = item;

    let itemCountText = "";  
    let sum = product["count"]*product["price"];

    itemCountText += + product["count"] + " × "+ product["price"]+ " ₽ = " + sum + " ₽"; 

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}