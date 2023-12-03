import { lazy, useContext } from "react";
import { data } from "../../data";
import { WishlistContext } from "../../context/context";

const CardProductList2 = lazy(() =>
  import("../../components/card/CardProductList2")
);

const WishlistView = () => {
  const {wishlist} = useContext(WishlistContext);
  return (
      <div className="container mb-3">
      <h4 className="my-3">Wishlists</h4>
      <div className="row g-3">
        {!wishlist?"No Items Added":
        
          wishlist?.map((product, idx) => {
            return (
              <div key={idx} className="col-md-6">
                <CardProductList2 data={product} />
              </div>
            );
          })

        }
      </div>
    </div>
    
  );
};

export default WishlistView;
