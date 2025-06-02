import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Page404 from './page/Page404';
import PageHome from './page/PageHome';
import { useState } from 'react';
import ItemsDetailContainer from './components/ItemsDetailcontainer';
import ItemsListContainer from './components/ItemsListContainer';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout setSelectedCategory={setSelectedCategory} />
                        }>
                        <Route
                            index
                            element={
                                <PageHome selectedCategory={selectedCategory} />
                            }
                        />
                        <Route
                            path="/detalles/:id"
                            element={<ItemsDetailContainer />}
                        />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
