import PageLink from "../PageLink";
import "./styles.css";

export default function ProductsNav() {
  return (
    <div className="rr-products-nav rr-container rr-mt20">
      <PageLink to={"/products"}>Computadores</PageLink>
      <PageLink to={"/products"}>Eletrônicos</PageLink>
      <PageLink to={"/products"}>Livros</PageLink>
    </div>
  );
}
