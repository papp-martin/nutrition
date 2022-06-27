import CartActionTypes from "./summation.types";

export const addProduct = oneProduct => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: oneProduct
});

export const quantityChange = () => ({
    type: CartActionTypes.QUANTITY_CHANGED,
});

export const clearProductFromSumm = oneProduct => ({
    type: CartActionTypes.CLEAR_PRODUCT_FROM_SUMM,
    payload: oneProduct
});

export const removeProduct = oneProduct => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: oneProduct
});