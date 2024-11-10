import { back_arrow_icon } from "@/assets";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

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
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      const data = await response.json();
      console.log(data);
      setApiData(data.results[0]);
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img
        src={back_arrow_icon}
        alt="Back_arrow"
        className="absolute top-5 left-5 w-[50px] cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <iframe
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        allowFullScreen
        className="rounded-xl"
      ></iframe>
      <div className="player-info flex items-center justify-between w-[90%]">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
