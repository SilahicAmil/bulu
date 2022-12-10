import { useRef, useState } from "react";

import MovieItem from "../components/MovieItem/MovieItem";

const BuluHomePage = () => {
  const [movies, setMovies] = useState([{ id: "" }]);
  const [tvShow, setTvShow] = useState([{ id: "" }]);
  const [isLoading, setIsLoading] = useState(undefined);
  const [isError, setIsError] = useState(null);

  // probably could combine both of these refs
  const inputMovieRef = useRef();
  const inputTvRef = useRef();

  const getMovieHandler = async (e) => {
    e.preventDefault();

    const inputMovieRefValue = inputMovieRef.current.value;

    // Handle empty string here
    if (inputMovieRefValue === "") {
      setIsLoading(false);
      setIsError(true);
      // alert("Invalid Input");
    } else {
      // move API key in .env
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ae0cecc2f7ae230acde5101cb7218ae9&language=en-US&query=${inputMovieRefValue}&page=1&include_adult=false`
      );
      const data = await response.json();
      // console.log(data.results);
      setIsLoading(false);

      return setMovies(data.results);
    }
  };

  const getTvShowHandler = async (e) => {
    e.preventDefault();
    const inputTvRefValue = inputTvRef.current.value;

    if (inputTvRefValue === "") {
      setIsLoading(false);
      // alert("Invalid Input");
    } else {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=ae0cecc2f7ae230acde5101cb7218ae9&language=en-US&page=1&query=${inputTvRefValue}&include_adult=false`
      );

      const data = await response.json();

      // create empty tv array

      console.log(data.results);
      setIsLoading(false);

      return setTvShow(data.results);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex">
        <h1 className="bg-white text-3xl text-black">Welcome to BULU</h1>
        <form>
          <input type="text" ref={inputMovieRef} />
          <button type="submit" onClick={getMovieHandler} className="p-4">
            Get Movie
          </button>
          <input type="text" ref={inputTvRef} />
          <button className="p-4" type="submit" onClick={getTvShowHandler}>
            Get Tv Show
          </button>
        </form>
      </div>

      {/*  pass all of these to card component */}
      <div className="flex justify-center items-center">
        {isError ? <h1>An Error has Occurred!</h1> : null}
        {isLoading ? <p>Loading...</p> : null}
        <div className="p-4">{<p>The Movie ID: {movies[0].id}</p>}</div>
        <div className=" p-4">
          {<p>The Movie Name: {movies[0].original_title}</p>}
        </div>
        <div className=" p-4">
          {<p>The Movie Popularity: {movies[0].popularity} %</p>}
        </div>
      </div>
      <div>{<p>Overview: {movies[0].overview}</p>}</div>
      {/*  */}
      <div className="flex justify-center items-center">
        {isError ? <h1>An Error has Occurred!</h1> : null}
        {isLoading ? <p>Loading...</p> : null}
        <div className="p-4">{<p>The Tv Show ID: {tvShow[0].id}</p>}</div>
        <div className=" p-4">
          {<p>The Tv Show Name: {tvShow[0].original_name}</p>}
        </div>
        <div className=" p-4">
          {<p>The Tv Show Popularity: {tvShow[0].popularity} %</p>}
        </div>
      </div>
      <div>{<p>Overview: {tvShow[0].overview}</p>}</div>
      <MovieItem />
      {/* {tvShow.map((item) => (
        <h1 key={item.id}>{item.original_name}</h1>
      ))} */}
    </>
  );
};

export default BuluHomePage;
