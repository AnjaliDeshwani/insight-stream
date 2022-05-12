import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const getHistoryService = async (videoDispatch, token) => {
  try {
    const response = await axios.get("/api/user/history", {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_HISTORY,
      payload: { history: response.data.history },
    });
  } catch (error) {
    console.error(error);
  }
};
