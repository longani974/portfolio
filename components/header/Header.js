import Logo from '../ui/logo/Logo';
import styles from './header.module.css';
import Navigation from '../header/navigation/Navigation';

function Header() {
    return (
        <div className={styles.header}>
            <div className={`innerWrapper ${styles.wrapper}`}>
                <Logo />
                <Navigation />
            </div>
        </div>
    );
}

export default Header;
