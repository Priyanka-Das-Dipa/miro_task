
import img from "../../images/M3_integrations_all_integrations.png.png";
import LearnMoreBtn from "../../components/LearnMoreBtn";

const ConnectTools = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <img src={img} alt="section image" />
      </div>
      <div className="w-1/2 space-y-5">
        <h1 className="text-5xl font-bold">Connect <br /> your tools, <br />close your tabs</h1>
        <p className="">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
       <LearnMoreBtn></LearnMoreBtn>
      </div>
    </div>
  );
};

export default ConnectTools;
