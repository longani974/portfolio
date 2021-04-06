import Navigation from '../header/Header';

function Layout(props) {
    return (
        <>
            <Navigation />
            {props.children}
        </>
    );
}

export default Layout;
