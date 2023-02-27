import { Outlet } from "react-router-dom";
import ProductsNav from "../../../components/ProductsNav";

export default function Products() {
  return (
    <main>
      <div className="rr-container rr-mt20">
        <ProductsNav />
        <Outlet />
      </div>
    </main>
  );
}
