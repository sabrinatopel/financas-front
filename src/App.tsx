import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css"; // Flex
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <PrimeReactProvider>
      <AppRouter />
    </PrimeReactProvider>
  );
}

export default App;
