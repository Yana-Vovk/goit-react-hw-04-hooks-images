import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import FetchImageByAPI from '../../services/FetchImageByAPI';
import s from './ImageGallery.Module.css';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button';
import LoaderSpinner from '../Loader/Loader';

export default function ImageGallery({ query } ) {
  
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (query === '') {
      console.log('true prevState !== query');
      setCurrentPage(1);
      setImages([]);
      setError(null);
    } else {
      console.log('false prevState !== query');
      fetchImg();
    }
  }, 
  // eslint-disable-next-line
  [query]);
  
  
  useLayoutEffect((prevState) => {
    if (prevState !== currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [currentPage]);

 const fetchImg = () => {
    setIsLoading(true);

   FetchImageByAPI({ query, currentPage })
      .then(query => {
        setImages(prevState => [...prevState, ...query]);
        setCurrentPage(prevState => prevState + 1);
      })
      .catch(() => setError(error))
      .finally(() => setIsLoading(false));
  };

   const toggleModal = () => {
     setShowModal(!showModal);
  }

  const handleModalImage = url => {
    toggleModal();
    setLargeImageURL(url);
  }
  
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div>
        {error && <h1>Try again</h1>}
        <ul className={s.ImageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              onToggleModal={handleModalImage}
              largeImageURL={largeImageURL} />
          ))}
        </ul>

        {isLoading && (
           <LoaderSpinner/>
        )}

        {shouldRenderLoadMoreButton && (
          <Button onClick={fetchImg}/>          
        )}

        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeImageURL} alt="" style={{ width: 900 }} />
          </Modal>
        )}

      </div>
    );
} 

