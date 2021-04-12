import Head from 'next/head';
import Image from 'next/image';
import Button from '../../components/ui/button/Button';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Contact() {
    const minLengthMsg = 10;
    const maxLengthMsg = 2000;
    const maxLengthTitre = 60;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function submitHandler(data) {
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        try {
            const response = await axios(config);
            if (response.data.status === 200) {
                console.log('success');
            }
        } catch (error) {
            console.log(error);
        }
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
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(submitHandler)}
                        >
                            <label htmlFor="email">Votre Email</label>

                            {errors.email && (
                                <p className={styles.error}>
                                    {errors.email.message}
                                </p>
                            )}
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className={errors.email && styles.inputError}
                                placeholder="Votre email."
                                {...register('email', {
                                    required: 'Vous devez entrer votre email.',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Email non valide.',
                                    },
                                })}
                            />

                            <label htmlFor="titre">
                                Le titre de votre message
                            </label>

                            {errors.titre && (
                                <p className={styles.error}>
                                    {errors.titre.message}
                                </p>
                            )}

                            <input
                                type="text"
                                name="titre"
                                id="titre"
                                className={errors.titre && styles.inputError}
                                placeholder="Le titre de votre message."
                                {...register('titre', {
                                    maxLength: {
                                        value: maxLengthTitre,
                                        message: `Le titre doit comporter moins de ${maxLengthTitre} caractères`,
                                    },
                                })}
                            />

                            <label htmlFor="message">Votre message</label>

                            {errors.message && (
                                <p className={styles.error}>
                                    {errors.message.message}
                                </p>
                            )}

                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                className={
                                    styles.message +
                                    ' ' +
                                    (errors.message && styles.inputError)
                                }
                                placeholder="Votre message."
                                {...register('message', {
                                    required:
                                        'Pour me contacter veuillez me laisser un message',
                                    minLength: {
                                        value: minLengthMsg,
                                        message: `Votre message doit compoerter plus de ${minLengthMsg} caractères`,
                                    },

                                    maxLength: {
                                        value: maxLengthMsg,
                                        message: `Votre message doit compoerter moins de ${maxLengthMsg} caractères`,
                                    },
                                })}
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
