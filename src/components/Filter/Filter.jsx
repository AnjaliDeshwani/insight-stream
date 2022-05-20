import { useVideo } from "../../context/video-context";
import { ACTION_TYPE } from "../../utils/constants";

export const Filter = ({ categoryName }) => {
  const { videoState, videoDispatch } = useVideo();

  const isActive = () => {
    return (
      categoryName === videoState.selectedCategory ||
      (categoryName === "All" && videoState.selectedCategory === "")
    );
  };

  return (
    <div
      className={`py-1 px-3 rounded-lg bg-slate-900 dark:bg-slate-50 dark:text-slate-900 text-slate-50 cursor-pointer hover:bg-sky-400 self-baseline ${
        isActive(categoryName) ? "bg-sky-400 dark:bg-sky-400" : ""
      }`}
      onClick={() =>
        videoDispatch({
          type: ACTION_TYPE.FILTER_CATEGORY,
          payload: { categoryName: categoryName },
        })
      }
    >
      {categoryName}
    </div>
  );
};
