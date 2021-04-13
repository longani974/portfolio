import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';
import { useEffect } from 'react';
import Button from '../components/ui/button/Button';
import ManAndCatImage from '../components/ui/manAndCatImage/ManAndCatImage';
import Link from 'next/link';

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

  useEffect(() => {
    let istag = false;
    const lettersSelector = document.querySelector('.animate');

    const letters = lettersSelector.innerHTML.split('');
    const animateLetters = letters.map((letter) => {
      if (letter === '<') {
        istag = true;
        return letter;
      }

      if (letter === '>') {
        istag = false;
        return letter;
      }

      if (!istag) {
        if (letter === ' ') {
          return (letter = `<span class="space">${letter}</span>`);
        }

        if (letter !== ' ') {
          return (letter = `<span class=animateLetter>${letter}</span>`);
        }
      } else return letter;
    });

    lettersSelector.innerHTML = animateLetters.join('');
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
          <div className={styles.titleBox}>
            <h3>Bonjour, je suis Sylvain.</h3>
            <h1 className="animate">
              Développeur web{' '}
              <span style={{ whiteSpace: 'nowrap' }}>front-end</span>
            </h1>
            <div className={styles.trait}>
              <Image src="/images/trait.svg" width={296} height={27} />
            </div>
            <h4>Saint-Pierre, Ile de la Réunion</h4>
            <Link href="/mes-projets">
              <a>
                <Button>Mes projets</Button>
              </a>
            </Link>
          </div>
          <div className={styles.manAndCatImage}>
            <ManAndCatImage />
            {/* <div className={styles.imgPc}>
              <Image
                src="/images/Desktop-Dark-Active.png"
                width={239}
                height={168}
              />
            </div> */}
          </div>
        </main>
      </div>
    </>
  );
}
