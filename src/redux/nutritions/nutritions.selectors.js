import { createSelector } from "reselect";

// const PRODUCT_ID_MAP = {
//     zoldsegek: 1,
//     gyumolcsok: 2,
//     tejtermekek: 3,
//     husfelek: 4,
//     halak: 5,
//     tesztak: 6
// }

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