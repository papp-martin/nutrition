import { createSelector } from "reselect";

const selectNutritions = state => state.nutritions;

export const selectProducts = createSelector(
    [selectNutritions],
    nutritions => nutritions.products
);

export const selectProduct = productUrlParam => createSelector(
    [selectProducts],
    products => (products ? products[productUrlParam] : null)
);