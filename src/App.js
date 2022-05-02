import "./App.css";
import { Header } from "./components";
import { NavRoutes } from "./routes/NavRoutes";

function App() {
  return (
    <div className="App text-white">
      <Header />
      <NavRoutes />
    </div>
  );
}

export default App;
