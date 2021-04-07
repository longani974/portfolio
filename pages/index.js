import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
    // Ajoute l'image en background à body et on le supprime lorsque le composant est démonté
    // sinon lorsque l'on change de page le background est tjs apparent
    useEffect(() => {
        const body = document.querySelector('body');
        body.className = 'withBackground';

        return () => {
            body.className = '';
        };
    }, []);

    return (
        <>
            <Head>
                <title>Portfolio de Sylvain Rivière</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/images/background.png"
                    as="image"
                    media="(max-width: 400px)"
                />
            </Head>
            <div className="innerWrapper">
                <main>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                    <h1>Portfolio</h1>
                </main>
            </div>
        </>
    );
}
