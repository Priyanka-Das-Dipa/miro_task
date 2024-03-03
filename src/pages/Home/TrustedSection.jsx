import img1 from "../../images/Walmart_Index_Only.svg.png";
import img2 from "../../images/cisco.svg.png";
import img3 from "../../images/Volvo_Index_Only.svg.png";
import img4 from "../../images/deloitte.svg.png";
import img5 from "../../images/okta.svg.png";
const TrustedSection = () => {
  return (
    <div className=" p-5  container mx-auto">
      <h1 className="text-center mb-5">Trusted by 45M+ users</h1>
      <div className=" flex flex-wrap items-center md:justify-evenly gap-3 ">
        <div className="">
          <img src={img1} alt="trusted_Image" />
        </div>
        <div>
          <img src={img2} alt="trusted_Image" />
        </div>
        <div>
          <img src={img3} alt="trusted_Image" />
        </div>
        <div>
          <img src={img4} alt="trusted_Image" />
        </div>
        <div>
          <img src={img5} alt="trusted_Image" />
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
