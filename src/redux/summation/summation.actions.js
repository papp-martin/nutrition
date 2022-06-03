import CartActionTypes from "./summation.types";

export const addProduct = termek => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: termek
});

export const clearProductFromSumm = termek => ({
    type: CartActionTypes.CLEAR_PRODUCT_FROM_SUMM,
    payload: termek
});

export const removeProduct = termek => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: termek
});