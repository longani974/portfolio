import Head from 'next/head';

import styles from './styles.module.css';

import data from '../../data/project.json';
import Image from 'next/image';
import Button from '../../components/ui/button/Button';
import CardMeContacter from '../../components/cardMeContacter/CardMeContacter';
import { useEffect } from 'react';
import { animeLetter } from '../../utils';

import { motion } from 'framer-motion';
import { fromLeftVariants, fromRightVariants } from '../../constants/motions';
import CardsProjects from '../../components/cardProjects/CardsProjects';

export default function MesProjets({ data }) {
  useEffect(() => {
    // animation on hover h1 used with className="animate"
    animeLetter();
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio de Sylvain Rivière</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="innerWrapper">
        <motion.main initial="hidden" animate="visible" exit="hidden">
          <motion.h3 variants={fromLeftVariants}>Je vous présente</motion.h3>
          <motion.h1
            variants={fromLeftVariants}
            className={`${styles.h1Important}  animate`}
          >
            Mes projets
          </motion.h1>
          <motion.section
            className={styles.projets}
            variants={fromRightVariants}
          >
            <CardsProjects data={data} />
          </motion.section>
          <motion.div variants={fromLeftVariants}>
            <CardMeContacter className={styles.cardContact} />
          </motion.div>
          <motion.div
            className={styles.scrollTopBtn}
            variants={fromRightVariants}
          >
            <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Image
                src="/images/scroll-top-btn.png"
                width={94}
                height={94}
              ></Image>
            </a>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { data }, // will be passed to the page component as props
  };
}
