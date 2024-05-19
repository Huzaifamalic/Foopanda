
// Function to add item to cart
function addToCart(itemName, restaurantName, price) {
  
  // Create the cart item object
  const cartItem = {
      itemName,
      restaurantName,
      price
  };

  // Get existing cart from local storage
  let cart = getCart();
  
  // Add new item to cart
  cart.push(cartItem);

  // Save updated cart to local storage
  saveCart(cart);

  // Log the action to the console
  console.log('Added to cart:', cartItem);
}

// Function to get cart from local storage
function getCart() {
  // Retrieve the cart from local storage
  const cart = localStorage.getItem('cart');
  
  // Parse the cart or return an empty array if no cart exists
  return cart ? JSON.parse(cart) : [];
}

// Function to save cart to local storage
function saveCart(cart) {
  // Stringify and save the cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

