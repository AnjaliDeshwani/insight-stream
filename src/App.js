import "./App.css";
import { Header } from "./components";
import { NavRoutes } from "./routes/NavRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/theme-context";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`App  ${
        theme === "dark" ? "dark text-white" : "light text-black"
      }`}
    >
      <Header />
      <NavRoutes />
      <ToastContainer
        position="top-right"
        autoClose="1000"
        style={{ top: "4.5em", right: "0em" }}
      />
    </div>
  );
}

export default App;
