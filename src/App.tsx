import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import { routes } from "./routes";
import { IRoute } from "./types/route.types";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import FinallyHeader from "./components/finally-header/FinallyHeader";

const App = () => {
   let pathname = useLocation();
   React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   }, [pathname]);

   let homePage = useNavigate();
   React.useEffect(() => {
      homePage("/home/_all");
   }, []);

   return (
      <div>
         {pathname.pathname === "/basket" ? <FinallyHeader /> : <Header />}
         <Routes>
            {routes.map((route: IRoute, index: number) => (
               <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
               />
            ))}
         </Routes>
         <Footer />
      </div>
   );
};

export default App;
