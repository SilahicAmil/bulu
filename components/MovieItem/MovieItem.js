import Image from "next/image";

const TvShowItem = ({ name, date, popularity }) => {
  //   probably need to useEffect to load the images
  // probably use state here so nothing displays untul something is feteched
  //
  //    or get it in the API call and pass it seperately

  const readableDate = new Date(date).toLocaleDateString("en-US");

  return (
    <div>
      <ul>
        <li>
          <Image
            src="/felix-mooneeram-evlkOfkQ5rE-unsplash.jpg"
            alt={name}
            width={500}
            height={500}
          />
          <div>
            <h1>Title: {name.toUpperCase()}</h1>
          </div>
          <div>
            <span>Release Date: {readableDate}</span>
          </div>
          <div>
            <h2>Popularity: {popularity}</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TvShowItem;
