import React from 'react';
import { Image, Item, ImageButton } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  largeImageURL,
  handleOpenModal,
}) => {
  return (
    <Item key={id}>
      <ImageButton onClick={() => handleOpenModal({ tags, largeImageURL })}>
        <Image src={webformatURL} alt={tags} />
      </ImageButton>
    </Item>
  );
};
