import React from "react";
import { RoutePaths } from "@/routes/AppRouter";

export default function Header() {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate(RoutePaths.HOME.path);
      },
    },
    {
      label: "Compras",
      icon: "pi pi-star",
      command: () => {
        navigate(RoutePaths.COMPRAS.path);
      },
    },
    {
      label: "Cartão de Credito",
      icon: "pi pi-star",
      command: () => {
        navigate(RoutePaths.CARTAO_CREDITO.path);
      },
    },
    {
      label: "Banco",
      icon: "pi pi-cog",
      command: () => {
        navigate(RoutePaths.BANCO.path);
      },
    },
  ];

  const start = <h4 className="mr-2">Finanças</h4>;

  return <Menubar model={items} start={start} />;
}
