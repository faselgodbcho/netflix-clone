import Navbar from "@/components/Navbar";
import { hero_banner, hero_title, play_icon, info_icon } from "@/assets/";
import TitleCards from "@/components/TitleCards";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative ">
        <img
          src={hero_banner}
          className="w-full h-screen"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 75%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 75%)",
          }}
        />
        <div className="absolute w-full pl-[6%] bottom-0 max-md:pl-[4%]">
          <img
            src={hero_title}
            className="w-[90%] max-w-[420px] mb-[30px] max-md:mb-[10px] max-md:w-[40%] max-sm:hidden"
            alt="Hero_title"
          />
          <p className="max-w-[700px] text-[17px] mb-5 max-md:text-[12x] max-md:mb-[10px]">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-[10px] mb-[50px]  max-lg:mb-[30px]">
            <button className="border-0 hover:bg-[#ffffffbf]  max-sm:px-[10px] max-sm:gap-[5px] max-sm:text-[10px] max-sm:py-[4px] transition outline-0 px-[20px] items-center gap-[10px] text-[15px] text-black font-semibold bg-white rounded cursor-pointer inline-flex py-[8px]">
              <img
                src={play_icon}
                className="w-[25px] max-md:w-5  max-sm:-[15px]"
                alt="Play_icon"
              />
              Play
            </button>
            <button className="border-0 hover:bg-[#6d6d6e66]  max-sm:px-[10px] max-sm:gap-[5px] max-sm:text-[10px] max-sm:py-[4px] transition outline-0 px-[20px] items-center gap-[10px] text-[15px] font-semibold rounded cursor-pointer inline-flex py-[8px] text-[#fff] bg-[#6d6d6eb3]">
              <img
                src={info_icon}
                className="w-[25px] max-md:w-5  max-sm:-[15px]"
                alt="Info_icon"
              />
              More Info
            </button>
          </div>
          <TitleCards className="max-lg:hidden" />
        </div>
      </div>
      <div className="pl-[6%] max-md:pl-[4%]">
        <TitleCards title="Blockbuster Movies" category="top_rated" />
        <TitleCards title="Only on Netflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Topics for you" category="now_playing" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
