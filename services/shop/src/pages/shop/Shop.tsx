import { Link } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";

const Shop = () => {
  const title = "Shop";

  return (
    <div>
      <h1>{title}</h1>
      <Link to={shopRoutes.second}>go to second page</Link>
    </div>
  );
};

export default Shop;
