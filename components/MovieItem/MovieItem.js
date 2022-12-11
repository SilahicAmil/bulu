import Image from "next/image";
import MovieCard from "../MovieCard/MovieCard";

const TvShowItem = ({ name, date, popularity, image }) => {
  //   probably need to useEffect to load the images
  // probably use state here so nothing displays untul something is feteched
  //
  //    or get it in the API call and pass it seperately
  //   figure out how to make this a horizontal list

  const readableDate = new Date(date).toLocaleDateString("en-US");
  //   const imagePath = `https://image.tmdb.org/t/p/w500/${image}`;

  console.log(image);

  return (
    <MovieCard>
      <ul>
        <li>
          <Image
            src="/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg"
            alt={name ? name : "unsplash photo"}
            width={500}
            height={500}
          />
          <div>
            <h1>Title: {name}</h1>
          </div>
          <div>
            <span>Release Date: {readableDate}</span>
          </div>
          <div>
            <h2>Popularity: {popularity}</h2>
          </div>
        </li>
      </ul>
    </MovieCard>
  );
};

export default TvShowItem;
