import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";
import { LightMode } from "@mui/icons-material";
import { Sidebar } from "../Sidebar/Sidebar";
import { useAuth } from "../../context/auth-context";
export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(() => !showNav);
  };
  const { token } = useAuth();

  return (
    <>
      <header className="fixed inset-0 h-16 flex  items-center  px-3 bg-slate-700 md:flex-grow z-30">
        <div className="flex items-center">
          <button onClick={toggleNav}>
            <MenuIcon className="h-8 border py-1 px-3 mr-4 text-white font-bold md:hidden" />
          </button>
          <Link to="/" className="flex items-center">
            <div className="font-bold text-xl text-sky-400">Insight Stream</div>
          </Link>
        </div>
        <div className="ml-auto ">
          <ul className="flex items-center lg:space-x-8 font-primary font-semibold text-white ">
            <li className="">
              <Link to="/home" className="px-4 py-2">
                <LightMode className="h-8" />
              </Link>
            </li>
            <li className="">
              {token ? (
                <Link to="/profile" className="px-4 py-2">
                  Profile
                </Link>
              ) : (
                <Link to="/login" className="px-4 py-2">
                  Login
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
