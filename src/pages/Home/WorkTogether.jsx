import img from "../../images/hybridwork.png.png";
import LearnMoreBtn from "../../components/LearnMoreBtn";

const WorkTogether = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-center gap-10">
      <div className="space-y-5 md:w-1/2">
        <h1 className="text-5xl font-bold text-primary">
          Work together, <br /> wherever you work
        </h1>
        <p className="text-lg font-normal">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <LearnMoreBtn></LearnMoreBtn>
      </div>
      <div className="">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default WorkTogether;
