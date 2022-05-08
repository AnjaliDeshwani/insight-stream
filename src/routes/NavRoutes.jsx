import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {
  Login,
  Signup,
  Home,
  Explore,
  History,
  LikedVideos,
  Playlist,
  WatchLater,
  Profile,
  SingleVideo,
  ErrorPage,
} from "../pages";

export const NavRoutes = () => {
  return (
    <div className="md:ml-64 mt-16 min-h-[calc(100vh-4rem)] bg-slate-900 ">
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
