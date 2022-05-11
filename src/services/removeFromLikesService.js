import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const removeFromLikesService = async (id, token, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${id}`, {
      headers: { authorization: token },
    });
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_LIKES,
      payload: { likes: response.data.likes },
    });
  } catch (error) {
    console.error(error);
  }
};
