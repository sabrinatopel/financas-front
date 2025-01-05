import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import Header from "../components/shared/Geral/Header";

// eslint-disable-next-line react-refresh/only-export-components
export const RoutePaths = {
  HOME: { name: "HOME", path: "/", view: HomePage },
  COMPRAS: { name: "COMPRAS", path: "/compras", view: AboutPage },
  BANCO: { name: "BANCO", path: "/banco", view: AboutPage },
  CARTAO_CREDITO: {
    name: "CARTAO_CREDITO",
    path: "/cartao-credito",
    view: AboutPage,
  },
  CARTAO_CREDITO_DETALHE: {
    name: "CARTAO_CREDITO_DETALHE",
    path: "/cartao-credito/:id_cartao",
    view: AboutPage,
  },
};

export const AppRouter = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Header />
      <Routes>
        {Object.values(RoutePaths).map((item) => (
          <Route key={item.name} path={item.path} element={<item.view />} />
        ))}
      </Routes>
    </Router>
  );
};
