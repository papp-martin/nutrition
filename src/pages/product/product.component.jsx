import React from 'react';
import { connect } from 'react-redux';
import './product.styles.scss';
import ProductItem from '../../components/product-item/product-item.component';
import { selectProduct } from '../../redux/nutritions/nutritions.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CustomButton from '../../components/custom-button/custom-button.component';
import { useState } from 'react';
import { storage, firestore } from '../../firebase/firebase.utils';
import firebase from 'firebase/compat/app';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const errormodalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #f0625f',
    boxShadow: 24,
    p: 4,
};

const addmodalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #69bc6d',
    boxShadow: 24,
    p: 4,
};


const ProductPage = ({ product, currentUser }) => {
    const { title, allProducts } = product;

    const [name, setName] = useState('');
    const [energy, setEnergy] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [carbohydrate, setCarbohydrate] = useState(0);
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const [errorOpen, setErrorOpen] = useState(false);
    const errorClose = () => setErrorOpen(false);

    const [addOpen, setAddOpen] = useState(false);
    const addClose = () => setAddOpen(false);

    const handleChange = event => {
        if(event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };
    
    const handleUpload = () => {
        if (name === "" || energy === "" || protein === "" || fat === "" || carbohydrate === "" || image === null) {
            setErrorOpen(true);
        } else {
            const uploadTask = storage.ref(`products/${image.name}`).put(image);
            uploadTask.on("state_changed",
                (snapshot) => {
                    //progress function
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                    alert(error.message);
                },
                () => {
                    storage
                        .ref('products')
                        .child(image.name)
                        .getDownloadURL()

                        .then(url => {
                            firestore.collection('products').doc(`${product.id}`).update({                    
                                allProducts: firebase.firestore.FieldValue.arrayUnion(
                                    {
                                        name: name,
                                        energy: energy,
                                        protein: protein,
                                        fat: fat,
                                        carbohydrate: carbohydrate,
                                        imageUrl: url,
                                        id: Math.floor(Math.random() * 1000) + 169
                                    }
                                )
                            });

                            setName('');
                            setEnergy(0);
                            setProtein(0);
                            setFat(0);
                            setCarbohydrate(0);
                            setImage(null);
                            setAddOpen(true);
                        });
                }
            )
        };
    };
    
    

    return (
        <div className='product-page'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            {
                (currentUser?.currentUser?.displayName === 'admin') ?
                (
                    <div className='new-product'>
                    <form>
                        Name: <input className='name-input' type="text" onChange={event => setName(event.target.value)} value={name}/>
                        <br />
                        Energy: <input className='nutri-input' type="number" onChange={event => setEnergy(event.target.value)} value={energy}/> kcal
                        <br />
                        Protein: <input className='nutri-input' type="number" onChange={event => setProtein(event.target.value)} value={protein}/> g
                        <br />
                        Fat: <input className='nutri-input' type="number" onChange={event => setFat(event.target.value)} value={fat}/> g
                        <br />
                        Carbohydrate: <input className='nutri-input' type="number" onChange={event => setCarbohydrate(event.target.value)} value={carbohydrate}/> g
                        <br />
                        <input type="file" accept="image/png, image/jpeg" onChange={handleChange}/>
                        <br />
                    </form>
                    <progress className='progress' value={progress} max="100" />
                    <CustomButton onClick={handleUpload}>New product</CustomButton>
                </div>
                ) :
                (null)
            }
            <div className='allProducts'>
                {allProducts.map(oneProduct => (
                    <ProductItem key={oneProduct.id} oneProduct={oneProduct} />
                ))}
            </div>
            <Modal open={errorOpen} onClose={errorClose}>
                <Box sx={errormodalStyle}>
                    <Stack>
                        <Alert severity='error'>Upload failed. Incorrect datas!</Alert>
                    </Stack>
                </Box>
            </Modal>
            <Modal open={addOpen} onClose={addClose}>
                <Box sx={addmodalStyle}>
                    <Stack>
                        <Alert severity='success'>Upload success!</Alert>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    product: selectProduct(ownProps.match.params.productId)(state),
    currentUser: selectCurrentUser(state),
});


export default connect(mapStateToProps)(ProductPage);