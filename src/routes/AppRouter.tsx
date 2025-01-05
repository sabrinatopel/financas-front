import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";

// eslint-disable-next-line react-refresh/only-export-components
export const RoutePaths = {
  HOME: { name: "HOME", path: "/*", view: HomePage },
  COMPRAS: { name: "COMPRAS", path: "/compras", view: AboutPage },
  BANCO: { name: "BANCO", path: "/banco", view: AboutPage },
  CARTAO_CREDITO: { name: "CARTAO_CREDITO", path: "/cartao-credito", view: AboutPage },
}
export const AppRouter = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
      {Object.values(RoutePaths).map((item) => (
          <Route key={item.name} path={item.path} element={<item.view />} />
        ))}
      </Routes>
    </Router>
  );
};
