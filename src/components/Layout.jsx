import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout({ setSelectedCategory }) {
    return (
        <div className="contenedor">
            <Header setSelectedCategory={setSelectedCategory} />
            <Outlet />
            <Footer setSelectedCategory={setSelectedCategory} />
        </div>
    );
}

export default Layout;
