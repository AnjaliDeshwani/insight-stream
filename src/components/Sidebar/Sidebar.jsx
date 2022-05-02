import {
  Home,
  Explore,
  PlaylistAdd,
  ThumbUp,
  History,
  WatchLater,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Sidebar = ({ showNav, toggleNav }) => {
  return (
    <nav
      className={`fixed top-16 transform z-30 ${
        !showNav ? " -translate-x-full opacity-0" : " opacity-100"
      } md:transform-none md:opacity-100 z-10 w-64 bg-slate-700 text-white shadow-md h-screen p-61 duration-200`}
    >
      <ul className="mt-8 mx-5 flex flex-col gap-6">
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold">
          <Home className="h-6 w-6" />
          <Link to="/" className="block px-4 py-2">
            Home
          </Link>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold">
          <Explore className="h-6 w-6" />
          <Link to="/explore" className="block px-4 py-2">
            Explore
          </Link>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold">
          <PlaylistAdd className="h-6 w-6" />
          <Link to="/playlist" className="block px-4 py-2 ">
            Playlists
          </Link>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold">
          <ThumbUp className="h-6 w-6" />
          <Link to="/likedVideos" className="block pl-4 py-2 ">
            Liked Videos
          </Link>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold">
          <History className="h-6 w-6" />
          <Link to="/history" className="block pl-4 py-2 ">
            History
          </Link>
        </li>
        <li className="flex items-center hover:bg-sky-400 hover:text-black rounded-md font-semibold">
          <WatchLater className="h-6 w-6" />
          <Link to="/watchLater" className="block pl-4 py-2 ">
            Watch Later
          </Link>
        </li>
      </ul>
    </nav>
  );
};
