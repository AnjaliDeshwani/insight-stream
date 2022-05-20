import {
  Home,
  Explore,
  PlaylistAdd,
  ThumbUp,
  History,
  WatchLater,
} from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

export const Sidebar = ({ showNav, toggleNav }) => {
  const toggleActive = ({ isActive }) => {
    return `flex w-full items-center px-1 ${
      isActive ? " bg-sky-400 rounded-md" : ""
    }`;
  };

  return (
    <nav
      className={`fixed top-16 transform z-30 ${
        !showNav ? " -translate-x-full opacity-0" : " opacity-100"
      } md:transform-none md:opacity-100  w-[13rem] md:w-64 bg-stone-100 dark:bg-slate-700 shadow-md h-screen p-61 duration-200`}
    >
      <ul className="mt-8 mx-5 flex flex-col gap-6">
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold w-full">
          <NavLink to="/" className={toggleActive}>
            <Home className="h-6 w-6" />
            <span className="block px-4 py-2 w-full">Home</span>
          </NavLink>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold w-full">
          <NavLink to="/explore" className={toggleActive}>
            <Explore className="h-6 w-6" />
            <span className="block px-4 py-2 w-full">Explore</span>
          </NavLink>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold w-full">
          <NavLink to="/playlist" className={toggleActive}>
            <PlaylistAdd className="h-6 w-6" />
            <span className="block px-4 py-2 w-full">Playlists</span>
          </NavLink>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold w-full">
          <NavLink to="/likedVideos" className={toggleActive}>
            <ThumbUp className="h-6 w-6" />
            <span className="block px-4 py-2 w-full">Liked Videos</span>
          </NavLink>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold w-full">
          <NavLink to="/history" className={toggleActive}>
            <History className="h-6 w-6" />
            <span className="block px-4 py-2 w-full"> History</span>
          </NavLink>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold w-full">
          <NavLink to="/watchLater" className={toggleActive}>
            <WatchLater className="h-6 w-6" />
            <span className="block px-4 py-2 w-full"> Watch Later</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
