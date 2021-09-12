import React, { useState } from 'react';
import s from './Searchbar.Module.css';

export default function Searchbar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleChange = e => {
        setQuery(e.currentTarget.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        reset();
    }
  
    const reset = () => {
        setQuery('');
    }

        return (
            <header className={s.Searchbar}>
                <form onSubmit={handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={query}
                        onChange={handleChange}
                    />
                </form>
            </header>
        );
}