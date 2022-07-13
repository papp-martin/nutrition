import SummationActionTypes from "./summation.types";

export const addProduct = oneProduct => ({
    type: SummationActionTypes.ADD_PRODUCT,
    payload: oneProduct
});

export const quantityChange = () => ({
    type: SummationActionTypes.QUANTITY_CHANGED,
});

export const clearProductFromSumm = oneProduct => ({
    type: SummationActionTypes.CLEAR_PRODUCT_FROM_SUMM,
    payload: oneProduct
});

export const removeProduct = oneProduct => ({
    type: SummationActionTypes.REMOVE_PRODUCT,
    payload: oneProduct
});

export const clearSummation = () => ({
    type: SummationActionTypes.CLEAR_SUMMATION
});