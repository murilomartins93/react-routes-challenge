import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import ProductsNav from "../../components/ProductsNav";

export default function Products() {
  return (
    <>
      <MainHeader />
      <ProductsNav />
      <Outlet />
    </>
  );
}
