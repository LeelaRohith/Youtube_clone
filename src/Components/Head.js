import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log(searchquery);
    const timer = setTimeout(() => {
      if (searchCache[searchquery])
        setShowSuggestions(searchCache[searchquery]);
      else getSearchSuggestions();
    }, 200);
    return () => clearTimeout(timer);
  }, [searchquery]);
  const getSearchSuggestions = async () => {
    console.log("API CALL" + searchquery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchquery]: json[1] }));
    // console.log(json[1]);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-md">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            handleToggleMenu();
          }}
          className="h-8 cursor-pointer"
          alt="hamburger-icon"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <img
          className="h-6 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full py-2 px-5"
            type="text"
            value={searchquery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border border-gray-400 px-5 bg-gray-100 py-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white  my-2 w-[37rem] rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-300">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-logo"
          src="https://static.thenounproject.com/png/3201587-200.png"
        ></img>
      </div>
    </div>
  );
};
export default Head;
