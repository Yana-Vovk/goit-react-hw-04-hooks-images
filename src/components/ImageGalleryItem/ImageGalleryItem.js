import React from 'react';
import s from './ImageGalleryItem.Module.css';

const ImageGalleryItem = ({ webformatURL, onToggleModal, largeImageURL }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={s.ImageGalleryItemImage}
       onClick={() => onToggleModal(largeImageURL)}/>
    </li>
  );
}
 
export default ImageGalleryItem;
