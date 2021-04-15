import Link from 'next/link';
import { useState } from 'react';
import Burger from './Burger/Burger';
import NavBar from './NavBar';
import styles from './navigation.module.css';
import NavModal from './navModal/NavModal';
import { motion } from 'framer-motion';

const navBarVariants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: 'easeOut',
    },
  },
};

function Navigation() {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  function toggleBurgerIsActive() {
    setBurgerIsActive((prevState) => !prevState);
  }

  return (
    <>
      <motion.div
        className={styles.navBar}
        variants={navBarVariants}
        initial="hidden"
        animate="visible"
      >
        <NavBar />
      </motion.div>
      <motion.div
        className={styles.navBurger}
        variants={navBarVariants}
        initial="hidden"
        animate="visible"
      >
        <Burger
          burgerIsActive={burgerIsActive}
          toggleBurgerIsActive={toggleBurgerIsActive}
        />
      </motion.div>
      <div className={styles.navModal}>
        <NavModal
          burgerIsActive={burgerIsActive}
          toggleBurgerIsActive={toggleBurgerIsActive}
        />
      </div>
    </>
  );
}

export default Navigation;
