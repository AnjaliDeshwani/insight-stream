import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

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
  } catch (error) {
    console.error(error);
  }
};
