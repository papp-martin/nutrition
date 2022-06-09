const FOODS = {
    vegetables: {
        id: 1,
        title: "Vegetables",
        routeName: "vegetables",
        allProducts: [
            {
                id: 1,
                name: 'artichoke',
                energy: 50.0,
                protein: 2.4,
                fat: 0.1,
                carbohydrate: 9.5,
                imageUrl: "https://image-api.hazipatika.com/hazipatika/images/articles/XJ/vx/4Md0OI3BJuFnx3UlqMxCcD1B6xF79MdHABSWlHvF.jpg?w=1200&h=630&s=f63fd011af3dc72c9dbd880f1af6a41d"
            },
            {
                id: 2,
                name: "beetroot",
                energy: 31.0,
                protein: 1.3,
                fat: 0.1,
                carbohydrate: 5.9,
                imageUrl: "https://www.mindmegette.hu/images/211/L/lead_L_crop_201801081318_126516_cekla.jpg"
            },
            {
                id: 3,
                name: "chicory",
                energy: 16.0,
                protein: 1.3,
                fat: 0.2,
                carbohydrate: 2.3,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Witlof_en_wortel.jpg"
            },
            {
                id: 4,
                name: "sweetcorn",
                energy: 128.0,
                protein: 4.7,
                fat: 1.6,
                carbohydrate: 23.6,
                imageUrl: "https://www.agraroldal.hu/nmimg/730x400/upload/newsimages/wWOvdXUQhYAsYbIA.jpg"
            },
            {
                id: 5,
                name: "chickpeas",
                energy: 307.0,
                protein: 19.8,
                fat: 3.4,
                carbohydrate: 48.8,
                imageUrl: "https://cleaneating.hu/wp-content/uploads/2018/02/csicseriborso-egeszseges.jpg"
            },
            {
                id: 6,
                name: "sweet potato",
                energy: 31.0,
                protein: 2.4,
                fat: 0.4,
                carbohydrate: 4.0,
                imageUrl: "https://cleaneating.hu/wp-content/uploads/2018/07/csicsoka.jpg"
            },
            {
                id: 7,
                name: "zucchini",
                energy: 31.0,
                protein: 1.5,
                fat: 0.4,
                carbohydrate: 5.3,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/W-aktkpTURBXy8zZDUwMzc4Yjk2MTEwOTRkOTc3ODMyMzcwZGQ2NWNmOC5qcGeSlQMAOM0D6M0CMpUCzQNSAMLD"
            },
            {
                id: 8,
                name: "endivia salad",
                energy: 13.0,
                protein: 1.8,
                fat: 0.2,
                carbohydrate: 0.9,
                imageUrl: "https://www.mindmegette.hu/images/104/O/115767_endivia05.jpg"
            },
            {
                id: 9,
                name: "cabbage",
                energy: 32.0,
                protein: 1.6,
                fat: 0.2,
                carbohydrate: 5.7,
                imageUrl: "https://egeszsegter.hu/images/blog_pic/14288768737192.jpg"
            },
            {
                id: 10,
                name: "lettuce",
                energy: 17.0,
                protein: 1.4,
                fat: 0.3,
                carbohydrate: 2.0,
                imageUrl: "https://egeszsegter.hu/images/blog_pic/14973910983590.jpg"
            },
            {
                id: 11,
                name: "beans",
                energy: 164.0,
                protein: 10.8,
                fat: 0.4,
                carbohydrate: 29.0,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/IZ/so/nEmbXE0ocmMInou7235jeehiHe2xZ6Cv0x1i14Yg.jpeg?fit=crop&w=600&h=315&s=a2b4f3983b8a2144ccc56562113e65f7"
            },
            {
                id: 12,
                name: "black radish",
                energy: 10.0,
                protein: 1.1,
                fat: 0.2,
                carbohydrate: 1.0,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/YLcktkqTURBXy9hOThhMjcyNDEwY2QwNzVhZWNmMTk5OWRjMmViNDVjYy5qcGVnkZUCzQOlAMLD"
            },
            {
                id: 13,
                name: "garlic",
                energy: 134.0,
                protein: 6.8,
                fat: 0.1,
                carbohydrate: 26.3,
                imageUrl: "http://mentalfitnessguru.hu/wp-content/uploads/2018/01/fokhagyma.jpg"
            },
            {
                id: 14,
                name: "hot peppers",
                energy: 342.0,
                protein: 13.0,
                fat: 4.0,
                carbohydrate: 63.0,
                imageUrl: "https://novenypatika.cdn.shoprenter.hu/custom/novenypatika/image/data/product/ZKIprofi/fuszerpaprika.jpg?lastmod=1647348925.1641060276"
            },
            {
                id: 15,
                name: "kohlrabi",
                energy: 38.0,
                protein: 2.1,
                fat: 0.2,
                carbohydrate: 6.9,
                imageUrl: "https://www.vitalitas-magazin.hu/vitalitas-kepek/cikkek/fuveszkert/karalabe-0.png"
            },
            {
                id: 16,
                name: "cauliflower",
                energy: 29.0,
                protein: 2.4,
                fat: 0.4,
                carbohydrate: 3.9,
                imageUrl: "https://www.kifli.hu/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.kifli.hu/images/grocery/products/55286/55286-1603816951.jpg"
            },
            {
                id: 17,
                name: "brussels sprouts",
                energy: 50.0,
                protein: 4.9,
                fat: 0.6,
                carbohydrate: 6.1,
                imageUrl: "https://tudatosvasarlo.hu/wp-content/uploads/jez-timms-ia9z68YnJdY-unsplash-1.jpg"
            },
            {
                id: 18,
                name: "kale",
                energy: 34.0,
                protein: 3.6,
                fat: 0.3,
                carbohydrate: 4.3,
                imageUrl: "https://secure.ce-tescoassets.com/assets/HU/003/289003/ShotType1_540x540.jpg"
            },
            {
                id: 19,
                name: "cucumber",
                energy: 12.0,
                protein: 1.0,
                fat: 0.1,
                carbohydrate: 1.7,
                imageUrl: "https://www.syngenta.hu/sites/g/files/zhg316/f/480-480-vigorex-f1-kigyouborka.jpg"
            },
            {
                id: 20,
                name: "eggplant",
                energy: 26.0,
                protein: 1.3,
                fat: 0.2,
                carbohydrate: 4.8,
                imageUrl: "https://www.mindmegette.hu/images/198/O/crop_201707301403_padlizsan.jpg"
            },
            {
                id: 21,
                name: "tomato",
                energy: 22.0,
                protein: 1.0,
                fat: 0.2,
                carbohydrate: 4.0,
                imageUrl: "https://zoldsegtermesztes.hu/wp-content/uploads/2020/10/paradicsom-1.jpg"
            },
            {
                id: 22,
                name: "radish",
                energy: 15.0,
                protein: 1.2,
                fat: 0.1,
                carbohydrate: 2.2,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/XZlktkpTURBXy9jZTVmZmE4MzM1MDczNDY2NjlkYTVhMzMxZWRjZjRjZi5qcGeSlQMAHs0D6M0CMpUCzQNSAMLD"
            },
            {
                id: 23,
                name: "yellow peas",
                energy: 314.0,
                protein: 21.7,
                fat: 1.5,
                carbohydrate: 53.1,
                imageUrl: "https://www.mindmegette.hu/images/109/O/121757_sargaborso08-201510171421.jpg"
            },
            {
                id: 24,
                name: "carrot",
                energy: 40.0,
                protein: 1.2,
                fat: 0.2,
                carbohydrate: 8.1,
                imageUrl: "https://sargarepainfo.hu/wp-content/uploads/2020/10/sargarepa.jpg"
            },
            {
                id: 25,
                name: "sorrel",
                energy: 27.0,
                protein: 2.4,
                fat: 0.5,
                carbohydrate: 2.3,
                imageUrl: "https://nyugdijban.sk/wp-content/uploads/2019/03/spinach_leaves_thinkstock.jpg"
            },
            {
                id: 26,
                name: "asparagus",
                energy: 16.0,
                protein: 2.0,
                fat: 0.1,
                carbohydrate: 1.8,
                imageUrl: "https://www.mindmegette.hu/images/107/O/119652_sparga01-201510171351.jpg"
            },
            {
                id: 27,
                name: "spinach",
                energy: 19.0,
                protein: 2.3,
                fat: 0.3,
                carbohydrate: 1.8,
                imageUrl: "https://dietless.hu/media/2016/04/spenot-04.jpg"
            },
            {
                id: 28,
                name:"cucumber",
                energy:12.0,
                protein:1.0,
                fat:0.1,
                carbohydrate:1.7,
                imageUrl: "https://www.mindmegette.hu/images/105/O/117610_uborka05-201510171323.jpg"
            },
            {
                id: 29,
                name:"onion",
                energy:40.0,
                protein:1.2,
                fat:0.1,
                carbohydrate:8.3,
                imageUrl: "https://receptmegoszto.hu/keptar_hozzavalok/109.jpg"
            },
            {
                id: 30,
                name:"celery",
                energy:31.0,
                protein:1.4,
                fat:0.3,
                carbohydrate:5.0,
                imageUrl: "https://www.karpatinfo.net/sites/default/files/titlelapkep/2021/nov/zeller_2.jpg"
            },
            {
                id: 31,
                name:"green beans",
                energy:41.0,
                protein:2.6,
                fat:0.3,
                carbohydrate:6.8,
                imageUrl: "https://receptmegoszto.hu/keptar_hozzavalok/152.jpg"
            },
            {
                id: 32,
                name:"green pepper",
                energy:20.0,
                protein:1.2,
                fat:0.3,
                carbohydrate:3.0,
                imageUrl: "http://www.magro.hu/agrarhirek/wp-content/uploads/2015/12/Manganji_green_pepper_by_yomi955.jpg"
            },
            {
                id: 33,
                name:"broccoli",
                energy:24.0,
                protein:3.3,
                fat:0.2,
                carbohydrate:2.1,
                imageUrl: "https://www.mindmegette.hu/images/106/O/118328_brokkoli01-201510171333.jpg"
            },
            {
                id: 34,
                name: "potato",
                energy: 94.0,
                protein: 2.5,
                fat: 0.2,
                carbohydrate: 20.0,
                imageUrl: "https://tudatosvasarlo.hu/wp-content/uploads/ben-libby-Bt61phmxr-4-unsplash-1.jpg"
            }
        ]
    },
    fruits: {
        id: 2,
        title: "Fruits",
        routeName: "fruits",
        allProducts: [
            {
                id: 35,
                name: "apple",
                energy: 35.0,
                protein: 0.4,
                fat: 0.4,
                carbohydrate: 7.0,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/uwfktkpTURBXy80ZjhmYzAyYjljMmFhODFiYWIzYjNjMGU2NGQwOTBkNS5qcGeSlQMAH80D6M0CMpUCzQNSAMLD"
            },
            {
                id: 36,
                name: "pineapple",
                energy: 53.0,
                protein: 0.4,
                fat: 0.1,
                carbohydrate: 12.0,
                imageUrl: "https://mlmiskola.hu/wp-content/uploads/2019/06/innofit-gy%C3%BCm%C3%B6lcs-ananasz-mlmiskola.hu_.jpg"
            },
            {
                id: 37,
                name: "avocado",
                energy: 176.0,
                protein: 2.0,
                fat: 15.3,
                carbohydrate: 7.4,
                imageUrl: "https://vitalmagazin.hu/wp-content/uploads/2018/11/Avocado-1.jpg"
            },
            {
                id: 38,
                name: "banana",
                energy: 105.0,
                protein: 1.3,
                fat: 0.1,
                carbohydrate: 24.2,
                imageUrl: "http://ocdn.eu/images/pulscms/MTA7MDA_/83f320adda68a5bef92da54e5917bdaf.jpg"
            },
            {
                id: 39,
                name: "plum",
                energy: 60.0,
                protein: 0.7,
                fat: 0.2,
                carbohydrate: 13.1,
                imageUrl: "https://www.cityfood.hu/wp-content/uploads/2021/08/szilva.jpg"
            },
            {
                id: 40,
                name: "quince",
                energy: 49.0,
                protein: 0.6,
                fat: 0.9,
                carbohydrate: 9.1,
                imageUrl: "https://birsalmasajt.hu/wp-content/uploads/2019/07/Birs-birsalma-birsk%C3%B6rte-zs%C3%A1kban.jpg"
            },
            {
                id: 41,
                name: "lemon",
                energy: 31.0,
                protein: 0.4,
                fat: 0.6,
                carbohydrate: 2.3,
                imageUrl: "https://static.manna.global/img/cms/hu/980/5978-ezeroldalu-csodaszer-a-citrom-133005.jpg"
            },
            {
                id: 42,
                name: "sugar melon",
                energy: 47.0,
                protein: 0.3,
                fat: 0.1,
                carbohydrate: 11.1,
                imageUrl: "https://hobbikert.hu/images/magazin/sargadinnye01.jpg"
            },
            {
                id: 43,
                name: "date",
                energy: 282.0,
                protein: 1.9,
                fat: 0.5,
                carbohydrate: 66.3,
                imageUrl: "https://kep.index.hu/1/0/1932/19324/193240/19324070_1206132_f14239e7eee26189c3575db1c22715ca_wm.jpg"
            },
            {
                id: 44,
                name: "gooseberry",
                energy: 40.0,
                protein: 0.6,
                fat: 0.2,
                carbohydrate: 8.0,
                imageUrl: "https://gyogyszernelkul.com/wp-content/uploads/2016/06/a-fanyar-es-fenseges-izu-egres.jpg"
            },
            {
                id: 45,
                name: "strawberry",
                energy: 39.0,
                protein: 0.9,
                fat: 0.4,
                carbohydrate: 7.2,
                imageUrl: "https://dietless.hu/media/2013/05/eper_01.jpg"
            },
            {
                id: 46,
                name: "blueberry",
                energy: 90.0,
                protein: 0.6,
                fat: 0.6,
                carbohydrate: 19.6,
                imageUrl: "https://nepgyogyaszat.com/wp-content/uploads/2007/04/fekete_afonya_1200_630-1024x538.jpg"
            },
            {
                id: 47,
                name: "blackcurrant",
                energy: 49.0,
                protein: 0.9,
                fat: 0.2,
                carbohydrate: 9.5,
                imageUrl: "https://egeszsegter.hu/images/blog_pic/14030429181306.jpg"
            },
            {
                id: 48,
                name: "watermelon",
                energy: 31.0,
                protein: 0.5,
                fat: 0.2,
                carbohydrate: 6.5,
                imageUrl: "https://www.agrarszektor.hu/images/titlelap/G/gorogdinnye768-20170608.jpg"
            },
            {
                id: 49,
                name: "pomegranate",
                energy: 77.0,
                protein: 0.7,
                fat: 0.6,
                carbohydrate: 16.7,
                imageUrl: "https://granatalma.hu/uploads/domains/36/pikcs_1.jpg"
            },
            {
                id: 50,
                name: "grapefruit",
                energy: 36.0,
                protein: 0.5,
                fat: 0.2,
                carbohydrate: 7.2,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/FebktkpTURBXy84MDk4MWIwYjdkYTNmZjg5NWFhYWY0MmEzMTM2NGYwZS5qcGeSlQMAH80D6M0CMpUCzQNSAMLD"
            },
            {
                id: 51,
                name: "pear",
                energy: 53.0,
                protein: 0.4,
                fat: 0.3,
                carbohydrate: 12.0,
                imageUrl: "https://www.agroinform.hu/data/cikk/4/7294/cikk_47294/korte4.jpg"
            },
            {
                id: 52,
                name: "raspberry",
                energy: 35.0,
                protein: 1.2,
                fat: 0.3,
                carbohydrate: 5.4,
                imageUrl: "https://www.agrarszektor.hu/images/hirek/image1624356032-0.jpg"
            },
            {
                id: 53,
                name: "mandarin",
                energy: 47.0,
                protein: 0.7,
                fat: 0.3,
                carbohydrate: 9.8,
                imageUrl: "https://www.edenkert.hu/upload/2/article/4446/mandarin_gyogyhatasa.jpg"
            },
            {
                id: 54,
                name: "mango",
                energy: 73.0,
                protein: 0.5,
                fat: 0.3,
                carbohydrate: 17.0,
                imageUrl: "https://tesco.hu/img/content_platform_hu/sized/757x426-72-ffffff/mango.jpg"
            },
            {
                id: 55,
                name: "sour cherry",
                energy: 56.0,
                protein: 0.8,
                fat: 0.5,
                carbohydrate: 11.0,
                imageUrl: "https://www.mindmegette.hu/images/195/O/meggy.jpg"
            },
            {
                id: 56,
                name: "orange",
                energy: 41.0,
                protein: 0.6,
                fat: 0.2,
                carbohydrate: 8.5,
                imageUrl: "https://nepgyogyaszat.com/wp-content/uploads/2010/04/narancs_1200_630.jpg"
            },
            {
                id: 57,
                name: "nektarin",
                energy: 55.0,
                protein: 0.9,
                fat: 0.5,
                carbohydrate: 11.8,
                imageUrl: "https://oszibarackinfo.hu/wp-content/uploads/2020/05/nektarin_fa.jpg"
            },
            {
                id: 58,
                name: "peach",
                energy: 41.0,
                protein: 0.7,
                fat: 0.1,
                carbohydrate: 9.0,
                imageUrl: "http://www.termalfurdo.hu/images/cikk/5864/termalfurdo_oszibarack_1.jpg"
            },
            {
                id: 59,
                name: "papaya",
                energy: 43.0,
                protein: 0.6,
                fat: 0.1,
                carbohydrate: 9.8,
                imageUrl: "https://integrativ-medicina.hu/wp-content/uploads/2021/06/papaya-1200x628-facebook-1200x628_optimized.jpg"
            },
            {
                id: 60,
                name: "redcurrant",
                energy: 38.0,
                protein: 0.6,
                fat: 0.2,
                carbohydrate: 7.0,
                imageUrl: "https://www.megyeriszabolcskerteszete.hu/custom/megyeri/image/cache/w0h0q80np1/ckeditor/ribizli-termes.jpg"
            },
            {
                id: 61,
                name: "apricot",
                energy: 49.0,
                protein: 0.9,
                fat: 0.1,
                carbohydrate: 10.2,
                imageUrl: "https://image-api.hazipatika.com/hazipatika/images/articles/Vu/Ls/A9jiU42FSWOidRjUnvdAxog46GIfbYzQ6s97wDDU.jpg?w=1200&h=630&s=223ee6d8996114554b016b6f91881fc4"
            },
            {
                id: 62,
                name: "melon",
                energy: 40.0,
                protein: 0.3,
                fat: 0.1,
                carbohydrate: 9.5,
                imageUrl: "http://kep.index.hu/1/0/1726/17265/172657/17265745_748722a40247fa6fd00d71f25c6f2f3e_wm.jpg"
            },
            {
                id: 63,
                name: "blackberry",
                energy: 39.0,
                protein: 0.8,
                fat: 1.0,
                carbohydrate: 6.0,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Cultivated_Blackberry%2C_Rubus_fruticosus_-_geograph.org.uk_-_1426305.jpg"
            },
            {
                id: 64,
                name:"plum",
                energy:47.0,
                protein:0.8,
                fat:0.0,
                carbohydrate:10.2,
                imageUrl: "http://gyogyitoangyalenergy.hu/wp-content/uploads/2019/11/szilva.jpg"
            },
            {
                id: 65,
                name:"grape",
                energy:81.0,
                protein:0.6,
                fat:0.3,
                carbohydrate:18.1,
                imageUrl: "https://ceumedika.hu/wp-content/uploads/2020/10/1-3.jpg"
            },
            {
                id: 85,
                name: "kiwi",
                energy: 61.0,
                protein: 1.0,
                fat: 0.6,
                carbohydrate: 11.3,
                imageUrl: "https://image-api.hazipatika.com/hazipatika/images/articles/Vq/pB/zGfCgZA13FvcNiGfLXD8wCES8ZiOSrQD91cUZOOt.jpg?w=1200&h=630&s=d61792cd89690739f1316542d80a03ac"
            }
        ]
    },
    dairys : {
        id: 3,
        title: "Dairy",
        routeName: "dairys",
        allProducts: [
            {
                id: 66,
                name: "yogurt 0%",
                energy: 34.0,
                protein: 3.4,
                fat: 0.1,
                carbohydrate: 4.6,
                imageUrl: "https://italhazhozszallitas.cdn.shoprenter.hu/custom/italhazhozszallitas/image/data/mizojoghurt.jpg?lastmod=1638522773.1588764831"
            },
            {
                id: 67,
                name:"anikó cheese",
                energy:340.0,
                protein:24.2,
                fat:26.0,
                carbohydrate:1.8,
                imageUrl: "https://mizo.hu/files/95/9a/959a2ec61a464f34e8349d12d837d1b0.png"
            },
            {  
                id: 68,
                name: "bakony camembert cheese",
                energy: 300.0,
                protein: 21.5,
                fat: 23.0,
                carbohydrate: 1.5,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Camembert.jpg"
            },
            {
                id: 69,
                name: "camping creamcheese",
                energy: 312.0,
                protein: 16.5,
                fat: 26.4,
                carbohydrate: 1.7,
                imageUrl: "https://campingsajt.hu/wp-content/uploads/2018/07/allProducts_All-1.png"
            },
            {
                id: 70,
                name: "chester cheddar cheese",
                energy: 377.0,
                protein: 26.8,
                fat: 29.1,
                carbohydrate: 1.5,
                imageUrl: "https://static.groby.hu/media/80e/37e/conv/Paladin-v%C3%B6r%C3%B6s-cheddar-full.png"
            },
            {
                id: 71,
                name: "sugarfree fruityogurt",
                energy: 60.0,
                protein: 2.9,
                fat: 3.0,
                carbohydrate: 5.1,
                imageUrl: "https://m.blog.hu/ma/maradokapenzemnel/image/img_3371.jpg"
            },
            {
                id: 72,
                name: "whipped cream",
                energy: 289.0,
                protein: 2.3,
                fat: 26.0,
                carbohydrate: 11.0,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/articles/Ue/qE/x19KCRhCiaKCZnmqTBJXFQVnBUi8PkfENgqOgQsR.jpeg?w=640&h=480&fit=crop&s=33c9369cfd9e33fb5253e76df763497d"
            },
            {
                id: 73,
                name: "edam cheese",
                energy: 353.0,
                protein: 26.2,
                fat: 26.6,
                carbohydrate: 1.7,
                imageUrl: "https://m.blog.hu/ma/maradokapenzemnel/image/.external/.thumbs/3ef152d5881b71c5f890ec2edce88bbe_d49afe6e3b4eb7cadfe308837303ec67.jpg"
            },
            {
                id: 74,
                name: "emmental cheese",
                energy: 384.0,
                protein: 27.8,
                fat: 29.4,
                carbohydrate: 1.5,
                imageUrl: "https://dietmaker.hu/wp-content/uploads/ementali-sajt-kaloria.jpg"
            },
            {
                id: 75,
                name: "semi-fat cow's curd",
                energy: 143.0,
                protein: 16.2,
                fat: 7.0,
                carbohydrate: 3.7,
                imageUrl: "https://izeselet.hu/wp-content/uploads/2014/04/teh%C3%A9nt%C3%BAr%C3%B3.jpg"
            },
            {
                id: 76,
                name: "feta cheese",
                energy: 266.0,
                protein: 14.2,
                fat: 21.3,
                carbohydrate: 4.1,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/SG/gN/abziOPLjmi396KrgOC8nSdMAQIMH71AhJPMtZIKL.jpeg?fit=crop&w=600&h=315&s=c51ca30019ab8866e0057c620f2eb664"
            },
            {
                id: 77,
                name: "göcseji cheese",
                energy: 306.0,
                protein: 22.2,
                fat: 23.3,
                carbohydrate: 1.4,
                imageUrl: "https://finomreceptek.hu/files/images/sajt/sajt.jpg"
            },
            {
                id: 78,
                name: "gouda cheese",
                energy: 357.0,
                protein: 24.9,
                fat: 27.4,
                carbohydrate: 2.2,
                imageUrl: "https://www.mindmegette.hu/images/193/L/lead_L_crop_201706081142_sajttok.jpg"
            },
            {
                id: 79,
                name: "fruityogurt",
                energy: 83.0,
                protein: 2.8,
                fat: 2.9,
                carbohydrate: 11.2,
                imageUrl: "https://utolsofogyokura.hu/wp-content/uploads/2021/04/cukormentes-gyumolcsjoghurt-508x321.jpg"
            },
            {
                id: 80,
                name: "flavored spreadable cheese",
                energy: 284.0,
                protein: 15.5,
                fat: 23.7,
                carbohydrate: 1.9,
                imageUrl: "https://veganblog.hu/wp-content/uploads/2019/10/csicseriborso%CC%81lisztbo%CC%8Bl-cheddar-kenheto%CC%8B-sajt-recept-vega%CC%81nblog.jpg"
            },
            {
                id: 81,
                name: "sheep's milk",
                energy: 274.0,
                protein: 14.7,
                fat: 22.5,
                carbohydrate: 2.8,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/Lz/Oj/341zcSmW7fqWylk4jZIs7XvmJizL1ARmxEsDStAy.jpeg?fit=crop&w=600&h=315&s=26ebb4655842fa300769d23658467849"
            },
            {
                id: 82,
                name: "chocolate milk",
                energy: 64.0,
                protein: 3.5,
                fat: 0.5,
                carbohydrate: 11.4,
                imageUrl: "http://kep.cdn.index.hu/1/0/704/7042/70424/7042439_6bdb8bb81b8d7782238b6c0a012ec960_wm.jpg"
            },
            {
                id: 83,
                name: "goat cheese",
                energy: 367.0,
                protein: 21.6,
                fat: 29.8,
                carbohydrate: 2.5,
                imageUrl: "https://twice.b-cdn.net/wp-content/uploads/2020/07/kecskesajt.jpg"
            },
            {
                id: 84,
                name: "kefir",
                energy: 65.0,
                protein: 3.4,
                fat: 3.6,
                carbohydrate: 4.6,
                imageUrl: "https://cdn.hellovidek.hu/images/site/articles/lead/2021/08/1630399622-odC82fJlE_md.jpg"
            },
            {
                id: 86,
                name: "margarine 70% fat",
                energy: 635.0,
                protein: 0.2,
                fat: 70.0,
                carbohydrate: 0.4,
                imageUrl: "https://www.mindmegette.hu/images/287/L/lead_L_crop_202004171205_shutterstock_203493112.jpg"
            },
            {
                id: 87,
                name: "marble cheese",
                energy: 357.0,
                protein: 20.0,
                fat: 29.7,
                carbohydrate: 2.0,
                imageUrl: "https://www.tropibolt.hu/img/90638/KU005/585x585,r/KU005.jpg?time=1651471396"
            },
            {
                id: 88,
                name: "parmesan cheese",
                energy: 375.0,
                protein: 26.8,
                fat: 28.9,
                carbohydrate: 1.6,
                imageUrl: "https://www.interfood.hu/wp-content/uploads/2019/03/a-parmezan-nyomaban.jpg"
            },
            {
                id: 89,
                name: "milk 1.5%",
                energy: 49.0,
                protein: 3.4,
                fat: 1.5,
                carbohydrate: 5.3,
                imageUrl: "http://sporttaplalkozas.tf.hu/img/tudasbazis/tej_a_sporttaplalkozasban_i/tej.png"
            },
            {
                id: 90,
                name: "milk 2.8%",
                energy: 60.0,
                protein: 3.4,
                fat: 2.8,
                carbohydrate: 5.3,
                imageUrl: "http://sporttaplalkozas.tf.hu/img/tudasbazis/tej_a_sporttaplalkozasban_i/tej.png"
            },
            {
                id: 91,
                name: "sour cream 20%",
                energy: 209.0,
                protein: 3.3,
                fat: 20.0,
                carbohydrate: 3.8,
                imageUrl: "https://www.napi.hu/fototar/fototar/202002/orig/image1582034245.jpg/800/?v=2022030101"
            },
            {
                id: 92,
                name: "tofu",
                energy: 73.0,
                protein: 8.1,
                fat: 4.2,
                carbohydrate: 0.6,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/articles/HC/Ie/4uCQBzpFrD222Of5KwMHcp629Q1EdlQlTWXUJh9V.jpeg?w=640&h=640&fit=crop&s=b44b19c2a291bf53c904af395fbc41f5"
            },
            {
                id: 93,
                name: "trappist cheese",
                energy: 372.0,
                protein: 27.7,
                fat: 28.1,
                carbohydrate: 1.6,
                imageUrl: "https://www.interfood.hu/wp-content/uploads/2022/03/A-sokat-vitatott-trappista-sajt.jpg"
            },
            {
                id: 94,
                name: "greasy diced cheese",
                energy: 301.0,
                protein: 16.7,
                fat: 25.0,
                carbohydrate: 2.0,
                imageUrl: "https://cdn.nwmgroups.hu/s/img/i/1301/20130110-kockasajt-omlesztett-sajt.jpg"
            }
        ]
    },
    meats: {
        id: 4,
        title: "Meats",
        routeName: "meats",
        allProducts: [
            {
                id: 95,
                name: "english bacon",
                energy: 488.0,
                protein: 16.8,
                fat: 46.5,
                carbohydrate: 0.0,
                imageUrl: "https://darno-hus.hu/wp-content/uploads/2017/12/68.jpg"
            },
            {
                id: 96,
                name: "poultry",
                energy: 211.0,
                protein: 14.7,
                fat: 15.6,
                carbohydrate: 2.7,
                imageUrl: "https://www.baromfiudvar.hu/images/products/130/kedvenc-izek-baromfi-parizsi-1800g_20190903115428.png"
            },
            {
                id: 97,
                name: "poultry frankfurter",
                energy: 211.0,
                protein: 14.7,
                fat: 15.6,
                carbohydrate: 2.7,
                imageUrl: "https://cdn.penzcentrum.hu/upload/titlelapimg/V/virsli-20201202.jpg"
            },
            {
                id: 98,
                name: "loin",
                energy: 119.0,
                protein: 19.0,
                fat: 4.4,
                carbohydrate: 0.6,
                imageUrl: "https://rantotthuswokban.bmintbalazs.com/wp-content/uploads/belszin-egyben-sutve-szeletelve-820x615.jpg"
            },
            {
                id: 99,
                name: "sheep meat",
                energy: 308.0,
                protein: 16.9,
                fat: 26.4,
                carbohydrate: 0.3,
                imageUrl: "https://dietmaker.hu/wp-content/uploads/birkahus-kaloria.jpg"
            },
            {
                id: 100,
                name: "calf meat",
                energy: 120.0,
                protein: 19.5,
                fat: 4.5,
                carbohydrate: 0.3,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/AN/e2/1ozYUGzrvsYJgRoYU4XghVqWAk531rbmCbUV7PTZ.jpeg?fit=crop&w=600&h=315&s=924c476271421ea816d070108d5a2761"
            },
            {
                id: 101,
                name: "csabai spicy sausage",
                energy: 460.0,
                protein: 19.8,
                fat: 41.9,
                carbohydrate: 0.3,
                imageUrl: "https://www.agraroldal.hu/nmimg/730x400/upload/newsimages/uECPxUlGxYgkFdys.jpg"
            },
            {
                id: 102,
                name: "emperor bacon",
                energy: 447.0,
                protein: 10.0,
                fat: 45.0,
                carbohydrate: 0.0,
                imageUrl: "https://darno-hus.hu/wp-content/uploads/2017/12/70.jpg"
            },
            {
                id: 103,
                name: "chicken legs",
                energy: 133.0,
                protein: 20.9,
                fat: 5.2,
                carbohydrate: 0.5,
                imageUrl: "https://www.mindmegette.hu/images/201/O/crop_201709081019_26124_pacolt-sult-csirkecomb_n-201510170610.jpg"
            },
            {
                id: 104,
                name: "chicken breast",
                energy: 110.0,
                protein: 24.7,
                fat: 1.0,
                carbohydrate: 0.5,
                imageUrl: "https://csirkemell-receptek.hu/wp-content/uploads/2020/10/fokhagymas_tejfolos_bundaban_sult_csirkemell.jpg"
            },
            {
                id: 105,
                name: "chicken ham",
                energy: 130.0,
                protein: 22.2,
                fat: 1.4,
                carbohydrate: 7.0,
                imageUrl: "https://3.bp.blogspot.com/-jVk7L7OIuGE/VsrXn-Z90VI/AAAAAAAALFQ/tTfQ9ohBnaY/s1600/sonka.jpg"
            },
            {
                id: 106,
                name: "trotters",
                energy: 328.0,
                protein: 16.0,
                fat: 29.0,
                carbohydrate: 0.3,
                imageUrl: "https://www.mindmegette.hu/images/305/O/lead_l_crop_201911111231_shutterstock_478295617.jpg"
            },
            {
                id: 107,
                name: "pork cheese",
                energy: 315.0,
                protein: 14.5,
                fat: 28.3,
                carbohydrate: 0.2,
                imageUrl: "https://kiskosarbolt.hu/image/cache/data/Manufacturers/HeringCsaba/Hering_disznosajt-500x375w.jpg"
            },
            {
                id: 108,
                name: "pheasant cheese",
                energy: 109.0,
                protein: 22.3,
                fat: 1.9,
                carbohydrate: 0.5,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/Vm/Hm/facanmell-parmezannal-sonkaval-toltve.jpeg?w=640&h=360&fit=crop&s=4d459467e37c1675aa590e066a63f44b"
            },
            {
                id: 109,
                name: "cooking sausages",
                energy: 394.0,
                protein: 17.8,
                fat: 35.5,
                carbohydrate: 0.3,
                imageUrl: "https://darno-hus.hu/wp-content/uploads/2017/12/50.jpg"
            },
            {
                id: 110,
                name: "smoked boiled ribs",
                energy: 197.0,
                protein: 15.0,
                fat: 15.0,
                carbohydrate: 0.3,
                imageUrl: "https://darno-hus.hu/wp-content/uploads/2017/12/58.jpg"
            },
            {
                id: 111,
                name: "smoked pig ham",
                energy: 368.0,
                protein: 17.2,
                fat: 33.0,
                carbohydrate: 0.1,
                imageUrl: "https://m.kaloriabazis.hu/p/9/8/5/1020985_sertes_sonka_felvagott_big.jpg"
            },
            {
                id: 112,
                name: "rabbit meat",
                energy: 158.0,
                protein: 21.0,
                fat: 8.0,
                carbohydrate: 0.4,
                imageUrl: "https://proaktivdirekt.com/adaptive/article_md/upload/images/magazine/nyulpecsenye.jpg"
            },
            {
                id: 113,
                name: "duck meat",
                energy: 186.0,
                protein: 19.0,
                fat: 12.0,
                carbohydrate: 0.4,
                imageUrl: "https://butcher.hu/image/cache/catalog/kacsah%C3%BAs-600x315w.jpg"
            },
            {
                id: 114,
                name: "medium fat beef",
                energy: 205.0,
                protein: 19.0,
                fat: 14.0,
                carbohydrate: 0.6,
                imageUrl: "https://cleaneating.hu/wp-content/uploads/image/cikkkepek/marhahus1.jpg"
            },
            {
                id: 115,
                name: "medium fat pig meat",
                energy: 288.0,
                protein: 17.5,
                fat: 23.9,
                carbohydrate: 0.3,
                imageUrl: "https://kuffer.hu/wp-content/uploads/2017/10/serteshus-veszelyei.jpg"
            },
            {
                id: 116,
                name: "crinoline",
                energy: 213.0,
                protein: 11.9,
                fat: 18.2,
                carbohydrate: 0.2,
                imageUrl: "https://huskeszitmenyekestarsai.cdn.shoprenter.hu/custom/huskeszitmenyekestarsai/image/data/product/Termek_kepek/Bognar_Hus/10505-meteres-krinolin-vg-kb15-kg-bognar-hus-1479.jpg?lastmod=1651401335.1630571835"
            },
            {
                id: 117,
                name: "goose liver",
                energy: 130.0,
                protein: 16.4,
                fat: 4.3,
                carbohydrate: 6.3,
                imageUrl: "https://www.mindmegette.hu/images/171/O/crop_201611081506_libamajpastetom.jpg"
            },
            {
                id: 118,
                name: "lentils",
                energy: 262.0,
                protein: 13.8,
                fat: 22.0,
                carbohydrate: 2.0,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/PF/Ps/0h57g7jBBtKuwIWRjIenaWLsOyJZ4ZKlQk887VcT.jpeg?fit=crop&w=600&h=315&s=9752a755315507709cd447356207968c"
            },
            {
                id: 119,
                name: "liverwurst",
                energy: 202.0,
                protein: 14.6,
                fat: 11.4,
                carbohydrate: 10.1,
                imageUrl: "https://2.bp.blogspot.com/_5O-jypyl64M/S2cUtQ8rZsI/AAAAAAAADWc/d0s26VXzfXA/w1200-h630-p-k-no-nu/m%C3%A1jas.jpg"
            },
            {
                id: 120,
                name: "beef up",
                energy: 243.0,
                protein: 17.0,
                fat: 19.0,
                carbohydrate: 0.6,
                imageUrl: "https://butcher.hu/image/cache/catalog/termek%20kepek/Hus_es_hal/Marha/Marha_felsal-1058x1058.jpg"
            },
            {
                id: 121,
                name: "italian cold cuts",
                energy: 335.0,
                protein: 13.7,
                fat: 30.8,
                carbohydrate: 0.3,
                imageUrl: "https://www.wiesbauer-dunahus.hu/wp-content/uploads/2019/07/soproni_felvagott_talalas2_prt-500x383.jpg"
            },
            {
                id: 122,
                name: "side",
                energy: 429.0,
                protein: 12.0,
                fat: 42.0,
                carbohydrate: 0.3,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/tn/4I/sult-oldalas-ahogy-nagyanyaink-keszitettek.jpeg?w=640&h=480&fit=crop&s=f7da6c16dcab3817233118cbe5a8d09a"
            },
            {
                id: 123,
                name: "roe meat",
                energy: 102.0,
                protein: 20.8,
                fat: 1.9,
                carbohydrate: 0.4,
                imageUrl: "http://lorien.blog.hu/media/image/ozsultrokagm/ozmind.jpg"
            },
            {
                id: 124,
                name: "pepper salami",
                energy: 494.0,
                protein: 19.6,
                fat: 45.8,
                carbohydrate: 0.3,
                imageUrl: "https://mikonyhank.cdn.shoprenter.hu/custom/mikonyhank/image/cache/w600h600wt1/2022/szalamikonyhakkk.jpg?lastmod=1650366215.1649276993"
            },
            {
                id: 125,
                name: "turkey legs",
                energy: 115.0,
                protein: 20.5,
                fat: 3.6,
                carbohydrate: 0.0,
                imageUrl: "https://www.mindmegette.hu/images/11/O/19114_tuzdeltpulykacomb_n-201510170431.jpg"
            },
            {
                id: 126,
                name: "turkey breast",
                energy: 106.0,
                protein: 24.1,
                fat: 1.0,
                carbohydrate: 0.0,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/sB/Uy/egyszeru-pulykamell.jpeg?w=640&h=640&fit=crop&s=8591a25a32e5cde93d500e5d5ee3b209"
            },
            {
                id: 127,
                name: "turkey ham",
                energy: 111.0,
                protein: 17.0,
                fat: 2.8,
                carbohydrate: 4.2,
                imageUrl: "https://dietmaker.hu/wp-content/uploads/pulykasona-kaloria.jpg"
            },
            {
                id: 128,
                name: "pig frankfurter",
                energy: 232.0,
                protein: 12.5,
                fat: 20.0,
                carbohydrate: 0.2,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/uqqktkqTURBXy85ZGEwNDRjMzFiYzllOThkNjkyM2M2YWU3MmRlMmRiNi5qcGVnkZUCzQLoAMLD"
            },
            {
                id: 129,
                name: "pig tripe",
                energy: 165.0,
                protein: 15.9,
                fat: 11.2,
                carbohydrate: 0.0,
                imageUrl: "https://www.mindmegette.hu/images/26/O/34583_velos-pacal-bogracsban_n-201510170817.jpg"
            },
            {
                id: 130,
                name: "lean lamb",
                energy: 195.0,
                protein: 19.7,
                fat: 12.7,
                carbohydrate: 0.3,
                imageUrl: "https://i.pinimg.com/474x/a1/50/17/a15017da60da84f1a4b43ea8cb17fc4c.jpg"
            },
            {
                id: 131,
                name: "deer meat",
                energy: 121.0,
                protein: 20.7,
                fat: 3.9,
                carbohydrate: 0.6,
                imageUrl: "https://csodacsont.hu/wp-content/uploads/2020/11/dara%CC%81lt-szarvashu%CC%81s-livis-green.jpg"
            },
            {
                id: 132,
                name: "spring cold cuts",
                energy: 183.0,
                protein: 10.3,
                fat: 14.6,
                carbohydrate: 2.4,
                imageUrl: "https://m.blog.hu/ve/vegalife/image/szejtan/tavaszi_felvagott.jpg"
            },
            {
                id: 133,
                name: "winter salami",
                energy: 519.0,
                protein: 25.1,
                fat: 46.1,
                carbohydrate: 0.3,
                imageUrl: "https://gulyashus.hu/img/97930/2020KTSZ/2020KTSZ.jpg"
            },
            {
                id: 134,
                name: "hen meat",
                energy: 137.0,
                protein: 19.0,
                fat: 6.5,
                carbohydrate: 0.4,
                imageUrl: "https://m.blog.hu/ke/kepeslinkek/image/.external/.thumbs/e185ed7e7c41e9dca9b93d0030e10289_d49afe6e3b4eb7cadfe308837303ec67.jpg"
            },
            {
                id: 135,
                name: "zala cold cuts",
                energy: 245.0,
                protein: 15.6,
                fat: 19.9,
                carbohydrate: 0.6,
                imageUrl: "https://kurucz.eu/_projects/kurucz/uploads/product/3262/5fc3dadc9cb49-1-zala-felvagott-500-g.jpg"
            }
        ]
    },
    fishes: {
        id: 5,
        title: "Fishes",
        routeName: "fishes",
        allProducts: [
            {
                id: 136,
                name: "eel",
                energy: 282.0,
                protein: 15.0,
                fat: 24.5,
                carbohydrate: 0.0,
                imageUrl: "https://s.24.hu/app/uploads/2021/08/angolna-2-e1627911724841-660x371.jpg"
            },
            {
                id: 137,
                name: "busa",
                energy: 92.0,
                protein: 18.0,
                fat: 1.9,
                carbohydrate: 0.6,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tolstolobec_pestr%C3%BD.jpg/1200px-Tolstolobec_pestr%C3%BD.jpg"
            },
            {
                id: 138,
                name: "pike",
                energy: 82.0,
                protein: 18.4,
                fat: 0.9,
                carbohydrate: 0.0,
                imageUrl: "http://lakberendezes.hu/wp-content/uploads/2016/12/CSUKA-LOG%C3%93-e1480872679285.jpg"
            },
            {
                id: 139,
                name: "pike perch",
                energy: 84.0,
                protein: 19.0,
                fat: 0.8,
                carbohydrate: 0.2,
                imageUrl: "https://i1.wp.com/www.izorzok.hu/wp-content/uploads/2020/01/4.balatoni-fogass%C3%BCll%C5%91-min.jpg?ssl=1"
            },
            {
                id: 140,
                name: "catfish",
                energy: 82.0,
                protein: 15.8,
                fat: 2.0,
                carbohydrate: 0.2,
                imageUrl: "https://m.blog.hu/mt/mttmuzeum/image/k%C3%A9t%C3%A9lt%C5%B1%20%C3%A9s%20h%C3%BCll%C5%91k%20gy%C5%B1jtem%C3%A9nye/2017/szoke_viktoria/ev_hala_harcsa/2_harcsaportre.jpg"
            },
            {
                id: 141,
                name: "bream",
                energy: 117.0,
                protein: 16.6,
                fat: 5.5,
                carbohydrate: 0.2,
                imageUrl: "https://tesco.hu/imgglobal/content_platform/recipes/main/42/sized/756x426-100-fff-700-0/4266cc59a909e75d45d01c0964cb6db1.jpg"
            },
            {
                id : 142,
                name: "salmon",
                energy: 208.0,
                protein: 20.0,
                fat: 14.0,
                carbohydrate: 0.2,
                imageUrl: "https://www.mindmegette.hu/images/25/O/32792_lazac-joghurtos-ontettel_n-201510170747.jpg"
            },
            {
                id: 143,
                name: "mackerel",
                energy: 183.0,
                protein: 18.7,
                fat: 11.9,
                carbohydrate: 0.0,
                imageUrl: "https://www.mindmegette.hu/images/22/O/29810_makrela_n-201510170703.jpg"
            },
            {
                id: 144,
                name: "oily sardines",
                energy: 284.0,
                protein: 22.5,
                fat: 21.4,
                carbohydrate: 0.0,
                imageUrl: "https://cdn.pixabay.com/photo/2022/01/15/17/01/fish-6940149_960_720.jpg"
            },
            {
                id: 145,
                name: "oily tuna",
                energy: 290.0,
                protein: 23.8,
                fat: 21.5,
                carbohydrate: 0.0,
                imageUrl: "https://oceanfood.hu/wp-content/uploads/2019/11/tonhal_steak.jpg"
            },
            {
                id: 146,
                name: "pickled herring",
                energy: 144.0,
                protein: 11.1,
                fat: 11.0,
                carbohydrate: 0.0,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGX_ZqfmXIROshFrXH9nOzFima-Te6fv-3A&usqp=CAU"
            },
            {
                id: 147,
                name: "trout",
                energy: 113.0,
                protein: 21.5,
                fat: 2.9,
                carbohydrate: 0.0,
                imageUrl: "https://www.mindmegette.hu/images/157/O/crop_201607071557_pisztrang_bebiparaj.jpg"
            },
            {
                id: 148,
                name: "carp",
                energy: 143.0,
                protein: 15.8,
                fat: 8.7,
                carbohydrate: 0.1,
                imageUrl: "https://pecaverzum.hu/upload/articles/thumb_850x565_crop3_80/fekete.jpg"
            },
            {
                id: 150,
                name: "polyp",
                energy: 61.0,
                protein: 12.7,
                fat: 0.7,
                carbohydrate: 0.8,
                imageUrl: "https://oceanfood.hu/wp-content/uploads/2019/11/patagoniai_tintahal_tisztitott_.jpg"
            },
            {
                id: 151,
                name: "cod fillet",
                energy: 82.0,
                protein: 17.7,
                fat: 0.6,
                carbohydrate: 1.2,
                imageUrl: "https://www.mindmegette.hu/images/13/O/21255_tokehalfile_n-201510170501.jpg"
            },
            {
                id: 152,
                name: "tuna fillet",
                energy: 227.0,
                protein: 21.5,
                fat: 15.5,
                carbohydrate: 0.0,
                imageUrl: "https://oceanfood.hu/wp-content/uploads/2019/11/tonhal_steak.jpg"
            }
        ]
    },
    pasta : {
        id: 6,
        title: "Pasta",
        routeName: "pasta",
        allProducts: [
            {
                id: 153,
                name: "4 eggs dry pasta",
                energy: 384.0,
                protein: 15.0,
                fat: 3.4,
                carbohydrate: 72.9,
                imageUrl: "https://bulkshop.cdn.shoprenter.hu/custom/bulkshop/image/cache/w460h460wt1/termekfotok_new/Term%C3%A9kfot%C3%B3k_%C3%BAjak/spagetti2.jpg?lastmod=1653245047.1649233853"
            },
            {
                id: 154,
                name: "abonett",
                energy: 401.0,
                protein: 14.7,
                fat: 1.5,
                carbohydrate: 81.7,
                imageUrl: "https://www.mindmegette.hu/images/256/L/lead_L_crop_201906201556_abonett.jpg"
            },
            {
                id: 155,
                name: "bakonyi brown bread",
                energy: 245.0,
                protein: 8.5,
                fat: 0.8,
                carbohydrate: 50.6,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/BvdktkqTURBXy9hZmVkOTI2OWRhMzcyZGRiNmEyYzlmYzcwOTU5Y2VlYy5qcGVnkZUCzQOlAMLD"
            },
            {
                id: 156,
                name: "potato bread",
                energy: 259.0,
                protein: 10.8,
                fat: 1.7,
                carbohydrate: 49.7,
                imageUrl: "http://csaladireceptkonyv.hu/storage/images/recipes/12313.jpg"
            },
            {
                id: 157,
                name: "dabasi rye bread",
                energy: 257.0,
                protein: 10.1,
                fat: 1.8,
                carbohydrate: 49.9,
                imageUrl: "https://www.mokuslekvar.hu/wp-content/uploads/2014/09/IMG_4862.jpg"
            },
            {
                id: 158,
                name: "durum pasta",
                energy: 357.0,
                protein: 12.5,
                fat: 1.5,
                carbohydrate: 73.0,
                imageUrl: "https://dietmaker.hu/wp-content/uploads/durumteszta-kaloria.jpg"
            },
            {
                id: 159,
                name: "semi-brown bread",
                energy: 259.0,
                protein: 9.8,
                fat: 1.0,
                carbohydrate: 52.3,
                imageUrl: "https://offers.kd2.org/pics/9a/c8/9ac8d9088e6d769337ec380a6c2bdffe7eb78abd.jpg"
            },
            {
                id: 160,
                name: "semi-finished strudel",
                energy: 348.0,
                protein: 11.6,
                fat: 1.2,
                carbohydrate: 72.1,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/13/NL/xf5Cpg8BwokGUACWsqsrLqrivUqzCX8nKfrD0qsI.jpeg?fit=crop&w=600&h=315&s=b9072b25c2646a06cc736cd711e06a8a"
            },
            {
                id: 160,
                name: "graham bread",
                energy: 267.0,
                protein: 10.1,
                fat: 1.0,
                carbohydrate: 54.0,
                imageUrl: "https://jogasziget.hu/wp-content/uploads/2017/12/graham-keny%C3%A9r.jpg"
            },
            {
                id: 161,
                name: "hamburger buns",
                energy: 171.0,
                protein: 15.1,
                fat: 11.2,
                carbohydrate: 2.3,
                imageUrl: "https://img-global.cpcdn.com/recipes/f321d9548ea04e46/680x482cq70/hazi-hamburger-zsemle-es-huspogacsa-recept-foto.jpg"
            },
            {
                id: 162,
                name: "scone",
                energy: 403.0,
                protein: 11.8,
                fat: 10.5,
                carbohydrate: 64.9,
                imageUrl: "https://www.momwithfive.com/wp-content/uploads/2019/09/s%C3%B3s-kal%C3%A1cs.jpg"
            },
            {
                id: 163,
                name: "bread",
                energy: 251.0,
                protein: 10.0,
                fat: 0.8,
                carbohydrate: 53.5,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/N6/yD/ropogos-heju-feher-kenyer-ejszakai-kelesztessel.jpeg?w=640&h=640&fit=crop&s=334e2674037399d046887f95b7939073"
            },
            {
                id: 164,
                name: "bran buns",
                energy: 252.0,
                protein: 10.5,
                fat: 1.5,
                carbohydrate: 48.9,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/ff/rc/korpas-zsemle.jpeg?w=640&h=360&fit=crop&s=d4d2c1355146e9a752a3809c46c87b88"
            },
            {
                id: 166,
                name: "puffed wheat slices",
                energy: 340.0,
                protein: 13.9,
                fat: 2.6,
                carbohydrate: 64.8,
                imageUrl: "https://www.mindmegette.hu/images/125/L/lead_L_122971_puffasztott01-201510171439.jpg"
            },
            {
                id: 167,
                name: "rye bread",
                energy: 256.0,
                protein: 8.1,
                fat: 0.9,
                carbohydrate: 53.6,
                imageUrl: "https://gerepekseg.hu/wp-content/uploads/2019/01/bigstock-A-Composition-Of-Different-Bre-257729092-1000x668.jpg"
            },
            {
                id: 168,
                name: "buns, croissant",
                energy: 273.0,
                protein: 9.4,
                fat: 0.7,
                carbohydrate: 57.0,
                imageUrl: "http://csaladireceptkonyv.hu/storage/images/recipes/51925.jpg"
            }
        ]
    }
};

export default FOODS;