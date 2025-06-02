import React from 'react';

function Page404() {
    return (
        <div className="container-xl mt-5">
            <h1 className="text-center my-5">404 - Página no encontrada</h1>
            <p className="text-center">
                Lo sentimos, la pagina que buscas no existe.
            </p>
            <p className="text-center">
                Puedes volver a la{' '}
                <a
                    className="text-uppercase text-decoration-none fw-bold"
                    href="/">
                    pagina principal
                </a>
                .
            </p>
        </div>
    );
}

export default Page404;
