export const addProductToSumm = (summationProducts, productToSumm) => {
    const existingSummationProduct = summationProducts.find(
        summationProduct => summationProduct.id === productToSumm.id
    );

    if (existingSummationProduct) {
        return summationProducts.map(summationProduct => 
            summationProduct.id === productToSumm.id
            ? { ...summationProduct, quantity: summationProduct.quantity + 1 }
            : summationProduct
        );
    }

    return [...summationProducts, { ...productToSumm, quantity: 1 }];
};