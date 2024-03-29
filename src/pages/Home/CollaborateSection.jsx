import { FaArrowRight } from "react-icons/fa6";

const CollaborateSection = () => {
  return (
    <div className="container relative mx-auto">
      <span className="uppercase absolute left-1/2 -top-16 bg-[#FFD02F] font-bold px-4 py-2 rounded-3xl rotate-6">
        Your Idea Starts Here
      </span>
      <div className="">
        <h1 className="text-center text-5xl text-primary font-bold">
          Collaborate without <br />
          constraints
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div className=" px-12 text-left py-5">
          <h1 className="font-bold text-primary text-2xl">Free forever</h1>
          <p className="text-base mt-5">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            export-made templates. Signing up with your work email lets you
            bring in your team faster. See our <br />{" "}
            <span className="text-[#4262FF]">pricing plans</span> for more
            features.
          </p>
        </div>
        <div className=" px-12 text-left py-5">
          <h1 className="font-bold text-primary text-2xl">Easy integrations</h1>
          <p className="text-base mt-5">
            Miro has 100+ powerful integrations with tools you already use like
            G Suite, Slack, and Jira, so your workflow is seamless. View the
            full list in our{" "}
            <span className="text-[#4262FF]">Marketplace.</span>{" "}
          </p>
        </div>
        <div className=" px-12 text-left py-5">
          <h1 className="font-bold text-primary text-2xl">Security first</h1>
          <p className="text-base mt-5">
            We treat your data like you would - with the utmost care. We fellow
            industry-leading security standards and give you tools to protect
            intellectual property. Learn more to our{" "}
            <span className="text-[#4262FF]">Trust Center</span>.
          </p>
        </div>
      </div>
      <div className="items-center flex justify-center my-5">
        <button
          className="rounded-2xl bg-secondary text-white px-3 
      py-2 flex items-center gap-1 justify-center"
        >
          Sign up free <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CollaborateSection;
