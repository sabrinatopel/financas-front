import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <PrimeReactProvider>
      <AppRouter />
    </PrimeReactProvider>
  );
}

export default App;
