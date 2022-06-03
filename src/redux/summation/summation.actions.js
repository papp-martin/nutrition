import CartActionTypes from "./summation.types";

export const addProduct = termek => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: termek
});