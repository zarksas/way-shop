import React from 'react';
import Categories from './categories/Categories';
import style from './Main.module.css';
import Products from './products/Products';

const Main = () => {
    return (
        <div className={style.main}>
            <Categories/>
            <Products/>
        </div>
    );
};

export default Main;