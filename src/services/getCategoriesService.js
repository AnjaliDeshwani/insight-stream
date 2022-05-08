import axios from "axios";
import { ACTION_TYPE } from "../utils/constants";

export const getCategoriesService = async (videoDispatch) => {
  const response = await axios.get("/api/categories");
  videoDispatch({
    type: ACTION_TYPE.INITIAL_DATA_FETCH,
    payload: { categories: response.data.categories },
  });

  return response.data.categories;
};
