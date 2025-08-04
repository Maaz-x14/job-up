import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
