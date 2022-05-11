export const isInLikedVideos = (id, videoState) => {
  return videoState.likes.find((video) => video._id === id);
};
