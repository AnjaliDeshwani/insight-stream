import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const saveToHistoryService = async (video, token, videoDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      { headers: { authorization: token } }
    );
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_HISTORY,
      payload: { history: response.data.history },
    });
  } catch (error) {
    console.error(error);
  }
};
