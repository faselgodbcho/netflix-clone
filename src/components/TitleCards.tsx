import cards_data from "@/assets/cards/Cards_data";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({
  title,
  category,
  className = "",
}: {
  title?: string;
  category?: "now_playing" | "popular" | "top_rated" | "upcoming" | undefined;
  className?: string | undefined;
}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef<HTMLDivElement>(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTVlODRmYjE2ZTFjYWQ2YTY0OGZiODBhMjgyMDljNyIsIm5iZiI6MTczMTE1MzA1NC44ODQ3OTg4LCJzdWIiOiI2NzJmNDkzY2E3MWFlYTdjYWZmOWJkNjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z8fUaYGfyaUH8S56SikuvH5HvpgFPP57keD-YgiSNx0",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${
          category ? category : "now_playing"
        }?language=en-US&page=1`,
        options
      );
      const data = await response.json();
      console.log(data);
      setApiData(data.results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleWheel = (e: any) => {
      e.preventDefault();

      if (cardsRef.current) cardsRef.current.scrollLeft += e.deltaY;
    };

    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }

    return () => cardsRef.current?.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className={`mt-[50px] mb-[30px] ${className}`}>
      <h2 className="mb-2 font-bold text-[20px]">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        className="hidden-scrollbar flex gap-[10px] overflow-x-scroll"
        ref={cardsRef}
      >
        {apiData.map((card: any, index) => {
          return (
            <Link to={`/player/${card.id}`} className="relative" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                className="min-w-[240px] rounded cursor-pointer"
                alt={card.original_title}
              />
              <p className="absolute bottom-[10px] right-[10px]">
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
