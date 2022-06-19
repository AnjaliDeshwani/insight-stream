import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/video-context";
import { ACTION_TYPE } from "../../utils";
import { useState, useRef } from "react";

export const SearchBar = () => {
  const { videoDispatch } = useVideo();
  const navigate = useNavigate();
  const searchRef = useRef();

  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const searchTextUpdate = (e) => {
    videoDispatch({
      type: ACTION_TYPE.SEARCH,
      payload: { searchedText: searchRef.current.value },
    });
    navigate("/explore");
  };

  const searchChangeHandler = debounce(searchTextUpdate, 500);

  const clearSearchedText = () => {
    searchRef.current.value = "";
    videoDispatch({
      type: ACTION_TYPE.SEARCH,
      payload: { searchedText: "" },
    });
  };

  return (
    <div className="flex gap-1 p-2 border-sky-500 border-[2px] rounded-md flex-grow focus-within:border-[3px]">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search Videos..."
        className="bg-transparent outline-none flex-grow"
        onChange={searchChangeHandler}
        ref={searchRef}
      />
      {searchRef.current?.value && (
        <CloseIcon
          className="ml-auto cursor-pointer"
          onClick={clearSearchedText}
        />
      )}
    </div>
  );
};
