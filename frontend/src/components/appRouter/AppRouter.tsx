import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import { Menu } from "../../pages/menu/Menu";
import { MenuCategory } from "../../pages/menuCategory/MenuCategory";
import { Layout } from "../layout/Layout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={App}></Route>
          <Route path="/menu" Component={Menu}></Route>
          <Route path="/menuCategory" Component={MenuCategory}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
