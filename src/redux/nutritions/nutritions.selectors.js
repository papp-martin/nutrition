import { createSelector } from "reselect";

const selectNutritions = state => state.nutritions;

export const selectProducts = createSelector(
    [selectNutritions],
    nutritions => nutritions.products
);

export const selectProductsFor = createSelector(
    [selectProducts],
    products => products ? Object.keys(products).map(key => products[key]) : []
);

export const selectProduct = productUrlParam => createSelector(
    [selectProducts],
    products => products[productUrlParam]
);