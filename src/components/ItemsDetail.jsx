function ItemDetail({ item }) {
    if (!item) {
        return <p>Cargando producto...</p>;
    }

    return (
        <div className="container-xl mb-5 d-flex">
            <img
                className=" col-4 img-fluid"
                src={`/img/${item.image}.jpg`}
                alt={item.name}
            />
            <div className="col-8 ms-5 d-flex flex-column justify-content-center">
                <h2 className="text-black fs-1 fw-bold text-uppercase">
                    {item.name}
                </h2>
                <p className="fs-2">{item.description}</p>
                <p className="fw-black text-primary fs-3">
                    Precio: U$A {item.price}
                </p>
                <p className=" fw-bold fs-3">Categoría: {item.category}</p>
            </div>
        </div>
    );
}
export default ItemDetail;
