import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './product-item.styles.scss';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/summation/summation.actions';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ReactComponent as ScaleIcon } from '../../assets/scale.svg';
import { useState } from 'react';

const modalStyle = {
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

const ProductItem = ({ oneProduct, addProduct }) => {
    const [open, setOpen] = useState(false);
    const { name, energy, protein, fat, carbohydrate, imageUrl } = oneProduct;

    const addClick = () => {
        addProduct(oneProduct);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <div className='product-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='item-details'>
                <div className='container'>
                    <p className='detail'>Energy: {energy} kcal</p>
                    <p className='detail'>Protein: {protein} g</p>
                    <p className='detail'>Fat: {fat} g</p>
                    <p className='detail'>Carbohydrate: {carbohydrate} g</p>
                </div>
            </div>
            <div className='product-footer'>
                <span className='name'>{name}</span>
            </div>
            <CustomButton onClick={addClick} inverted>Add</CustomButton>
            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    <Stack>
                        <Alert severity='success'>Product added to summary<ScaleIcon style={{width: `24px`, height: `24px`, marginLeft: `5px`}}/></Alert>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addProduct: oneProduct => dispatch(addProduct(oneProduct))
});

export default connect(null, mapDispatchToProps)(ProductItem);