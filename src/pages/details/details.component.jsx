import React from 'react'

function DetailsComponent({ oneProduct }) {
  const { name, description, imageUrl } = oneProduct;
  return (
    <div>
        <h1 style={{textAlign: 'center'}}>{name.toUpperCase()}</h1>
        <p style={{textAlign: 'center', fontSize: '1.1rem'}}>{description}</p>
        <div className='image-container' style={{maxWidth: '800px', maxHeight: '400px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
          <img className='image' src={imageUrl} alt="image" style={{width: '80%', height: '70%', objectFit: 'contain', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
        </div>
    </div>
  )
}

export default DetailsComponent;
