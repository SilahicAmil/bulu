// wrapper component
const MovieCard = ({ children }) => {
  return (
    <div className="flex items-center gap-4 mb-6 justify-center p-6 rounded-lg bg-white text-black">
      {children}
    </div>
  );
};

export default MovieCard;
