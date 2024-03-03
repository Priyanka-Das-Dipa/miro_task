import { FaArrowRight } from "react-icons/fa6";
import image from "../../images/div.png";

const BuildWork = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-left">
        Built for the way you work
      </h1>
      <div className="flex items-center">
        <div className="space-y-4">
          <h3 className="font-normal text-lg">Brainstorming</h3>
          <p className="font-normal text-lg">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>
          <button className="underline text-[#4262FF] flex items-center mt-6">
            {" "}
            Learn more <FaArrowRight />{" "}
          </button>
        </div>
        <div>
          <img src={image} alt="div image" />
        </div>
      </div>
    </div>
  );
};

export default BuildWork;
