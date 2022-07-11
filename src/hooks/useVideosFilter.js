import { useVideo } from "../context/video-context";
import { filterByCategory, filterBySearchedText } from "../utils";

export const useVideosFilter = () => {
  const { videoState } = useVideo();
  let filteredVidoes = [...videoState.videos];

  filteredVidoes = filterBySearchedText(
    filteredVidoes,
    videoState.searchedText
  );
  filteredVidoes = filterByCategory(
    filteredVidoes,
    videoState.selectedCategory
  );
  return filteredVidoes;
};
