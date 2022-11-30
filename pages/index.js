import { useRef, useState } from "react";

const BuluHomePage = () => {
  const [movies, setMovies] = useState([{ id: "" }]);
  const [isLoading, setIsLoading] = useState(false);

  const inputMovieRef = useRef();

  const getMovieHandler = async (e) => {
    e.preventDefault();

    const inputMovieRefValue = inputMovieRef.current.value;

    // Handle empty string here
    if (inputMovieRefValue === "") {
      alert("Invalid Input");
    } else {
      // move API key in .env
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ae0cecc2f7ae230acde5101cb7218ae9&language=en-US&query=${inputMovieRefValue}&page=1&include_adult=false`
      );
      const data = await response.json();
      console.log(data.results);
      setIsLoading(false);

      return setMovies(data.results);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex">
        <h1 className="bg-white text-3xl text-black">Welcome to BULU</h1>
        <form>
          <input type="text" ref={inputMovieRef} />
          <button type="submit" onClick={getMovieHandler}>
            Get Data
          </button>
        </form>
      </div>

      {/*  pass all of these to card component */}
      <div className="flex justify-center items-center">
        <div className="p-4">{<p>The Movie ID: {movies[0].id}</p>}</div>
        <div className=" p-4">
          {<p>The Movie Name: {movies[0].original_title}</p>}
        </div>
        <div className=" p-4">
          {<p>The Movie Popularity: {movies[0].popularity} %</p>}
        </div>
      </div>
      <div>{<p>Overview: {movies[0].overview}</p>}</div>
    </>
  );
};

export default BuluHomePage;
