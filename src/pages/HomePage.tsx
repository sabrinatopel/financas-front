import React from "react";
import { useNavigate } from 'react-router-dom';

export default function TemplateDemo() {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        navigate('/about')
    }
    },
    {
      label: "Compras",
      icon: "pi pi-star",
    },
    {
      label: "Cartão de Credito",
      icon: "pi pi-star",
    },
    {
      label: "Banco",
      icon: "pi pi-cog",
    },
  ];

  const start = (
    <h4>Finanças</h4>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} />
    </div>
  );
}
