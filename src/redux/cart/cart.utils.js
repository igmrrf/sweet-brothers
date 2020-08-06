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

export const removeItemOnce = (cartItems, cartToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartToRemove.id);
};

export const removeItemFromCart = (cartItems, cartToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
