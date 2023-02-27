import PageLink from "../PageLink";
import "./styles.css";

export default function ProductsNav() {
  return (
    <div className="rr-products-nav">
      <PageLink to={"/products/computers"}>Computadores</PageLink>
      <PageLink to={"/products/eletronics"}>Eletrônicos</PageLink>
      <PageLink to={"/products/books"}>Livros</PageLink>
    </div>
  );
}
