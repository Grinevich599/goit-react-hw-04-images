import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onClickModal }) => {
    return (
      <ul className="ImageGallery">
        {Array.isArray(images) && images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onClickModal={onClickModal}
            />
          );
        })}
      </ul>
    );
  };
  
  export default ImageGallery;