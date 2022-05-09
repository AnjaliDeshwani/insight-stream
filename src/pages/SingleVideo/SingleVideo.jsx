import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { PlaylistAdd, ThumbUp, WatchLater } from "@mui/icons-material";
import { useVideo } from "../../context/video-context";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const { videoState } = useVideo();

  const video = videoState.videos.find((video) => video._id === videoId);
  const { _id, title, channelName, dateOfUpload, description } = video;
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
          <div className="flex gap-1 cursor-pointer">
            <span>
              <ThumbUp className="h-6 w-6" />
            </span>
            <span>Like</span>
          </div>
          <div className="flex gap-1 cursor-pointer">
            <span>
              <WatchLater className="h-6 w-6" />
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
