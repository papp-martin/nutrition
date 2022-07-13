export const addProductToSumm = (summationProducts, productToSumm) => {     
    return [...summationProducts, { ...productToSumm, quantity: 0 }];
};