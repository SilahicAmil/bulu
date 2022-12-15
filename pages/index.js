import { useEffect, useRef, useState } from "react";

import TvShowItem from "../components/MovieItem/MovieItem";

const BuluHomePage = () => {
  const [tvShow, setTvShow] = useState([{ id: "" }]);
  const [isLoading, setIsLoading] = useState(undefined);
  const [isError, setIsError] = useState(null);

  const inputTvRef = useRef();

  const getTvShowHandler = async (e) => {
    e.preventDefault();
    const inputTvRefValue = inputTvRef.current.value;

    if (inputTvRefValue === "") {
      setIsLoading(false);
      setIsError(true);
    } else {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=ae0cecc2f7ae230acde5101cb7218ae9&language=en-US&page=1&query=${inputTvRefValue}&include_adult=false`
      );

      const data = await response.json();
      console.log(data);

      console.log(data.results);
      setIsLoading(false);

      return setTvShow(data.results);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex">
        <h1 className="bg-white text-3xl text-black">Welcome to BULU</h1>
        <form onSubmit={getTvShowHandler}>
          {!isError ? (
            <input type="text" ref={inputTvRef} />
          ) : (
            <input type="text" ref={inputTvRef} className="bg-red-500" />
          )}
          <button className="p-4" type="submit">
            Get Tv Show
          </button>
        </form>
      </div>

      {isError ? (
        <h1 className="text-red-500">Please Enter a Vald Input</h1>
      ) : null}

      {tvShow.map((item) => (
        <TvShowItem
          key={item.id}
          title={item.title}
          date={item.first_air_date}
          name={item.original_name}
          popularity={item.popularity}
          image={item.poster_path}
        />
      ))}
    </>
  );
};

export default BuluHomePage;
