import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/outline";
import { forwardRef, useState } from "react";
import { useStateValue } from "./stateProvider";

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [choose, setchoose] = useState(0);

  const [state, dispatch] = useStateValue();

  const addTobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: result,
    });
  };

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: result.id,
    });
  };

  return (
    <div
      ref={ref}
      className="group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
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
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •
          {choose === 0 ? (
            <ThumbUpIcon
              onClick={() => {
                setchoose(1);
                addTobasket();
              }}
              className="h-5 mx-2"
            />
          ) : (
            <CheckIcon
              onClick={() => {
                setchoose(0);
                removeFromBasket();
              }}
              className="h-5 mx-2 stroke-2 text-blue-600"
            />
          )}
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
