import { useState } from "react";

const BuluHomePage = () => {
  const [movies, setMovies] = useState([]);

  const getMovieHandler = async (enteredText) => {
    // move API key in .env
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=ae0cecc2f7ae230acde5101cb7218ae9&language=en-US&query=fight%20club&page=1&include_adult=false"
    );
    const data = await response.json();
    console.log(data.results[0]);

    setMovies(data.results[0]);
  };

  return (
    <>
      <div className="justify-center items-center flex">
        <h1 className="bg-white text-3xl text-black">Welcome to BULU</h1>
        <button onClick={getMovieHandler}>Get Data</button>
      </div>
      {/*  pass all of these to card component */}
      <div className="flex justify-center items-center">
        <div className="p-4">{<p>The Movie ID: {movies.id}</p>}</div>
        <div className=" p-4">
          {<p>The Movie Name: {movies.original_title}</p>}
        </div>
        <div className=" p-4">
          {<p>The Movie Popularity: {movies.popularity} %</p>}
        </div>
      </div>
    </>
  );
};

export default BuluHomePage;
