import Link from 'next/link';
import { useState } from 'react';
import Burger from './Burger/Burger';
import NavBar from './NavBar';
import styles from './navigation.module.css';
import NavModal from './navModal/NavModal';

function Navigation() {
    const [burgerIsActive, setBurgerIsActive] = useState(false);

    function toggleBurgerIsActive() {
        setBurgerIsActive((prevState) => !prevState);
    }

    return (
        <>
            <div className={styles.navBar}>
                <NavBar />
            </div>
            <div className={styles.navBurger}>
                <Burger
                    burgerIsActive={burgerIsActive}
                    toggleBurgerIsActive={toggleBurgerIsActive}
                />
            </div>
            <NavModal
                burgerIsActive={burgerIsActive}
                toggleBurgerIsActive={toggleBurgerIsActive}
            />
        </>
    );
}

export default Navigation;
