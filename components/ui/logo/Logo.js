import styles from './logo.module.css';
import Link from 'next/link';

function Logo() {
    return (
        <div className={styles.logo}>
            <Link href="/">Sylvain Riviere</Link>
        </div>
    );
}

export default Logo;
