import Image from "next/image";
import { useStateValue } from "./stateProvider";

export default function Collectthumb({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: result.id,
    });
  };

  return (
    <div className="relative group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.backdrop_path}`
        }
        height={1000}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <div className="flex justify-between">
          <p className="flex items-center">
            {result.media_type && `${result.media_type} •`}{" "}
            {result.release_date || result.first_air_date} • {result.vote_count}
          </p>
          <p onClick={removeFromBasket} className="text-gray-500">
            remove
          </p>
        </div>
      </div>
    </div>
  );
}
