import NavBar from '../NavBar';
import styles from './navModal.module.css';

function NavModal(props) {
    const { burgerIsActive, toggleBurgerIsActive } = props;

    return (
        <div
            onClick={toggleBurgerIsActive}
            className={styles.navModal}
            style={{ '--modalPosition': `${burgerIsActive ? '0vw' : '-80vw'}` }}
        >
            <NavBar />
        </div>
    );
}

export default NavModal;
