import Logo from '../ui/logo/Logo';
import styles from './header.module.css';
import Navigation from '../header/navigation/Navigation';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: {
    y: -300,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

function Header() {
  return (
    <div
      className={styles.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`innerWrapper ${styles.wrapper}`}>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
