import { FaArrowRight } from "react-icons/fa6";
import img from "../../images/M3_integrations_all_integrations.png.png";

const ConnectTools = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={img} alt="section image" />
      </div>
      <div className="w-1/2 space-y-5">
        <h1 className="text-5xl font-bold">Connect <br /> your tools, <br />close your tabs</h1>
        <p className="">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
        <button className="underline text-[#4262FF] flex items-center mt-10"> Learn more <FaArrowRight /> </button>
      </div>
    </div>
  );
};

export default ConnectTools;
