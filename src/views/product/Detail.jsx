import { lazy, useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/context";
// const CardFeaturedProduct = lazy(() =>
//   import("../../components/card/CardFeaturedProduct")
// );
const CardServices = lazy(() => import("../../components/card/CardServices"));
const Details = lazy(() => import("../../components/others/Details"));
const RatingsReviews = lazy(() =>
  import("../../components/others/RatingsReviews")
);
const QuestionAnswer = lazy(() =>
  import("../../components/others/QuestionAnswer")
);
const ShippingReturns = lazy(() =>
  import("../../components/others/ShippingReturns")
);
const SizeChart = lazy(() => import("../../components/others/SizeChart"));

const getDiscount = (value, discount) => {
  
  const originalPrice = Math.round(value * (1 + (discount / 100)))
  const discountPrice = originalPrice - value
  return [originalPrice, discountPrice]


}

const ProductDetailView = () => {
  const {setWishlist, wishlist} = useContext(WishlistContext);
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
     api.get(`products/${id}`).then(res => {

       setProduct(res.data);

     })
  }, [])

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <img
                src={product?.images[0]}
                className="img-fluid mb-3"
                alt=""
              />
            </div>
            <div className="col-md-7">
              <h1 className="h5 d-inline me-2">{product?.title}</h1>
              <span className="badge bg-success me-2">New</span>
              <span className="badge bg-danger me-2">Hot</span>
              <div className="mb-3">
                <i className="bi bi-star-fill text-warning me-1" />
                {product?.rating}
              </div>
              <dl className="row small mb-3">
                <dt className="col-sm-3">Availability</dt>
                <dd className="col-sm-9">{product?.stock > 0? "In stock": "Out of stock"}</dd>
              </dl>

              <div className="mb-3">
                <span className="fw-bold h5 me-2">${product?.price}</span>
                <del className="small text-muted me-2">${getDiscount(product?.price, product?.discountPercentage)[0]}</del>
                <span className="rounded p-1 bg-warning  me-2 small">
                  ${getDiscount(product?.price, product?.discountPercentage)[1]}
                </span>
              </div>
              <div className="mb-3">
                <div className="d-inline float-start me-2">
                  <div className="input-group input-group-sm mw-140">
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                    >
                      <i className="bi bi-dash-lg"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="1"
                    />
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-primary me-2"
                  title="Add to cart"
                >
                  <i className="bi bi-cart-plus me-1"></i>Add to cart
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-warning me-2"
                  title="Buy now"
                >
                  <i className="bi bi-cart3 me-1"></i>Buy now
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  title="Add to wishlist"
                  onClick={() => setWishlist((prevState = []) => {
                    return [...prevState, product]
                  })}
                >
                  <i className="bi bi-heart-fill"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-link active"
                    id="nav-details-tab"
                    data-bs-toggle="tab"
                    href="#nav-details"
                    role="tab"
                    aria-controls="nav-details"
                    aria-selected="true"
                  >
                    Details
                  </a>
                </div>
              </nav>
              <div className="tab-content p-3 small" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-details"
                  role="tabpanel"
                  aria-labelledby="nav-details-tab"
                >
                  <Details description={product?.description} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4">
          <CardFeaturedProduct data={data.products} />
          <CardServices />
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetailView;
