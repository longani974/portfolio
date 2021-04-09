import Head from 'next/head';

import styles from './styles.module.css';

import data from '../../data/project.json';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/ui/button/Button';
import CardMeContacter from '../../components/cardMeContacter/CardMeContacter';

export default function MesProjets({ data }) {
    return (
        <>
            <Head>
                <title>Portfolio de Sylvain Rivière</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="innerWrapper">
                <main>
                    <h3>Je vous présente</h3>
                    <h1 className={styles.h1Important}>Mes projets</h1>
                    <section className={styles.projets}>
                        {data.map((project, index) => {
                            const flexDirection =
                                index % 2 === 0 ? 'row' : 'row-reverse';

                            return (
                                <div
                                    className={styles.projet}
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
                                        <h2 className={styles.title}>
                                            {project.titre}
                                        </h2>

                                        {project.text.map((paragraph, j) => (
                                            <p
                                                className={styles.paragraph}
                                                key={j}
                                            >
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
                    </section>
                    <CardMeContacter className={styles.cardContact} />
                    <div className={styles.scrollTopBtn}>
                        <a href="#">
                            <Image
                                src="/images/scroll-top-btn.png"
                                width={94}
                                height={94}
                            ></Image>
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: { data }, // will be passed to the page component as props
    };
}
