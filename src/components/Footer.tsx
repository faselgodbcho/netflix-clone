import {
  youtube_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
} from "@/assets";

const Footer = () => {
  return (
    <div className="px[4%] py-[30px] max-w-[1000px] mx-auto my-0">
      <div className="flex gap-5 my-[40px] mx-0">
        <img
          src={instagram_icon}
          className="w-[30px] cursor-pointer  max-md:w-[25px]"
          alt="Instagram_icon"
        />
        <img
          src={facebook_icon}
          className="w-[30px] cursor-pointer  max-md:w-[25px]"
          alt="Facebook_icon"
        />
        <img
          src={twitter_icon}
          className="w-[30px] cursor-pointer  max-md:w-[25px]"
          alt="Twitter_icon"
        />
        <img
          src={youtube_icon}
          className="w-[30px] cursor-pointer  max-md:w-[25px]"
          alt="Youtube_icon"
        />
      </div>
      <ul
        className="grid list-none gap-[15px] mb-[30px]"
        style={{ gridTemplateColumns: "auto auto auto auto" }}
      >
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className="text-gray-400 text-sm">
        &copy; 1997 - {new Date().getFullYear()} Netflix, Inc.
      </p>
    </div>
  );
};

export default Footer;
