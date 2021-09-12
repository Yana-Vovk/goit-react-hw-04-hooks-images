import React from 'react';
import s from './Button.Module.css';

const Button = ({ onClick, isLoading }) => (
  <button type="button"
    className={s.Button}
    onClick={onClick}>
    Load more
  </button>
);
 
export default Button;