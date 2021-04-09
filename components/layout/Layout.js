import Navigation from '../header/Header';
import Footer from '../ui/footer/Footer';

function Layout(props) {
    return (
        <>
            <Navigation />
            {props.children}
            <Footer />
        </>
    );
}

export default Layout;
