import Image from "next/image";

const MovieItem = ({}) => {
  return (
    <div>
      <ul>
        <li>
          <Image alt="TITLE PHOTO" />
          <div>
            <h1>Title</h1>
          </div>
          <div>
            <p>Orignal Name</p>
            <span>RELEASE DATE</span>
          </div>
          <div>
            <h2>POPULARITY</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MovieItem;
