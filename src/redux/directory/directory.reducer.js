const INITIAL_STATE = {
    sections: [
        {
            title: 'Zöldségek',
            imageUrl: 'https://magyarmezogazdasag.hu/sites/default/files/styles/default_crop/public/uploads/2020-03/zoldseg_gyum_0_0.jpg?itok=JEQcOemQ',
            id: 1,
            linkUrl: 'zoldsegek'
        },
        {
            title: 'Gyümölcsök',
            imageUrl: 'https://www.cityfood.hu/wp-content/uploads/2020/08/erdekessegek-a-gyumolcsok-vilagabol.jpg',
            id: 2,
            linkUrl: 'gyumolcsok'
        },
        {
            title: 'Tejtermékek',
            imageUrl: 'https://tesco.hu/img/content_platform_hu/sized/757x426-72-ffffff/dairy_products_and_milk.jpg',
            id: 3,
            linkUrl: 'tejtermekek'
        },
        {
            title: 'Húsfélék',
            imageUrl: 'https://www.foodandwine.hu/wp-content/uploads/2015/07/bbq-grilling-steak-590.jpg',
            id: 4,
            linkUrl: 'husfelek'
        },
        {
            title: 'Halak',
            imageUrl: 'https://www.femcafe.hu/sites/default/files/images2017/3_egeszseg/halhus_pixabay_szoveg3.jpg',
            id: 5,
            linkUrl: 'halak'
        },
        {
            title: 'Tésztafélék',
            imageUrl: 'https://glutenmentesnaplo.cafeblog.hu/files/2018/07/keltteszta.jpg',
            id: 6,
            linkUrl: 'tesztafelek'
        },
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;