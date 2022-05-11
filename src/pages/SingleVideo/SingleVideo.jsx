import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { PlaylistAdd, ThumbUp, WatchLater } from "@mui/icons-material/";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { useVideo } from "../../context/video-context";
import { useAuth } from "../../context/auth-context";
import {
  saveToHistoryService,
  addToLikesService,
  removeFromLikesService,
  addToWatchLaterService,
  removeFromWatchLaterService,
} from "../../services";
import { isInLikedVideos, isInWatchLater } from "../../utils";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const { videoState, videoDispatch } = useVideo();
  const { token } = useAuth();
  const navigate = useNavigate();

  const video = videoState.videos.find((video) => video._id === videoId);
  const { _id, title, channelName, dateOfUpload, description } = video;

  const isLiked = isInLikedVideos(_id, videoState);
  const inWatchLater = isInWatchLater(_id, videoState);

  useEffect(() => {
    saveToHistoryService(video, token, videoDispatch);
  }, [video, token, videoDispatch]);

  const likeHandler = () => {
    if (token) {
      if (isLiked) removeFromLikesService(_id, token, videoDispatch);
      else addToLikesService(video, token, videoDispatch);
    } else navigate("/login");
  };
  const watchLaterHandler = (e) => {
    //e.stopPropagation();
    inWatchLater
      ? removeFromWatchLaterService(_id, token, videoDispatch)
      : addToWatchLaterService(video, token, videoDispatch);
  };
  return (
    <div className="w-[80%] mx-auto p-6">
      <div className="video">
        <ReactPlayer
          style={{
            aspectRatio: 1.7,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          width="100%"
          playing
          controls="true"
          url={`https://www.youtube.com/watch?v=${_id}`}
        />
      </div>
      <div className="flex justify-between items-center my-5">
        <div className="flex flex-col gap-2">
          <div className="font-bold font-primary text-2xl md:text-3xl">
            {title}
          </div>
          <div className="font-semibold text-gray-400">{dateOfUpload}</div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <div className="flex gap-1 cursor-pointer" onClick={likeHandler}>
            <span>
              {isLiked ? (
                <ThumbUp className="h-6 w-6" />
              ) : (
                <ThumbUpAltOutlinedIcon className="h-6 w-6" />
              )}
            </span>
            <span>Like</span>
          </div>
          <div
            className="flex gap-1 cursor-pointer"
            onClick={watchLaterHandler}
          >
            <span>
              {inWatchLater ? (
                <WatchLater className="h-6 w-6" />
              ) : (
                <WatchLaterOutlinedIcon className="h-6 w-6" />
              )}
            </span>
            <span>Watch Later</span>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <span>
              <PlaylistAdd className="h-6 w-6" />
            </span>
            <span>Save</span>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-slate-100"></div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="font-semibold text-lg">{channelName}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
