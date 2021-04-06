import Link from 'next/link';

function NavBar() {
    return (
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
    );
}

export default NavBar;
