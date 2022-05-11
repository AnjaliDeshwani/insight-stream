import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const removeFromHistoryService = async (id, token, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${id}`, {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_HISTORY,
      payload: { history: response.data.history },
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
