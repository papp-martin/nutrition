import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const config = {
    apiKey: "AIzaSyD2RbtuxrQ3rSElqtorQe-stOWiKypqy24",
    authDomain: "nutrition-9c5ca.firebaseapp.com",
    projectId: "nutrition-9c5ca",
    storageBucket: "nutrition-9c5ca.appspot.com",
    messagingSenderId: "5865285286",
    appId: "1:5865285286:web:de84ebda50cb115e28b667",
    measurementId: "G-85X2Z8WPB3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('user create error', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertProductsSnapshotToMap = productsSnapshot => {
    const transformedProduct = productsSnapshot.docs.map(doc => {
        const { title, allProducts } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            allProducts
        }
    });

    return transformedProduct.reduce((accumulator, products) => {
        accumulator[products.title.toLowerCase()] = products;
        return accumulator;
    } , {});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;