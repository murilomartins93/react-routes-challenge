import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main>
        <h1 className="rr-container rr-mt20 rr-page-title">Bem-vindos!</h1>
      </main>
    </>
  );
}
