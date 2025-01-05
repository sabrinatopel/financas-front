
interface Customer {
  id: number;
  descricao: string;
}

export default function PaginatorBasicDemo() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    setCustomers([
      {
        id: 1000,
        descricao: "teste",
      },
    ]);
  }, []);

  return (
    <div className="card">
      <DataTable
        value={customers}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}>
        <Column field="descricao" header="Descrição" style={{ width: "25%" }} />
        <Column field="descricao" header="Digitos" style={{ width: "25%" }} />
        <Column field="descricao" header="Bandeira" style={{ width: "25%" }} />
        <Column field="descricao" header="Banco" style={{ width: "25%" }} />
      </DataTable>
    </div>
  );
}
