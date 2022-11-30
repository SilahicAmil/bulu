import { useCallback, useState } from "react";

const BuluHomePage = () => {
  //
  const [movies, setMovies] = useState([]);

  const getMovieHandler = useCallback(async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=ae0cecc2f7ae230acde5101cb7218ae9",
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    const data = await response.json();
    console.log(data);
  }, []);

  return (
    <div className="justify-center items-center flex">
      <h1 className="bg-white text-3xl text-black">Welcome to BULU</h1>
      <button onClick={getMovieHandler}>Get Data</button>
      {/* {movies.map((item) => {
        return <p key={item}>{item}</p>;
      })} */}
      {/* {movies} */}
    </div>
  );
};

export default BuluHomePage;
