import Link from 'next/link';
import styles from './navigation.module.css';

function Navigation() {
    return (
        <div className={styles.navigation}>
            <ul>
                <Link href="/">
                    <li>Accueil</li>
                </Link>
                <Link href="/mes-projets">
                    <li>Mes projets</li>
                </Link>
                <Link href="/a-propos">
                    <li>Qui suis-je?</li>
                </Link>
                <Link href="/contact">
                    <li>Me contacter</li>
                </Link>
            </ul>
        </div>
    );
}

export default Navigation;
