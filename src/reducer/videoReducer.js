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

    case ACTION_TYPE.ADD_TO_HISTORY:
      return { ...videoState, history: action.payload.history };

    case ACTION_TYPE.ADD_TO_LIKES:
      return { ...videoState, likes: action.payload.likes };

    case ACTION_TYPE.ADD_TO_WATCH_LATER:
      return { ...videoState, watchlater: action.payload.watchlater };

    case ACTION_TYPE.ADD_TO_PLAYLISTS:
      return { ...videoState, playlists: action.payload.playlist };

    case ACTION_TYPE.ADD_VIDEO_TO_PLAYLIST:
      return { ...videoState, playlistVideos: action.payload.playlistVideos };
    default:
      return videoState;
  }
};
