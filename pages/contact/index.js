import Head from 'next/head';
import Image from 'next/image';
import Button from '../../components/ui/button/Button';
import styles from './styles.module.css';

export default function Contact() {
    function submitHandler(e) {
        e.preventDefault();
        console.log('submit');
    }
    return (
        <>
            <Head>
                <title>Portfolio de Sylvain Rivière</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.wrapper}>
                <div className="innerWrapper">
                    <main>
                        <h3>N'hésitez pas à</h3>
                        <h1 className={styles.h1Important}>Me contacter</h1>
                        <form className={styles.form} onSubmit={submitHandler}>
                            <label htmlFor="email">Votre Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Votre email."
                            />
                            <label htmlFor="titre">
                                Le titre de votre message
                            </label>
                            <input
                                type="text"
                                name="titre"
                                id="titre"
                                placeholder="Le titre de votre message."
                            />
                            <label htmlFor="message">Votre message</label>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                className={styles.message}
                                placeholder="Votre message."
                            />
                            <span className={styles.btn}>
                                <Button w100={true}>Envoyer</Button>
                            </span>
                            <div className={styles.image}>
                                <Image
                                    src="/images/contact.png"
                                    width={564}
                                    height={216}
                                />
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
}
