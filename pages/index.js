import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.css';
import { useEffect } from 'react';
import Button from '../components/ui/button/Button';
import ManAndCatImage from '../components/ui/manAndCatImage/ManAndCatImage';
import Link from 'next/link';
import { animeLetter } from '../utils';
import { motion } from 'framer-motion';
import { fromLeftVariants, fromRightVariants } from '../constants/motions';

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
    // animation on hover h1 used with className="animate"
    animeLetter();
  }, []);

  return (
    <>
      <Head>
        <title>Sylvain Rivière - Développeur Web Front-End</title>
        <meta
          name="description"
          content="Développeur web basé à l'Île de la Réunion. Je code votre site et votre application web avec une préférence pour ReactJS et NextJS. Venez découvrir mes projets."
        ></meta>
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
          <motion.div
            className={styles.titleBox}
            variants={fromLeftVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
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
          </motion.div>
          <motion.div
            className={styles.manAndCatImage}
            variants={fromRightVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ManAndCatImage />
          </motion.div>
        </main>
      </div>
    </>
  );
}
