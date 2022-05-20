import axios from "axios";
import { ACTION_TYPE, toastHandler } from "../utils/";

export const removeFromWatchLaterService = async (id, token, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_WATCH_LATER,
      payload: { watchlater: response.data.watchlater },
    });
    toastHandler("warn", "Removed from Watch Later");
  } catch (error) {
    toastHandler("error", "Something went wrong");
    console.error(error);
  }
};
