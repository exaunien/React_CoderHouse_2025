import { Link } from 'react-router-dom';

function Items(props) {
    const { name, image, description, price, category, id } = props;

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img
                    className="img-fluid"
                    src={`/img/${image}.jpg`}
                    alt={`${name} ${category}`}
                />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">
                    {name}
                </h3>
                <p className="fw-bold fs-5">{description}</p>
                <p className="fw-black text-primary fs-3">U$A {price}</p>
                <Link
                    to={`/detalles/${id}`}
                    className="btn btn-primary w-100 text-uppercase fs-3 p-2">
                    Mas información
                </Link>
            </div>
        </div>
    );
}

export default Items;
