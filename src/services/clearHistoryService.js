import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const clearHistoryService = async (videoDispatch, token) => {
  try {
    const response = await axios.delete("/api/user/history/all", {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.CLEAR_HISTORY,
      payload: { history: response.data.history },
    });
  } catch (error) {
    console.error(error);
  }
};
