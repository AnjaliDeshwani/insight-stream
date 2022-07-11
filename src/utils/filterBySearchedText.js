export const filterBySearchedText = (videos, searchedText) => {
  if (searchedText.trim() === "") return videos;
  return videos.filter((video) =>
    video.title.toLowerCase().includes(searchedText.toLowerCase().trim())
  );
};
