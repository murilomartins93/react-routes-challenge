import { Outlet } from "react-router-dom";
import MainHeader from "../../components/MainHeader";

export default function Home() {
  return (
    <>
      <MainHeader />
      <Outlet></Outlet>
    </>
  );
}
