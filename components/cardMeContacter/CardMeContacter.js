import Link from 'next/link';
import Button from '../ui/button/Button';
import styles from './cardMeContacter.module.css';

function CardMeContacter() {
  return (
    <div className={styles.card}>
      <p>
        Mon profil vous intéresse?{' '}
        <span style={{ whiteSpace: 'nowrap' }}>Parlons-en</span>.
      </p>
      <Link href="/contact" scroll={false}>
        <a>
          <Button>Me contacter</Button>
        </a>
      </Link>
    </div>
  );
}

export default CardMeContacter;
