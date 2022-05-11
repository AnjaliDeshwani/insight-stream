import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const getWatchLaterService = async (video, token, videoDispatch) => {
  try {
    const response = await axios.get("/api/user/watchlater", {
      headers: { authorization: token },
    });
    console.log(response);
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_WATCH_LATER,
      payload: { watchlater: response.data.watchlater },
    });
  } catch (error) {
    console.error(error);
  }
};
