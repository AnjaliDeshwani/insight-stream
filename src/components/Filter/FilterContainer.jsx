import { useVideo } from "../../context/video-context";
import { Filter } from "./Filter";

export const FilterContainer = () => {
  const {
    videoState: { categories },
  } = useVideo();

  return (
    <div className="mt-3 flex flex-wrap gap-5">
      <Filter categoryName="All" />
      {categories.map(({ _id, categoryName }) => (
        <Filter categoryName={categoryName} key={_id} />
      ))}
    </div>
  );
};
