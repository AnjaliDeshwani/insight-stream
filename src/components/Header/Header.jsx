import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";
import { LightMode, DarkMode } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { Sidebar } from "../Sidebar/Sidebar";
import { useAuth } from "../../context/auth-context";
import { useTheme } from "../../context/theme-context";
import { SearchBar, UserAvatar } from "../index";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(() => !showNav);
  };
  const { token } = useAuth();

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="fixed inset-0 h-16 flex  items-center justify-between gap-80 px-3 md:flex-grow z-30 bg-stone-100 dark:bg-slate-700 shadow-xl">
        <div className="flex items-center">
          <button onClick={toggleNav}>
            <MenuIcon className="h-8 border py-1 px-3 mr-4  font-bold md:hidden" />
          </button>
          <Link to="/" className="flex items-center">
            <div className="font-bold text-2xl md:tracking-wide text-sky-400">
              Insight Stream
            </div>
          </Link>
        </div>
        <SearchBar />
        <div>
          <ul className="flex items-center lg:space-x-8 font-primary font-semibold ">
            <li>
              <button className="px-4 py-2" onClick={toggleTheme}>
                {theme === "dark" ? <LightMode /> : <DarkMode />}
              </button>
            </li>
            <li>
              {token ? (
                <Link to="/profile" className="px-4 py-2">
                  <UserAvatar />
                </Link>
              ) : (
                <Link to="/login" className="px-4 py-2">
                  <PersonIcon />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </header>
      <Sidebar showNav={showNav} toggleNav={toggleNav} />
    </>
  );
};
