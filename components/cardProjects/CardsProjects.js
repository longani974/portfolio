import Image from 'next/image';
import React from 'react';
import Button from '../ui/button/Button';
import styles from './cardsProjects.module.css';

function CardsProjects({ data }) {
  return data.map((project, index) => {
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
            layout="fill"
            objectFit="cover"
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

          <a className={styles.btn} href={project.url} target="_blank">
            <Button>Visiter</Button>
          </a>
        </div>
      </div>
    );
  });
}

export default CardsProjects;
