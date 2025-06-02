import React from 'react';
import ItemsListContainer from '../components/ItemsListContainer';

function PageHome({ selectedCategory }) {
    return (
        <>
            <ItemsListContainer
                category={selectedCategory}
                title="Sitio desarrollado con ReactJs & Vite"
            />
        </>
    );
}

export default PageHome;
