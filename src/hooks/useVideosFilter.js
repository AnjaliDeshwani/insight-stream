import { useVideo } from "../context/video-context";
import { filterByCategory } from "../utils";

export const useVideosFilter = () => {
  const { videoState } = useVideo();
  let filteredVidoes = [...videoState.videos];

  filteredVidoes = filterByCategory(
    filteredVidoes,
    videoState.selectedCategory
  );
  return filteredVidoes;
};
