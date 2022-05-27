const TAPANYAGOK = {
    zoldsegek: {
        id: 1,
        cim: "Zöldségek",
        utvonal: "zoldsegek",
        termekek: [
            {
                id: 1,
                nev: 'articsóka',
                energia: 50.0,
                feherje: 2.4,
                zsir: 0.1,
                szenhidrat: 9.5,
                imageUrl: "https://image-api.hazipatika.com/hazipatika/images/articles/XJ/vx/4Md0OI3BJuFnx3UlqMxCcD1B6xF79MdHABSWlHvF.jpg?w=1200&h=630&s=f63fd011af3dc72c9dbd880f1af6a41d"
            },
            {
                id: 2,
                nev: "cékla",
                energia: 31.0,
                feherje: 1.3,
                zsir: 0.1,
                szenhidrat: 5.9,
                imageUrl: "https://www.mindmegette.hu/images/211/L/lead_L_crop_201801081318_126516_cekla.jpg"
            },
            {
                id: 3,
                nev: "cikória",
                energia: 16.0,
                feherje: 1.3,
                zsir: 0.2,
                szenhidrat: 2.3,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Witlof_en_wortel.jpg"
            },
            {
                id: 4,
                nev: "csemegekukorica",
                energia: 128.0,
                feherje: 4.7,
                zsir: 1.6,
                szenhidrat: 23.6,
                imageUrl: "https://www.agraroldal.hu/nmimg/730x400/upload/newsimages/wWOvdXUQhYAsYbIA.jpg"
            },
            {
                id: 5,
                nev: "csicseriborsó",
                energia: 307.0,
                feherje: 19.8,
                zsir: 3.4,
                szenhidrat: 48.8,
                imageUrl: "https://cleaneating.hu/wp-content/uploads/2018/02/csicseriborso-egeszseges.jpg"
            },
            {
                id: 6,
                nev: "csicsóka",
                energia: 31.0,
                feherje: 2.4,
                zsir: 0.4,
                szenhidrat: 4.0,
                imageUrl: "https://cleaneating.hu/wp-content/uploads/2018/07/csicsoka.jpg"
            },
            {
                id: 7,
                nev: "cukkini",
                energia: 31.0,
                feherje: 1.5,
                zsir: 0.4,
                szenhidrat: 5.3,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/W-aktkpTURBXy8zZDUwMzc4Yjk2MTEwOTRkOTc3ODMyMzcwZGQ2NWNmOC5qcGeSlQMAOM0D6M0CMpUCzQNSAMLD"
            },
            {
                id: 8,
                nev: "endivia saláta",
                energia: 13.0,
                feherje: 1.8,
                zsir: 0.2,
                szenhidrat: 0.9,
                imageUrl: "https://www.mindmegette.hu/images/104/O/115767_endivia05.jpg"
            },
            {
                id: 9,
                nev: "fejeskáposzta",
                energia: 32.0,
                feherje: 1.6,
                zsir: 0.2,
                szenhidrat: 5.7,
                imageUrl: "https://egeszsegter.hu/images/blog_pic/14288768737192.jpg"
            },
            {
                id: 10,
                nev: "fejessaláta",
                energia: 17.0,
                feherje: 1.4,
                zsir: 0.3,
                szenhidrat: 2.0,
                imageUrl: "https://egeszsegter.hu/images/blog_pic/14973910983590.jpg"
            },
            {
                id: 11,
                nev: "fejtettbab",
                energia: 164.0,
                feherje: 10.8,
                zsir: 0.4,
                szenhidrat: 29.0,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/IZ/so/nEmbXE0ocmMInou7235jeehiHe2xZ6Cv0x1i14Yg.jpeg?fit=crop&w=600&h=315&s=a2b4f3983b8a2144ccc56562113e65f7"
            },
            {
                id: 12,
                nev: "fekete retek",
                energia: 10.0,
                feherje: 1.1,
                zsir: 0.2,
                szenhidrat: 1.0,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/YLcktkqTURBXy9hOThhMjcyNDEwY2QwNzVhZWNmMTk5OWRjMmViNDVjYy5qcGVnkZUCzQOlAMLD"
            },
            {
                id: 13,
                nev: "fokhagyma",
                energia: 134.0,
                feherje: 6.8,
                zsir: 0.1,
                szenhidrat: 26.3,
                imageUrl: "http://mentalfitnessguru.hu/wp-content/uploads/2018/01/fokhagyma.jpg"
            },
            {
                id: 14,
                nev: "fűszerpaprika",
                energia: 342.0,
                feherje: 13.0,
                zsir: 4.0,
                szenhidrat: 63.0,
                imageUrl: "https://novenypatika.cdn.shoprenter.hu/custom/novenypatika/image/data/product/ZKIprofi/fuszerpaprika.jpg?lastmod=1647348925.1641060276"
            },
            {
                id: 15,
                nev: "karalábé",
                energia: 38.0,
                feherje: 2.1,
                zsir: 0.2,
                szenhidrat: 6.9,
                imageUrl: "https://www.vitalitas-magazin.hu/vitalitas-kepek/cikkek/fuveszkert/karalabe-0.png"
            },
            {
                id: 16,
                nev: "karfiol",
                energia: 29.0,
                feherje: 2.4,
                zsir: 0.4,
                szenhidrat: 3.9,
                imageUrl: "https://www.kifli.hu/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.kifli.hu/images/grocery/products/55286/55286-1603816951.jpg"
            },
            {
                id: 17,
                nev: "kelbimbó",
                energia: 50.0,
                feherje: 4.9,
                zsir: 0.6,
                szenhidrat: 6.1,
                imageUrl: "https://tudatosvasarlo.hu/wp-content/uploads/jez-timms-ia9z68YnJdY-unsplash-1.jpg"
            },
            {
                id: 18,
                nev: "kelkáposzta",
                energia: 34.0,
                feherje: 3.6,
                zsir: 0.3,
                szenhidrat: 4.3,
                imageUrl: "https://secure.ce-tescoassets.com/assets/HU/003/289003/ShotType1_540x540.jpg"
            },
            {
                id: 19,
                nev: "kígyóuborka",
                energia: 12.0,
                feherje: 1.0,
                zsir: 0.1,
                szenhidrat: 1.7,
                imageUrl: "https://www.syngenta.hu/sites/g/files/zhg316/f/480-480-vigorex-f1-kigyouborka.jpg"
            },
            {
                id: 20,
                nev: "padlizsán",
                energia: 26.0,
                feherje: 1.3,
                zsir: 0.2,
                szenhidrat: 4.8,
                imageUrl: "https://www.mindmegette.hu/images/198/O/crop_201707301403_padlizsan.jpg"
            },
            {
                id: 21,
                nev: "paradicsom",
                energia: 22.0,
                feherje: 1.0,
                zsir: 0.2,
                szenhidrat: 4.0,
                imageUrl: "https://zoldsegtermesztes.hu/wp-content/uploads/2020/10/paradicsom-1.jpg"
            },
            {
                id: 22,
                nev: "retek",
                energia: 15.0,
                feherje: 1.2,
                zsir: 0.1,
                szenhidrat: 2.2,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/XZlktkpTURBXy9jZTVmZmE4MzM1MDczNDY2NjlkYTVhMzMxZWRjZjRjZi5qcGeSlQMAHs0D6M0CMpUCzQNSAMLD"
            },
            {
                id: 23,
                nev: "sárgaborsó",
                energia: 314.0,
                feherje: 21.7,
                zsir: 1.5,
                szenhidrat: 53.1,
                imageUrl: "https://www.mindmegette.hu/images/109/O/121757_sargaborso08-201510171421.jpg"
            },
            {
                id: 24,
                nev: "sárgarépa",
                energia: 40.0,
                feherje: 1.2,
                zsir: 0.2,
                szenhidrat: 8.1,
                imageUrl: "https://sargarepainfo.hu/wp-content/uploads/2020/10/sargarepa.jpg"
            },
            {
                id: 25,
                nev: "sóska",
                energia: 27.0,
                feherje: 2.4,
                zsir: 0.5,
                szenhidrat: 2.3,
                imageUrl: "https://nyugdijban.sk/wp-content/uploads/2019/03/spinach_leaves_thinkstock.jpg"
            },
            {
                id: 26,
                nev: "spárga",
                energia: 16.0,
                feherje: 2.0,
                zsir: 0.1,
                szenhidrat: 1.8,
                imageUrl: "https://www.mindmegette.hu/images/107/O/119652_sparga01-201510171351.jpg"
            },
            {
                id: 27,
                nev: "spenót",
                energia: 19.0,
                feherje: 2.3,
                zsir: 0.3,
                szenhidrat: 1.8,
                imageUrl: "https://dietless.hu/media/2016/04/spenot-04.jpg"
            },
            {
                id: 28,
                nev:"uborka",
                energia:12.0,
                feherje:1.0,
                zsir:0.1,
                szenhidrat:1.7,
                imageUrl: "https://www.mindmegette.hu/images/105/O/117610_uborka05-201510171323.jpg"
            },
            {
                id: 29,
                nev:"vöröshagyma",
                energia:40.0,
                feherje:1.2,
                zsir:0.1,
                szenhidrat:8.3,
                imageUrl: "https://receptmegoszto.hu/keptar_hozzavalok/109.jpg"
            },
            {
                id: 30,
                nev:"zeller",
                energia:31.0,
                feherje:1.4,
                zsir:0.3,
                szenhidrat:5.0,
                imageUrl: "https://www.karpatinfo.net/sites/default/files/cimlapkep/2021/nov/zeller_2.jpg"
            },
            {
                id: 31,
                nev:"zöldbab",
                energia:41.0,
                feherje:2.6,
                zsir:0.3,
                szenhidrat:6.8,
                imageUrl: "https://receptmegoszto.hu/keptar_hozzavalok/152.jpg"
            },
            {
                id: 32,
                nev:"zöldpaprika",
                energia:20.0,
                feherje:1.2,
                zsir:0.3,
                szenhidrat:3.0,
                imageUrl: "http://www.magro.hu/agrarhirek/wp-content/uploads/2015/12/Manganji_green_pepper_by_yomi955.jpg"
            },
            {
                id: 33,
                nev:"brokkoli",
                energia:24.0,
                feherje:3.3,
                zsir:0.2,
                szenhidrat:2.1,
                imageUrl: "https://www.mindmegette.hu/images/106/O/118328_brokkoli01-201510171333.jpg"
            },
            {
                id: 34,
                nev: "burgonya",
                energia: 94.0,
                feherje: 2.5,
                zsir: 0.2,
                szenhidrat: 20.0,
                imageUrl: "https://tudatosvasarlo.hu/wp-content/uploads/ben-libby-Bt61phmxr-4-unsplash-1.jpg"
            }
        ]
    },
    gyumolcsok: {
        id: 2,
        cim: "Gyümölcsök",
        utvonal: "gyumolcsok",
        termekek: [
            {
                id: 35,
                nev: "alma",
                energia: 35.0,
                feherje: 0.4,
                zsir: 0.4,
                szenhidrat: 7.0,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/uwfktkpTURBXy80ZjhmYzAyYjljMmFhODFiYWIzYjNjMGU2NGQwOTBkNS5qcGeSlQMAH80D6M0CMpUCzQNSAMLD"
            },
            {
                id: 36,
                nev: "ananász",
                energia: 53.0,
                feherje: 0.4,
                zsir: 0.1,
                szenhidrat: 12.0,
                imageUrl: "https://mlmiskola.hu/wp-content/uploads/2019/06/innofit-gy%C3%BCm%C3%B6lcs-ananasz-mlmiskola.hu_.jpg"
            },
            {
                id: 37,
                nev: "avokádó",
                energia: 176.0,
                feherje: 2.0,
                zsir: 15.3,
                szenhidrat: 7.4,
                imageUrl: "https://vitalmagazin.hu/wp-content/uploads/2018/11/Avocado-1.jpg"
            },
            {
                id: 38,
                nev: "banán",
                energia: 105.0,
                feherje: 1.3,
                zsir: 0.1,
                szenhidrat: 24.2,
                imageUrl: "http://ocdn.eu/images/pulscms/MTA7MDA_/83f320adda68a5bef92da54e5917bdaf.jpg"
            },
            {
                id: 39,
                nev: "besztercei szilva",
                energia: 60.0,
                feherje: 0.7,
                zsir: 0.2,
                szenhidrat: 13.1,
                imageUrl: "https://www.cityfood.hu/wp-content/uploads/2021/08/szilva.jpg"
            },
            {
                id: 40,
                nev: "birsalma",
                energia: 49.0,
                feherje: 0.6,
                zsir: 0.9,
                szenhidrat: 9.1,
                imageUrl: "https://birsalmasajt.hu/wp-content/uploads/2019/07/Birs-birsalma-birsk%C3%B6rte-zs%C3%A1kban.jpg"
            },
            {
                id: 41,
                nev: "citrom",
                energia: 31.0,
                feherje: 0.4,
                zsir: 0.6,
                szenhidrat: 2.3,
                imageUrl: "https://static.manna.global/img/cms/hu/980/5978-ezeroldalu-csodaszer-a-citrom-133005.jpg"
            },
            {
                id: 42,
                nev: "cukordinnye",
                energia: 47.0,
                feherje: 0.3,
                zsir: 0.1,
                szenhidrat: 11.1,
                imageUrl: "https://hobbikert.hu/images/magazin/sargadinnye01.jpg"
            },
            {
                id: 43,
                nev: "datolya",
                energia: 282.0,
                feherje: 1.9,
                zsir: 0.5,
                szenhidrat: 66.3,
                imageUrl: "https://kep.index.hu/1/0/1932/19324/193240/19324070_1206132_f14239e7eee26189c3575db1c22715ca_wm.jpg"
            },
            {
                id: 44,
                nev: "egres",
                energia: 40.0,
                feherje: 0.6,
                zsir: 0.2,
                szenhidrat: 8.0,
                imageUrl: "https://gyogyszernelkul.com/wp-content/uploads/2016/06/a-fanyar-es-fenseges-izu-egres.jpg"
            },
            {
                id: 45,
                nev: "eper",
                energia: 39.0,
                feherje: 0.9,
                zsir: 0.4,
                szenhidrat: 7.2,
                imageUrl: "https://dietless.hu/media/2013/05/eper_01.jpg"
            },
            {
                id: 46,
                nev: "fekete áfonya",
                energia: 90.0,
                feherje: 0.6,
                zsir: 0.6,
                szenhidrat: 19.6,
                imageUrl: "https://nepgyogyaszat.com/wp-content/uploads/2007/04/fekete_afonya_1200_630-1024x538.jpg"
            },
            {
                id: 47,
                nev: "fekete ribizli",
                energia: 49.0,
                feherje: 0.9,
                zsir: 0.2,
                szenhidrat: 9.5,
                imageUrl: "https://egeszsegter.hu/images/blog_pic/14030429181306.jpg"
            },
            {
                id: 48,
                nev: "görögdinnye",
                energia: 31.0,
                feherje: 0.5,
                zsir: 0.2,
                szenhidrat: 6.5,
                imageUrl: "https://www.agrarszektor.hu/images/cimlap/G/gorogdinnye768-20170608.jpg"
            },
            {
                id: 49,
                nev: "gránátalma",
                energia: 77.0,
                feherje: 0.7,
                zsir: 0.6,
                szenhidrat: 16.7,
                imageUrl: "https://granatalma.hu/uploads/domains/36/pikcs_1.jpg"
            },
            {
                id: 50,
                nev: "grapefruit",
                energia: 36.0,
                feherje: 0.5,
                zsir: 0.2,
                szenhidrat: 7.2,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/FebktkpTURBXy84MDk4MWIwYjdkYTNmZjg5NWFhYWY0MmEzMTM2NGYwZS5qcGeSlQMAH80D6M0CMpUCzQNSAMLD"
            },
            {
                id: 51,
                nev: "körte",
                energia: 53.0,
                feherje: 0.4,
                zsir: 0.3,
                szenhidrat: 12.0,
                imageUrl: "https://www.agroinform.hu/data/cikk/4/7294/cikk_47294/korte4.jpg"
            },
            {
                id: 52,
                nev: "málna",
                energia: 35.0,
                feherje: 1.2,
                zsir: 0.3,
                szenhidrat: 5.4,
                imageUrl: "https://www.agrarszektor.hu/images/hirek/image1624356032-0.jpg"
            },
            {
                id: 53,
                nev: "mandarin",
                energia: 47.0,
                feherje: 0.7,
                zsir: 0.3,
                szenhidrat: 9.8,
                imageUrl: "https://www.edenkert.hu/upload/2/article/4446/mandarin_gyogyhatasa.jpg"
            },
            {
                id: 54,
                nev: "mangó",
                energia: 73.0,
                feherje: 0.5,
                zsir: 0.3,
                szenhidrat: 17.0,
                imageUrl: "https://tesco.hu/img/content_platform_hu/sized/757x426-72-ffffff/mango.jpg"
            },
            {
                id: 55,
                nev: "meggy",
                energia: 56.0,
                feherje: 0.8,
                zsir: 0.5,
                szenhidrat: 11.0,
                imageUrl: "https://www.mindmegette.hu/images/195/O/meggy.jpg"
            },
            {
                id: 56,
                nev: "narancs",
                energia: 41.0,
                feherje: 0.6,
                zsir: 0.2,
                szenhidrat: 8.5,
                imageUrl: "https://nepgyogyaszat.com/wp-content/uploads/2010/04/narancs_1200_630.jpg"
            },
            {
                id: 57,
                nev: "nektarin",
                energia: 55.0,
                feherje: 0.9,
                zsir: 0.5,
                szenhidrat: 11.8,
                imageUrl: "https://oszibarackinfo.hu/wp-content/uploads/2020/05/nektarin_fa.jpg"
            },
            {
                id: 58,
                nev: "őszibarack",
                energia: 41.0,
                feherje: 0.7,
                zsir: 0.1,
                szenhidrat: 9.0,
                imageUrl: "http://www.termalfurdo.hu/images/cikk/5864/termalfurdo_oszibarack_1.jpg"
            },
            {
                id: 59,
                nev: "papaya",
                energia: 43.0,
                feherje: 0.6,
                zsir: 0.1,
                szenhidrat: 9.8,
                imageUrl: "https://integrativ-medicina.hu/wp-content/uploads/2021/06/papaya-1200x628-facebook-1200x628_optimized.jpg"
            },
            {
                id: 60,
                nev: "piros ribizli",
                energia: 38.0,
                feherje: 0.6,
                zsir: 0.2,
                szenhidrat: 7.0,
                imageUrl: "https://www.megyeriszabolcskerteszete.hu/custom/megyeri/image/cache/w0h0q80np1/ckeditor/ribizli-termes.jpg"
            },
            {
                id: 61,
                nev: "sárgabarack",
                energia: 49.0,
                feherje: 0.9,
                zsir: 0.1,
                szenhidrat: 10.2,
                imageUrl: "https://image-api.hazipatika.com/hazipatika/images/articles/Vu/Ls/A9jiU42FSWOidRjUnvdAxog46GIfbYzQ6s97wDDU.jpg?w=1200&h=630&s=223ee6d8996114554b016b6f91881fc4"
            },
            {
                id: 62,
                nev: "sárgadinnye",
                energia: 40.0,
                feherje: 0.3,
                zsir: 0.1,
                szenhidrat: 9.5,
                imageUrl: "http://kep.index.hu/1/0/1726/17265/172657/17265745_748722a40247fa6fd00d71f25c6f2f3e_wm.jpg"
            },
            {
                id: 63,
                nev: "szeder",
                energia: 39.0,
                feherje: 0.8,
                zsir: 1.0,
                szenhidrat: 6.0,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Cultivated_Blackberry%2C_Rubus_fruticosus_-_geograph.org.uk_-_1426305.jpg"
            },
            {
                id: 64,
                nev:"szilva",
                energia:47.0,
                feherje:0.8,
                zsir:0.0,
                szenhidrat:10.2,
                imageUrl: "http://gyogyitoangyalenergia.hu/wp-content/uploads/2019/11/szilva.jpg"
            },
            {
                id: 65,
                nev:"szőlő",
                energia:81.0,
                feherje:0.6,
                zsir:0.3,
                szenhidrat:18.1,
                imageUrl: "https://ceumedika.hu/wp-content/uploads/2020/10/1-3.jpg"
            },
            {
                id: 85,
                nev: "kiwi",
                energia: 61.0,
                feherje: 1.0,
                zsir: 0.6,
                szenhidrat: 11.3,
                imageUrl: "https://image-api.hazipatika.com/hazipatika/images/articles/Vq/pB/zGfCgZA13FvcNiGfLXD8wCES8ZiOSrQD91cUZOOt.jpg?w=1200&h=630&s=d61792cd89690739f1316542d80a03ac"
            }
        ]
    },
    tejtermekek : {
        id: 3,
        cim: "Tejtermékek",
        utvonal: "tejtermekek",
        termekek: [
            {
                id: 66,
                nev: "0%-os joghurt",
                energia: 34.0,
                feherje: 3.4,
                zsir: 0.1,
                szenhidrat: 4.6,
                imageUrl: "https://italhazhozszallitas.cdn.shoprenter.hu/custom/italhazhozszallitas/image/data/mizojoghurt.jpg?lastmod=1638522773.1588764831"
            },
            {
                id: 67,
                nev:"anikó sajt",
                energia:340.0,
                feherje:24.2,
                zsir:26.0,
                szenhidrat:1.8,
                imageUrl: "https://mizo.hu/files/95/9a/959a2ec61a464f34e8349d12d837d1b0.png"
            },
            {  
                id: 68,
                nev: "bakony camembert sajt",
                energia: 300.0,
                feherje: 21.5,
                zsir: 23.0,
                szenhidrat: 1.5,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Camembert.jpg"
            },
            {
                id: 69,
                nev: "camping krémsajt",
                energia: 312.0,
                feherje: 16.5,
                zsir: 26.4,
                szenhidrat: 1.7,
                imageUrl: "https://campingsajt.hu/wp-content/uploads/2018/07/Termekek_All-1.png"
            },
            {
                id: 70,
                nev: "chester cheddar sajt",
                energia: 377.0,
                feherje: 26.8,
                zsir: 29.1,
                szenhidrat: 1.5,
                imageUrl: "https://static.groby.hu/media/80e/37e/conv/Paladin-v%C3%B6r%C3%B6s-cheddar-full.png"
            },
            {
                id: 71,
                nev: "cukormentes gyümölcsjoghurt",
                energia: 60.0,
                feherje: 2.9,
                zsir: 3.0,
                szenhidrat: 5.1,
                imageUrl: "https://m.blog.hu/ma/maradokapenzemnel/image/img_3371.jpg"
            },
            {
                id: 72,
                nev: "cukrozott tejszínhab",
                energia: 289.0,
                feherje: 2.3,
                zsir: 26.0,
                szenhidrat: 11.0,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/articles/Ue/qE/x19KCRhCiaKCZnmqTBJXFQVnBUi8PkfENgqOgQsR.jpeg?w=640&h=480&fit=crop&s=33c9369cfd9e33fb5253e76df763497d"
            },
            {
                id: 73,
                nev: "edámi sajt",
                energia: 353.0,
                feherje: 26.2,
                zsir: 26.6,
                szenhidrat: 1.7,
                imageUrl: "https://m.blog.hu/ma/maradokapenzemnel/image/.external/.thumbs/3ef152d5881b71c5f890ec2edce88bbe_d49afe6e3b4eb7cadfe308837303ec67.jpg"
            },
            {
                id: 74,
                nev: "ementáli sajt",
                energia: 384.0,
                feherje: 27.8,
                zsir: 29.4,
                szenhidrat: 1.5,
                imageUrl: "https://dietmaker.hu/wp-content/uploads/ementali-sajt-kaloria.jpg"
            },
            {
                id: 75,
                nev: "félzsíros tehéntúró",
                energia: 143.0,
                feherje: 16.2,
                zsir: 7.0,
                szenhidrat: 3.7,
                imageUrl: "https://izeselet.hu/wp-content/uploads/2014/04/teh%C3%A9nt%C3%BAr%C3%B3.jpg"
            },
            {
                id: 76,
                nev: "fetasajt",
                energia: 266.0,
                feherje: 14.2,
                zsir: 21.3,
                szenhidrat: 4.1,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/SG/gN/abziOPLjmi396KrgOC8nSdMAQIMH71AhJPMtZIKL.jpeg?fit=crop&w=600&h=315&s=c51ca30019ab8866e0057c620f2eb664"
            },
            {
                id: 77,
                nev: "göcseji sajt",
                energia: 306.0,
                feherje: 22.2,
                zsir: 23.3,
                szenhidrat: 1.4,
                imageUrl: "https://finomreceptek.hu/files/images/sajt/sajt.jpg"
            },
            {
                id: 78,
                nev: "goudasajt",
                energia: 357.0,
                feherje: 24.9,
                zsir: 27.4,
                szenhidrat: 2.2,
                imageUrl: "https://www.mindmegette.hu/images/193/L/lead_L_crop_201706081142_sajttok.jpg"
            },
            {
                id: 79,
                nev: "gyümölcsjoghurt",
                energia: 83.0,
                feherje: 2.8,
                zsir: 2.9,
                szenhidrat: 11.2,
                imageUrl: "https://utolsofogyokura.hu/wp-content/uploads/2021/04/cukormentes-gyumolcsjoghurt-508x321.jpg"
            },
            {
                id: 80,
                nev: "ízesített kenhető sajt",
                energia: 284.0,
                feherje: 15.5,
                zsir: 23.7,
                szenhidrat: 1.9,
                imageUrl: "https://veganblog.hu/wp-content/uploads/2019/10/csicseriborso%CC%81lisztbo%CC%8Bl-cheddar-kenheto%CC%8B-sajt-recept-vega%CC%81nblog.jpg"
            },
            {
                id: 81,
                nev: "juhtúró",
                energia: 274.0,
                feherje: 14.7,
                zsir: 22.5,
                szenhidrat: 2.8,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/Lz/Oj/341zcSmW7fqWylk4jZIs7XvmJizL1ARmxEsDStAy.jpeg?fit=crop&w=600&h=315&s=26ebb4655842fa300769d23658467849"
            },
            {
                id: 82,
                nev: "kakaós tej",
                energia: 64.0,
                feherje: 3.5,
                zsir: 0.5,
                szenhidrat: 11.4,
                imageUrl: "http://kep.cdn.index.hu/1/0/704/7042/70424/7042439_6bdb8bb81b8d7782238b6c0a012ec960_wm.jpg"
            },
            {
                id: 83,
                nev: "kecskesajt",
                energia: 367.0,
                feherje: 21.6,
                zsir: 29.8,
                szenhidrat: 2.5,
                imageUrl: "https://twice.b-cdn.net/wp-content/uploads/2020/07/kecskesajt.jpg"
            },
            {
                id: 84,
                nev: "kefir",
                energia: 65.0,
                feherje: 3.4,
                zsir: 3.6,
                szenhidrat: 4.6,
                imageUrl: "https://cdn.hellovidek.hu/images/site/articles/lead/2021/08/1630399622-odC82fJlE_md.jpg"
            },
            {
                id: 86,
                nev: "margarin 70 % zsírtartalmú",
                energia: 635.0,
                feherje: 0.2,
                zsir: 70.0,
                szenhidrat: 0.4,
                imageUrl: "https://www.mindmegette.hu/images/287/L/lead_L_crop_202004171205_shutterstock_203493112.jpg"
            },
            {
                id: 87,
                nev: "márványsajt",
                energia: 357.0,
                feherje: 20.0,
                zsir: 29.7,
                szenhidrat: 2.0,
                imageUrl: "https://www.tropibolt.hu/img/90638/KU005/585x585,r/KU005.jpg?time=1651471396"
            },
            {
                id: 88,
                nev: "parmezán sajt",
                energia: 375.0,
                feherje: 26.8,
                zsir: 28.9,
                szenhidrat: 1.6,
                imageUrl: "https://www.interfood.hu/wp-content/uploads/2019/03/a-parmezan-nyomaban.jpg"
            },
            {
                id: 89,
                nev: "tej. 1.5%-os",
                energia: 49.0,
                feherje: 3.4,
                zsir: 1.5,
                szenhidrat: 5.3,
                imageUrl: "http://sporttaplalkozas.tf.hu/img/tudasbazis/tej_a_sporttaplalkozasban_i/tej.png"
            },
            {
                id: 90,
                nev: "tej. 2.8%-os",
                energia: 60.0,
                feherje: 3.4,
                zsir: 2.8,
                szenhidrat: 5.3,
                imageUrl: "http://sporttaplalkozas.tf.hu/img/tudasbazis/tej_a_sporttaplalkozasban_i/tej.png"
            },
            {
                id: 91,
                nev: "tejföl 20%-os",
                energia: 209.0,
                feherje: 3.3,
                zsir: 20.0,
                szenhidrat: 3.8,
                imageUrl: "https://www.napi.hu/fototar/fototar/202002/orig/image1582034245.jpg/800/?v=2022030101"
            },
            {
                id: 92,
                nev: "tofu (szójatúró)",
                energia: 73.0,
                feherje: 8.1,
                zsir: 4.2,
                szenhidrat: 0.6,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/articles/HC/Ie/4uCQBzpFrD222Of5KwMHcp629Q1EdlQlTWXUJh9V.jpeg?w=640&h=640&fit=crop&s=b44b19c2a291bf53c904af395fbc41f5"
            },
            {
                id: 93,
                nev: "trappista sajt",
                energia: 372.0,
                feherje: 27.7,
                zsir: 28.1,
                szenhidrat: 1.6,
                imageUrl: "https://www.interfood.hu/wp-content/uploads/2022/03/A-sokat-vitatott-trappista-sajt.jpg"
            },
            {
                id: 94,
                nev: "zsíros kockasajt",
                energia: 301.0,
                feherje: 16.7,
                zsir: 25.0,
                szenhidrat: 2.0,
                imageUrl: "https://cdn.nwmgroups.hu/s/img/i/1301/20130110-kockasajt-omlesztett-sajt.jpg"
            }
        ]
    },
    husfelek: {
        id: 4,
        cim: "Húsok, húsfélék",
        utvonal: "husok",
        termekek: [
            {
                id: 95,
                nev: "angolszalonna",
                energia: 488.0,
                feherje: 16.8,
                zsir: 46.5,
                szenhidrat: 0.0,
                imageUrl: "https://darno-hus.hu/wp-content/uploads/2017/12/68.jpg"
            },
            {
                id: 96,
                nev: "baromfipárizsi",
                energia: 211.0,
                feherje: 14.7,
                zsir: 15.6,
                szenhidrat: 2.7,
                imageUrl: "https://www.baromfiudvar.hu/images/products/130/kedvenc-izek-baromfi-parizsi-1800g_20190903115428.png"
            },
            {
                id: 97,
                nev: "baromfivirsli",
                energia: 211.0,
                feherje: 14.7,
                zsir: 15.6,
                szenhidrat: 2.7,
                imageUrl: "https://cdn.penzcentrum.hu/upload/cimlapimg/V/virsli-20201202.jpg"
            },
            {
                id: 98,
                nev: "bélszín",
                energia: 119.0,
                feherje: 19.0,
                zsir: 4.4,
                szenhidrat: 0.6,
                imageUrl: "https://rantotthuswokban.bmintbalazs.com/wp-content/uploads/belszin-egyben-sutve-szeletelve-820x615.jpg"
            },
            {
                id: 99,
                nev: "birkahús",
                energia: 308.0,
                feherje: 16.9,
                zsir: 26.4,
                szenhidrat: 0.3,
                imageUrl: "https://dietmaker.hu/wp-content/uploads/birkahus-kaloria.jpg"
            },
            {
                id: 100,
                nev: "borjúhús",
                energia: 120.0,
                feherje: 19.5,
                zsir: 4.5,
                szenhidrat: 0.3,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/AN/e2/1ozYUGzrvsYJgRoYU4XghVqWAk531rbmCbUV7PTZ.jpeg?fit=crop&w=600&h=315&s=924c476271421ea816d070108d5a2761"
            },
            {
                id: 101,
                nev: "csabai csípőskolbász",
                energia: 460.0,
                feherje: 19.8,
                zsir: 41.9,
                szenhidrat: 0.3,
                imageUrl: "https://www.agraroldal.hu/nmimg/730x400/upload/newsimages/uECPxUlGxYgkFdys.jpg"
            },
            {
                id: 102,
                nev: "császárszalonna",
                energia: 447.0,
                feherje: 10.0,
                zsir: 45.0,
                szenhidrat: 0.0,
                imageUrl: "https://darno-hus.hu/wp-content/uploads/2017/12/70.jpg"
            },
            {
                id: 103,
                nev: "csirkecomb",
                energia: 133.0,
                feherje: 20.9,
                zsir: 5.2,
                szenhidrat: 0.5,
                imageUrl: "https://www.mindmegette.hu/images/201/O/crop_201709081019_26124_pacolt-sult-csirkecomb_n-201510170610.jpg"
            },
            {
                id: 104,
                nev: "csirkemell",
                energia: 110.0,
                feherje: 24.7,
                zsir: 1.0,
                szenhidrat: 0.5,
                imageUrl: "https://csirkemell-receptek.hu/wp-content/uploads/2020/10/fokhagymas_tejfolos_bundaban_sult_csirkemell.jpg"
            },
            {
                id: 105,
                nev: "csirkesonka",
                energia: 130.0,
                feherje: 22.2,
                zsir: 1.4,
                szenhidrat: 7.0,
                imageUrl: "https://3.bp.blogspot.com/-jVk7L7OIuGE/VsrXn-Z90VI/AAAAAAAALFQ/tTfQ9ohBnaY/s1600/sonka.jpg"
            },
            {
                id: 106,
                nev: "csülök",
                energia: 328.0,
                feherje: 16.0,
                zsir: 29.0,
                szenhidrat: 0.3,
                imageUrl: "https://www.mindmegette.hu/images/305/O/lead_l_crop_201911111231_shutterstock_478295617.jpg"
            },
            {
                id: 107,
                nev: "disznósajt",
                energia: 315.0,
                feherje: 14.5,
                zsir: 28.3,
                szenhidrat: 0.2,
                imageUrl: "https://kiskosarbolt.hu/image/cache/data/Manufacturers/HeringCsaba/Hering_disznosajt-500x375w.jpg"
            },
            {
                id: 108,
                nev: "fácánhús",
                energia: 109.0,
                feherje: 22.3,
                zsir: 1.9,
                szenhidrat: 0.5,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/Vm/Hm/facanmell-parmezannal-sonkaval-toltve.jpeg?w=640&h=360&fit=crop&s=4d459467e37c1675aa590e066a63f44b"
            },
            {
                id: 109,
                nev: "főzőkolbász",
                energia: 394.0,
                feherje: 17.8,
                zsir: 35.5,
                szenhidrat: 0.3,
                imageUrl: "https://darno-hus.hu/wp-content/uploads/2017/12/50.jpg"
            },
            {
                id: 110,
                nev: "füstölt főtt tarja",
                energia: 197.0,
                feherje: 15.0,
                zsir: 15.0,
                szenhidrat: 0.3,
                imageUrl: "https://darno-hus.hu/wp-content/uploads/2017/12/58.jpg"
            },
            {
                id: 111,
                nev: "füstölt sertéssonka",
                energia: 368.0,
                feherje: 17.2,
                zsir: 33.0,
                szenhidrat: 0.1,
                imageUrl: "https://m.kaloriabazis.hu/p/9/8/5/1020985_sertes_sonka_felvagott_big.jpg"
            },
            {
                id: 112,
                nev: "házinyúlhús",
                energia: 158.0,
                feherje: 21.0,
                zsir: 8.0,
                szenhidrat: 0.4,
                imageUrl: "https://proaktivdirekt.com/adaptive/article_md/upload/images/magazine/nyulpecsenye.jpg"
            },
            {
                id: 113,
                nev: "kacsahús",
                energia: 186.0,
                feherje: 19.0,
                zsir: 12.0,
                szenhidrat: 0.4,
                imageUrl: "https://butcher.hu/image/cache/catalog/kacsah%C3%BAs-600x315w.jpg"
            },
            {
                id: 114,
                nev: "közepes zsírtartalmú marhahús",
                energia: 205.0,
                feherje: 19.0,
                zsir: 14.0,
                szenhidrat: 0.6,
                imageUrl: "https://cleaneating.hu/wp-content/uploads/image/cikkkepek/marhahus1.jpg"
            },
            {
                id: 115,
                nev: "közepes zsírtartalmú sertéshús",
                energia: 288.0,
                feherje: 17.5,
                zsir: 23.9,
                szenhidrat: 0.3,
                imageUrl: "https://kuffer.hu/wp-content/uploads/2017/10/serteshus-veszelyei.jpg"
            },
            {
                id: 116,
                nev: "krinolin",
                energia: 213.0,
                feherje: 11.9,
                zsir: 18.2,
                szenhidrat: 0.2,
                imageUrl: "https://huskeszitmenyekestarsai.cdn.shoprenter.hu/custom/huskeszitmenyekestarsai/image/data/product/Termek_kepek/Bognar_Hus/10505-meteres-krinolin-vg-kb15-kg-bognar-hus-1479.jpg?lastmod=1651401335.1630571835"
            },
            {
                id: 117,
                nev: "libamáj",
                energia: 130.0,
                feherje: 16.4,
                zsir: 4.3,
                szenhidrat: 6.3,
                imageUrl: "https://www.mindmegette.hu/images/171/O/crop_201611081506_libamajpastetom.jpg"
            },
            {
                id: 118,
                nev: "löncshús",
                energia: 262.0,
                feherje: 13.8,
                zsir: 22.0,
                szenhidrat: 2.0,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/PF/Ps/0h57g7jBBtKuwIWRjIenaWLsOyJZ4ZKlQk887VcT.jpeg?fit=crop&w=600&h=315&s=9752a755315507709cd447356207968c"
            },
            {
                id: 119,
                nev: "májashurka",
                energia: 202.0,
                feherje: 14.6,
                zsir: 11.4,
                szenhidrat: 10.1,
                imageUrl: "https://2.bp.blogspot.com/_5O-jypyl64M/S2cUtQ8rZsI/AAAAAAAADWc/d0s26VXzfXA/w1200-h630-p-k-no-nu/m%C3%A1jas.jpg"
            },
            {
                id: 120,
                nev: "marhafelsál",
                energia: 243.0,
                feherje: 17.0,
                zsir: 19.0,
                szenhidrat: 0.6,
                imageUrl: "https://butcher.hu/image/cache/catalog/termek%20kepek/Hus_es_hal/Marha/Marha_felsal-1058x1058.jpg"
            },
            {
                id: 121,
                nev: "olasz felvágott",
                energia: 335.0,
                feherje: 13.7,
                zsir: 30.8,
                szenhidrat: 0.3,
                imageUrl: "https://www.wiesbauer-dunahus.hu/wp-content/uploads/2019/07/soproni_felvagott_talalas2_prt-500x383.jpg"
            },
            {
                id: 122,
                nev: "oldalas",
                energia: 429.0,
                feherje: 12.0,
                zsir: 42.0,
                szenhidrat: 0.3,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/tn/4I/sult-oldalas-ahogy-nagyanyaink-keszitettek.jpeg?w=640&h=480&fit=crop&s=f7da6c16dcab3817233118cbe5a8d09a"
            },
            {
                id: 123,
                nev: "őzhús",
                energia: 102.0,
                feherje: 20.8,
                zsir: 1.9,
                szenhidrat: 0.4,
                imageUrl: "http://lorien.blog.hu/media/image/ozsultrokagm/ozmind.jpg"
            },
            {
                id: 124,
                nev: "paprikás szalámi",
                energia: 494.0,
                feherje: 19.6,
                zsir: 45.8,
                szenhidrat: 0.3,
                imageUrl: "https://mikonyhank.cdn.shoprenter.hu/custom/mikonyhank/image/cache/w600h600wt1/2022/szalamikonyhakkk.jpg?lastmod=1650366215.1649276993"
            },
            {
                id: 125,
                nev: "pulykacomb",
                energia: 115.0,
                feherje: 20.5,
                zsir: 3.6,
                szenhidrat: 0.0,
                imageUrl: "https://www.mindmegette.hu/images/11/O/19114_tuzdeltpulykacomb_n-201510170431.jpg"
            },
            {
                id: 126,
                nev: "pulykamell",
                energia: 106.0,
                feherje: 24.1,
                zsir: 1.0,
                szenhidrat: 0.0,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/sB/Uy/egyszeru-pulykamell.jpeg?w=640&h=640&fit=crop&s=8591a25a32e5cde93d500e5d5ee3b209"
            },
            {
                id: 127,
                nev: "pulykasonka",
                energia: 111.0,
                feherje: 17.0,
                zsir: 2.8,
                szenhidrat: 4.2,
                imageUrl: "https://dietmaker.hu/wp-content/uploads/pulykasona-kaloria.jpg"
            },
            {
                id: 128,
                nev: "sertés virsli",
                energia: 232.0,
                feherje: 12.5,
                zsir: 20.0,
                szenhidrat: 0.2,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/uqqktkqTURBXy85ZGEwNDRjMzFiYzllOThkNjkyM2M2YWU3MmRlMmRiNi5qcGVnkZUCzQLoAMLD"
            },
            {
                id: 129,
                nev: "sertéspacal",
                energia: 165.0,
                feherje: 15.9,
                zsir: 11.2,
                szenhidrat: 0.0,
                imageUrl: "https://www.mindmegette.hu/images/26/O/34583_velos-pacal-bogracsban_n-201510170817.jpg"
            },
            {
                id: 130,
                nev: "sovány bárányhús",
                energia: 195.0,
                feherje: 19.7,
                zsir: 12.7,
                szenhidrat: 0.3,
                imageUrl: "https://i.pinimg.com/474x/a1/50/17/a15017da60da84f1a4b43ea8cb17fc4c.jpg"
            },
            {
                id: 131,
                nev: "szarvashús",
                energia: 121.0,
                feherje: 20.7,
                zsir: 3.9,
                szenhidrat: 0.6,
                imageUrl: "https://csodacsont.hu/wp-content/uploads/2020/11/dara%CC%81lt-szarvashu%CC%81s-livis-green.jpg"
            },
            {
                id: 132,
                nev: "tavaszi felvágott",
                energia: 183.0,
                feherje: 10.3,
                zsir: 14.6,
                szenhidrat: 2.4,
                imageUrl: "https://m.blog.hu/ve/vegalife/image/szejtan/tavaszi_felvagott.jpg"
            },
            {
                id: 133,
                nev: "téliszalámi",
                energia: 519.0,
                feherje: 25.1,
                zsir: 46.1,
                szenhidrat: 0.3,
                imageUrl: "https://gulyashus.hu/img/97930/2020KTSZ/2020KTSZ.jpg"
            },
            {
                id: 134,
                nev: "tyúkhús",
                energia: 137.0,
                feherje: 19.0,
                zsir: 6.5,
                szenhidrat: 0.4,
                imageUrl: "https://m.blog.hu/ke/kepeslinkek/image/.external/.thumbs/e185ed7e7c41e9dca9b93d0030e10289_d49afe6e3b4eb7cadfe308837303ec67.jpg"
            },
            {
                id: 135,
                nev: "zalai felvágott",
                energia: 245.0,
                feherje: 15.6,
                zsir: 19.9,
                szenhidrat: 0.6,
                imageUrl: "https://kurucz.eu/_projects/kurucz/uploads/product/3262/5fc3dadc9cb49-1-zala-felvagott-500-g.jpg"
            }
        ]
    },
    halak: {
        id: 5,
        cim: "Halak",
        utvonal: "halak",
        termekek: [
            {
                id: 136,
                nev: "angolna",
                energia: 282.0,
                feherje: 15.0,
                zsir: 24.5,
                szenhidrat: 0.0,
                imageUrl: "https://s.24.hu/app/uploads/2021/08/angolna-2-e1627911724841-660x371.jpg"
            },
            {
                id: 137,
                nev: "busa",
                energia: 92.0,
                feherje: 18.0,
                zsir: 1.9,
                szenhidrat: 0.6,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tolstolobec_pestr%C3%BD.jpg/1200px-Tolstolobec_pestr%C3%BD.jpg"
            },
            {
                id: 138,
                nev: "csuka",
                energia: 82.0,
                feherje: 18.4,
                zsir: 0.9,
                szenhidrat: 0.0,
                imageUrl: "http://lakberendezes.hu/wp-content/uploads/2016/12/CSUKA-LOG%C3%93-e1480872679285.jpg"
            },
            {
                id: 139,
                nev: "fogassüllő",
                energia: 84.0,
                feherje: 19.0,
                zsir: 0.8,
                szenhidrat: 0.2,
                imageUrl: "https://i1.wp.com/www.izorzok.hu/wp-content/uploads/2020/01/4.balatoni-fogass%C3%BCll%C5%91-min.jpg?ssl=1"
            },
            {
                id: 140,
                nev: "harcsa",
                energia: 82.0,
                feherje: 15.8,
                zsir: 2.0,
                szenhidrat: 0.2,
                imageUrl: "https://m.blog.hu/mt/mttmuzeum/image/k%C3%A9t%C3%A9lt%C5%B1%20%C3%A9s%20h%C3%BCll%C5%91k%20gy%C5%B1jtem%C3%A9nye/2017/szoke_viktoria/ev_hala_harcsa/2_harcsaportre.jpg"
            },
            {
                id: 141,
                nev: "keszeg",
                energia: 117.0,
                feherje: 16.6,
                zsir: 5.5,
                szenhidrat: 0.2,
                imageUrl: "https://tesco.hu/imgglobal/content_platform/recipes/main/42/sized/756x426-100-fff-700-0/4266cc59a909e75d45d01c0964cb6db1.jpg"
            },
            {
                id : 142,
                nev: "lazac",
                energia: 208.0,
                feherje: 20.0,
                zsir: 14.0,
                szenhidrat: 0.2,
                imageUrl: "https://www.mindmegette.hu/images/25/O/32792_lazac-joghurtos-ontettel_n-201510170747.jpg"
            },
            {
                id: 143,
                nev: "makréla",
                energia: 183.0,
                feherje: 18.7,
                zsir: 11.9,
                szenhidrat: 0.0,
                imageUrl: "https://www.mindmegette.hu/images/22/O/29810_makrela_n-201510170703.jpg"
            },
            {
                id: 144,
                nev: "olajos szardínia",
                energia: 284.0,
                feherje: 22.5,
                zsir: 21.4,
                szenhidrat: 0.0,
                imageUrl: "https://cdn.pixabay.com/photo/2022/01/15/17/01/fish-6940149_960_720.jpg"
            },
            {
                id: 145,
                nev: "olajos tonhal",
                energia: 290.0,
                feherje: 23.8,
                zsir: 21.5,
                szenhidrat: 0.0,
                imageUrl: "https://oceanfood.hu/wp-content/uploads/2019/11/tonhal_steak.jpg"
            },
            {
                id: 146,
                nev: "pácolt hering",
                energia: 144.0,
                feherje: 11.1,
                zsir: 11.0,
                szenhidrat: 0.0,
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGX_ZqfmXIROshFrXH9nOzFima-Te6fv-3A&usqp=CAU"
            },
            {
                id: 147,
                nev: "pisztráng",
                energia: 113.0,
                feherje: 21.5,
                zsir: 2.9,
                szenhidrat: 0.0,
                imageUrl: "https://www.mindmegette.hu/images/157/O/crop_201607071557_pisztrang_bebiparaj.jpg"
            },
            {
                id: 148,
                nev: "ponty",
                energia: 143.0,
                feherje: 15.8,
                zsir: 8.7,
                szenhidrat: 0.1,
                imageUrl: "https://pecaverzum.hu/upload/articles/thumb_850x565_crop3_80/fekete.jpg"
            },
            {
                id: 150,
                nev: "tintahal",
                energia: 61.0,
                feherje: 12.7,
                zsir: 0.7,
                szenhidrat: 0.8,
                imageUrl: "https://oceanfood.hu/wp-content/uploads/2019/11/patagoniai_tintahal_tisztitott_.jpg"
            },
            {
                id: 151,
                nev: "tőkehal filé",
                energia: 82.0,
                feherje: 17.7,
                zsir: 0.6,
                szenhidrat: 1.2,
                imageUrl: "https://www.mindmegette.hu/images/13/O/21255_tokehalfile_n-201510170501.jpg"
            },
            {
                id: 152,
                nev: "tonhal filé",
                energia: 227.0,
                feherje: 21.5,
                zsir: 15.5,
                szenhidrat: 0.0,
                imageUrl: "https://oceanfood.hu/wp-content/uploads/2019/11/tonhal_steak.jpg"
            }
        ]
    },
    tesztak : {
        id: 6,
        cim: "Tészta félék",
        utvonal: "tesztak",
        termekek: [
            {
                id: 153,
                nev: "4 tojásos száraztészta",
                energia: 384.0,
                feherje: 15.0,
                zsir: 3.4,
                szenhidrat: 72.9,
                imageUrl: "https://bulkshop.cdn.shoprenter.hu/custom/bulkshop/image/cache/w460h460wt1/termekfotok_new/Term%C3%A9kfot%C3%B3k_%C3%BAjak/spagetti2.jpg?lastmod=1653245047.1649233853"
            },
            {
                id: 154,
                nev: "abonett",
                energia: 401.0,
                feherje: 14.7,
                zsir: 1.5,
                szenhidrat: 81.7,
                imageUrl: "https://www.mindmegette.hu/images/256/L/lead_L_crop_201906201556_abonett.jpg"
            },
            {
                id: 155,
                nev: "bakonyi barna kenyér",
                energia: 245.0,
                feherje: 8.5,
                zsir: 0.8,
                szenhidrat: 50.6,
                imageUrl: "https://ocdn.eu/pulscms-transforms/1/BvdktkqTURBXy9hZmVkOTI2OWRhMzcyZGRiNmEyYzlmYzcwOTU5Y2VlYy5qcGVnkZUCzQOlAMLD"
            },
            {
                id: 156,
                nev: "burgonyás kenyér",
                energia: 259.0,
                feherje: 10.8,
                zsir: 1.7,
                szenhidrat: 49.7,
                imageUrl: "http://csaladireceptkonyv.hu/storage/images/recipes/12313.jpg"
            },
            {
                id: 157,
                nev: "dabasi rozsos kenyér",
                energia: 257.0,
                feherje: 10.1,
                zsir: 1.8,
                szenhidrat: 49.9,
                imageUrl: "https://www.mokuslekvar.hu/wp-content/uploads/2014/09/IMG_4862.jpg"
            },
            {
                id: 158,
                nev: "durumtészta",
                energia: 357.0,
                feherje: 12.5,
                zsir: 1.5,
                szenhidrat: 73.0,
                imageUrl: "https://dietmaker.hu/wp-content/uploads/durumteszta-kaloria.jpg"
            },
            {
                id: 159,
                nev: "félbarna kenyér",
                energia: 259.0,
                feherje: 9.8,
                zsir: 1.0,
                szenhidrat: 52.3,
                imageUrl: "https://offers.kd2.org/pics/9a/c8/9ac8d9088e6d769337ec380a6c2bdffe7eb78abd.jpg"
            },
            {
                id: 160,
                nev: "félkész réteslap",
                energia: 348.0,
                feherje: 11.6,
                zsir: 1.2,
                szenhidrat: 72.1,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/ingredients/13/NL/xf5Cpg8BwokGUACWsqsrLqrivUqzCX8nKfrD0qsI.jpeg?fit=crop&w=600&h=315&s=b9072b25c2646a06cc736cd711e06a8a"
            },
            {
                id: 160,
                nev: "graham kenyér",
                energia: 267.0,
                feherje: 10.1,
                zsir: 1.0,
                szenhidrat: 54.0,
                imageUrl: "https://jogasziget.hu/wp-content/uploads/2017/12/graham-keny%C3%A9r.jpg"
            },
            {
                id: 161,
                nev: "hamburgerpogácsa",
                energia: 171.0,
                feherje: 15.1,
                zsir: 11.2,
                szenhidrat: 2.3,
                imageUrl: "https://img-global.cpcdn.com/recipes/f321d9548ea04e46/680x482cq70/hazi-hamburger-zsemle-es-huspogacsa-recept-foto.jpg"
            },
            {
                id: 162,
                nev: "kalács",
                energia: 403.0,
                feherje: 11.8,
                zsir: 10.5,
                szenhidrat: 64.9,
                imageUrl: "https://www.momwithfive.com/wp-content/uploads/2019/09/s%C3%B3s-kal%C3%A1cs.jpg"
            },
            {
                id: 163,
                nev: "kenyér",
                energia: 251.0,
                feherje: 10.0,
                zsir: 0.8,
                szenhidrat: 53.5,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/N6/yD/ropogos-heju-feher-kenyer-ejszakai-kelesztessel.jpeg?w=640&h=640&fit=crop&s=334e2674037399d046887f95b7939073"
            },
            {
                id: 164,
                nev: "korpás zsemle, kifli",
                energia: 252.0,
                feherje: 10.5,
                zsir: 1.5,
                szenhidrat: 48.9,
                imageUrl: "https://image-api.nosalty.hu/nosalty/images/recipes/ff/rc/korpas-zsemle.jpeg?w=640&h=360&fit=crop&s=d4d2c1355146e9a752a3809c46c87b88"
            },
            {
                id: 166,
                nev: "puffasztott búzaszelet",
                energia: 340.0,
                feherje: 13.9,
                zsir: 2.6,
                szenhidrat: 64.8,
                imageUrl: "https://www.mindmegette.hu/images/125/L/lead_L_122971_puffasztott01-201510171439.jpg"
            },
            {
                id: 167,
                nev: "rozskenyér",
                energia: 256.0,
                feherje: 8.1,
                zsir: 0.9,
                szenhidrat: 53.6,
                imageUrl: "https://gerepekseg.hu/wp-content/uploads/2019/01/bigstock-A-Composition-Of-Different-Bre-257729092-1000x668.jpg"
            },
            {
                id: 168,
                nev: "zsemle, kifli",
                energia: 273.0,
                feherje: 9.4,
                zsir: 0.7,
                szenhidrat: 57.0,
                imageUrl: "http://csaladireceptkonyv.hu/storage/images/recipes/51925.jpg"
            }
        ]
    }
};

export default TAPANYAGOK;