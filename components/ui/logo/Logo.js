import styles from './logo.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const logoVariants = {
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

function Logo() {
  return (
    <div
      className={styles.logo}
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      <Link href="/">Sylvain Riviere</Link>
    </div>
  );
}

export default Logo;
