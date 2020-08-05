export const addItemToCart = (cartItems, cardItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cardItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cardItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cardItemToAdd, quantity: 1 }];
};
