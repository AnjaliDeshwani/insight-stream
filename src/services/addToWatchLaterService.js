import axios from "axios";
import { ACTION_TYPE, toastHandler } from "../utils/";

export const addToWatchLaterService = async (video, token, videoDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      { headers: { authorization: token } }
    );
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_WATCH_LATER,
      payload: { watchlater: response.data.watchlater },
    });
    toastHandler("success", "Added to Watch Later");
  } catch (error) {
    toastHandler("error", "Something went wrong");
    console.error(error);
  }
};
