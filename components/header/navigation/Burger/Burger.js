import { useState } from 'react';
import styles from './burger.module.css';

function Burger(props) {
    const { burgerIsActive, toggleBurgerIsActive } = props;

    return (
        <>
            <button
                onClick={toggleBurgerIsActive}
                className={
                    styles.burger + ' ' + (burgerIsActive && styles.active)
                }
            >
                <div className={styles.wrapperBurger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </button>
        </>
    );
}

export default Burger;
