import Head from 'next/head';
import Button from '../../components/ui/button/Button';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';
import { animeLetter } from '../../utils';

export default function APropos() {
  const router = useRouter();

  useEffect(() => {
    animeLetter();
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio de Sylvain Rivière</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="innerWrapper">
        <main>
          <h3>La question existentiel</h3>
          <h1 className={`${styles.h1Important}  animate`}>Qui suis-je?</h1>
          <div className={styles.container}>
            <div className={styles.contenu}>
              <p>
                Je suis Sylvain Rivière, développerur web autodidacte spécialisé
                dans le front-end.{' '}
              </p>
              <p>
                J’ai commencer à m’intéresser au code par simple curiosité fin
                2019, mais très vite j’ai été pris par la passion. En recherche
                de reconversion professionnel, j’ai tout de suite compris que je
                devais creuser cette piste.
              </p>
              <p>
                Depuis j’ai appris énormément, et je ne suis satisfait de mon
                code que lorsque le rendu final correspond exactement à la
                maquette et au cahier des charges.
              </p>
              <p>
                Je code essentielement en html, css, JavaScript, reactJS et le
                framwork nextJS.
              </p>
              <a onClick={() => router.push('/contact')}>
                <Button>Me contacter</Button>
              </a>
            </div>
            <div className={styles.portrait}>
              <Image src="/images/portrait.png" width={400} height={400} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
