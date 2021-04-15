import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/ui/button/Button';
import styles from './styles.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { animeLetter } from '../../utils';
import { motion } from 'framer-motion';

import { fromLeftVariants, fromRightVariants } from '../../constants/motions';

export default function Contact() {
  const minLengthMsg = 10;
  const maxLengthMsg = 2000;
  const maxLengthTitre = 60;

  useEffect(() => {
    // In my-projects a link has the option scroll = false so as not to break the transition page.
    // We therefore force the scroll at the top. Otherwise the page loads with a scroll at the bottom.
    window.scrollTo(0, 0);
    animeLetter();
  }, []);

  const sendingMsg = {
    progress: <span>Votre message est en cours d'acheminement...</span>,
    delivered: (
      <span>
        Votre message a été délivré. Revenir à la page d'&nbsp;
        <Link href="/">accueil</Link>.
      </span>
    ),
    failed: (
      <span className={styles.errorSend}>
        Oupsss... Votre message n'a pu être envoyé. Contactez moi directement
        par email:&nbsp;
        <a href="mailto:sylv1.riviere@gmail.com">sylv1.riviere@gmail.com</a>
      </span>
    ),
  };

  const [msgStatutEnvoi, setMsgStatutEnvoi] = useState();

  // prettier-ignore
  const { register, handleSubmit, formState: { errors }, reset} = useForm();

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
      setMsgStatutEnvoi(sendingMsg.progress);
      const response = await axios(config);

      if (response.status === 200) {
        reset();
        setMsgStatutEnvoi(sendingMsg.delivered);
      }
    } catch (error) {
      console.log(error);
      setMsgStatutEnvoi(sendingMsg.failed);
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
          <motion.main initial="hidden" animate="visible" exit="hidden">
            <motion.h3 variants={fromLeftVariants}>N'hésitez pas à</motion.h3>
            <motion.h1
              variants={fromLeftVariants}
              className={`${styles.h1Important}  animate`}
            >
              Me contacter
            </motion.h1>
            <motion.form
              className={styles.form}
              onSubmit={handleSubmit(submitHandler)}
              variants={fromRightVariants}
            >
              <label htmlFor="email">Votre Email</label>

              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
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

              <label htmlFor="titre">Le titre de votre message</label>

              {errors.titre && (
                <p className={styles.error}>{errors.titre.message}</p>
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
                <p className={styles.error}>{errors.message.message}</p>
              )}

              <textarea
                type="text"
                name="message"
                id="message"
                className={
                  styles.message + ' ' + (errors.message && styles.inputError)
                }
                placeholder="Votre message."
                {...register('message', {
                  required: 'Pour me contacter veuillez me laisser un message',
                  minLength: {
                    value: minLengthMsg,
                    message: `Votre message doit comporter plus de ${minLengthMsg} caractères`,
                  },

                  maxLength: {
                    value: maxLengthMsg,
                    message: `Votre message doit comporter moins de ${maxLengthMsg} caractères`,
                  },
                })}
              />
              <div className={styles.footerForm}>
                <span className={styles.btn}>
                  <Button w100={true}>Envoyer</Button>
                </span>
                {msgStatutEnvoi}
              </div>
              <div className={styles.image}>
                <Image src="/images/contact.png" width={564} height={216} />
              </div>
            </motion.form>
          </motion.main>
        </div>
      </div>
    </>
  );
}
