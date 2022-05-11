export const isInLikedVideos = (id, videoState) => {
  console.log(videoState.likes.find((video) => video._id === id));
  return videoState.likes.find((video) => video._id === id);
};
