import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import s from './Loader.Module.css';

export default function LoaderSpinner () {
    return (
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
        className={s.loader}
      />
    );
}  