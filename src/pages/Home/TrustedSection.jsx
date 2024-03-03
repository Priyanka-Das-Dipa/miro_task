
import img1 from "../../images/Walmart_Index_Only.svg.png"
import img2 from "../../images/cisco.svg.png"
import img3 from "../../images/Volvo_Index_Only.svg.png"
import img4 from "../../images/deloitte.svg.png"
import img5 from "../../images/okta.svg.png"
const TrustedSection = () => {
    return (
        <div className=" p-5  container mx-auto">
            <h1 className="text-center mb-5">Trusted by 45M+ users</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 justify-between items-center">
                <img src={img1} alt="trusted_Image" />
                <img src={img2} alt="trusted_Image" />
                <img src={img3} alt="trusted_Image" />
                <img src={img4} alt="trusted_Image" />
                <img src={img5} alt="trusted_Image" />
            </div>
        </div>
    );
};

export default TrustedSection;