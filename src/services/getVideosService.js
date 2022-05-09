import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const getVideosService = async (videoDispatch) => {
  try {
    const response = await axios.get("/api/videos");
    videoDispatch({
      type: ACTION_TYPE.INITIAL_DATA_FETCH,
      payload: { videos: response.data.videos },
    });
  } catch (error) {
    console.error(error);
  }
};
