import { useCallback, useState } from "react";

const BuluHomePage = () => {
  //
  const [movies, setMovies] = useState([]);

  const getMovieHandler = async () => {
    // move API key in .env
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=ae0cecc2f7ae230acde5101cb7218ae9"
    );
    const data = await response.json();
    console.log(data);

    setMovies(data);
  };

  return (
    <>
      <div className="justify-center items-center flex">
        <h1 className="bg-white text-3xl text-black">Welcome to BULU</h1>
        <button onClick={getMovieHandler}>Get Data</button>
        {/* {movies.map((item) => {
        return <p key={item}>{item.id}</p>;
      })} */}
      </div>
      <div className="flex justify-center items-center">
        <div className="p-4">{<p>The Movie ID: {movies.id}</p>}</div>
        <div className=" p-4">
          {<p>The Movie Name: {movies.original_title}</p>}
        </div>
        <div className=" p-4">{<p>The Movie Tagline: {movies.tagline}</p>}</div>
      </div>
    </>
  );
};

export default BuluHomePage;
