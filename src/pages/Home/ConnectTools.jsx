
import img from "../../images/M3_integrations_all_integrations.png.png";
import LearnMoreBtn from "../../components/LearnMoreBtn";

const ConnectTools = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <img src={img} alt="section image" />
      </div>
      <div className="w-1/2 space-y-5">
        <div className="space-y-1">
        <h1 className="text-5xl font-bold">Connect </h1>
        <h1 className="text-5xl font-bold">your tools, </h1>
        <h1 className="text-5xl font-bold">close your tabs</h1>
        </div>
        <p className="">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
       <LearnMoreBtn></LearnMoreBtn>
      </div>
    </div>
  );
};

export default ConnectTools;
