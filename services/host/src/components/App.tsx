import { Link, Outlet } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/routes/shop";
import { adminRoutes } from "@packages/shared/src/routes/admin";

export const App = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <h1>PAGE</h1>
      <Link to={shopRoutes.main}>shop</Link>
      <br />
      <Link to={adminRoutes.about}>about</Link>
      <br />
      <Outlet />
    </div>
  );
};
