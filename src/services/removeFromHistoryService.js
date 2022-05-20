import axios from "axios";
import { ACTION_TYPE, toastHandler } from "../utils/";

export const removeFromHistoryService = async (id, token, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${id}`, {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_HISTORY,
      payload: { history: response.data.history },
    });
    toastHandler("warn", "Removed from History");
  } catch (error) {
    toastHandler("error", "Something went wrong");
    console.error(error);
  }
};
