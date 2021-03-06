import Head from 'next/head';
import Button from '../../components/ui/button/Button';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';
import { animeLetter } from '../../utils';
import { motion } from 'framer-motion';
import { fromLeftVariants, fromRightVariants } from '../../constants/motions';

export default function APropos() {
  const router = useRouter();

  useEffect(() => {
    // animation on hover h1 used with className="animate"
    animeLetter();
  }, []);

  return (
    <>
      <Head>
        <title>Sylvain Rivière - développeur ReactJS NextJS</title>
        <meta
          name="description"
          content="Je suis un développeur web front end habitant l'Île de la Réunion. Je travaille avec encore plus de motivation quand la technologie est du ReactJS ou du NextJS."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="innerWrapper">
        <motion.main initial="hidden" animate="visible" exit="hidden">
          <motion.h3 variants={fromLeftVariants}>
            La question existentiel
          </motion.h3>
          <motion.h1
            variants={fromLeftVariants}
            className={`${styles.h1Important}  animate`}
          >
            Qui suis-je?
          </motion.h1>
          <motion.div className={styles.container} variants={fromRightVariants}>
            <div className={styles.contenu}>
              <p>
                Je suis Sylvain Rivière, développeur web autodidacte spécialisé
                dans le front-end.{' '}
              </p>
              <p>
                J’ai commencé à m’intéresser au code par simple curiosité fin
                2019, mais très vite, j’ai été pris par la passion. En recherche
                de reconversion professionnelle, j’ai tout de suite compris que
                je devais creuser cette piste.
              </p>
              <p>
                Depuis, j’ai appris énormément, et je ne suis satisfait de mon
                code que lorsque le rendu final correspond exactement à la
                maquette et au cahier des charges.
              </p>
              <p>
                Je code essentiellement en html, css, JavaScript, reactJS et le
                framwork nextJS.
              </p>
              <a onClick={() => router.push('/contact')}>
                <Button>Me contacter</Button>
              </a>
            </div>
            <div className={styles.portrait}>
              <Image
                src="/images/portrait.png"
                alt="sylvain rivière dev web"
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}
