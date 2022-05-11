import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const getLikedVideosService = async (video, token, videoDispatch) => {
  try {
    const response = await axios.get("/api/user/likes", {
      headers: { authorization: token },
    });
    console.log(response);
    videoDispatch({
      type: ACTION_TYPE.ADD_TO_LIKES,
      payload: { likes: response.data.likes },
    });
  } catch (error) {
    console.error(error);
  }
};
