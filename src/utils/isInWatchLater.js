export const isInWatchLater = (id, videoState) => {
  return videoState.watchlater.find((video) => video._id === id);
};
