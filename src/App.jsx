import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ItemsDetailContainer from './components/productos/ItemsDetailContainer';
import Cart from './components/Cart/CartWidget';
import { CartProvider } from './components/CartContext/CartContext';
import Layout from './components/home/Layout';
import Page404 from './components/home/Page404';
function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route
                            path="producto/:id"
                            element={<ItemsDetailContainer />}
                        />
                        <Route path="carrito" element={<Cart />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
