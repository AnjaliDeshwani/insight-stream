import { ACTION_TYPE } from "../utils/constants";

export const videoReducer = (videoState, action) => {
  switch (action.type) {
    case ACTION_TYPE.INITIAL_DATA_FETCH:
      if (action.payload.videos) {
        return { ...videoState, videos: action.payload.videos };
      }
      if (action.payload.categories) {
        return { ...videoState, categories: action.payload.categories };
      }
      return videoState;

    case ACTION_TYPE.FILTER_CATEGORY:
      return { ...videoState, selectedCategory: action.payload.categoryName };
    default:
      return videoState;
  }
};
