import React, { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';


export default function App () {
  const [query, setQuery] = useState('');

  const inputSubmitHandler = query => {
    setQuery(query);
  };

    return (
      <div>
        <Searchbar onSubmit={inputSubmitHandler} />
        <ImageGallery query={query} />
      </div>
    )
}


