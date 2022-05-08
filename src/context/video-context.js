import { createContext, useContext, useReducer, useEffect } from "react";
import { videoReducer } from "../reducer/videoReducer";
import { getVideosService, getCategoriesService } from "../services";

const VideoContext = createContext();

const initialState = {
  categories: [],
  videos: [],
  selectedCategory: "",
};
const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  useEffect(() => {
    getVideosService(videoDispatch);
    getCategoriesService(videoDispatch);
  }, []);
  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
