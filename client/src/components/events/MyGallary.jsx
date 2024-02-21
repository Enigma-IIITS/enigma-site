import React from 'react'
import ImageGallery from 'react-image-gallery'

const MyGallery = ({ images }) => {
    return <ImageGallery items={images} autoPlay={true} />
}

export default MyGallery
