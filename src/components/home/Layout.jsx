import { Outlet } from 'react-router-dom';
import '../home/home.css';
import NavBar from '../navBar/NavBar';
import Footer from '../navBar/Footer';

function Layout() {
    return (
        <div className="contenedor">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
