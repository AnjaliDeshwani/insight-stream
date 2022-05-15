import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { PrivateRoute } from "./PrivateRoute";
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
  PlaylistVideos,
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
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path="/likedVideos"
          element={
            <PrivateRoute>
              <LikedVideos />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlist"
          element={
            <PrivateRoute>
              <Playlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/watchLater"
          element={
            <PrivateRoute>
              <WatchLater />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <PrivateRoute>
              <PlaylistVideos />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
