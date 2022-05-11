export const isInWatchLater = (id, videoState) => {
  console.log(videoState.watchlater.find((video) => video._id === id));
  return videoState.watchlater.find((video) => video._id === id);
};
