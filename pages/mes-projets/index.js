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

export default function MesProjets({ data }) {
  useEffect(() => {
    // animation on hover h1
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
            {data.map((project, index) => {
              const flexDirection = index % 2 === 0 ? 'row' : 'row-reverse';

              return (
                <div
                  className={styles.projet}
                  id={project.id}
                  key={index}
                  style={{ '--flexDirection': flexDirection }}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      src={`/images/${project.img}`}
                      alt={project.titre}
                      // width={540}
                      // height={540}
                      layout="fill"
                      objectFit="cover"
                      // objectPosition="center"
                    />
                  </div>
                  <div className={styles.contenu}>
                    <h2 className={styles.title}>{project.titre}</h2>

                    {project.text.map((paragraph, j) => (
                      <p className={styles.paragraph} key={j}>
                        {paragraph}
                      </p>
                    ))}

                    <p className={styles.technologies}>
                      Technologies: {project.technologies}
                    </p>

                    <a
                      className={styles.btn}
                      href={project.url}
                      target="_blank"
                    >
                      <Button>Visiter</Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.section>
          <motion.div variants={fromLeftVariants}>
            <CardMeContacter className={styles.cardContact} />
          </motion.div>
          <motion.div
            className={styles.scrollTopBtn}
            variants={fromRightVariants}
          >
            <a href="#">
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
