import React from 'react';

const ImageGalleryItem = ({ image, onClickModal }) => {
    const { id, tags, webformatURL, largeImageURL } = image;
  
    return (
      <li key={id} className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={() => {
            onClickModal(largeImageURL, tags);
          }}
        />
      </li>
    );
  };
export default ImageGalleryItem;