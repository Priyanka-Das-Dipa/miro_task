import { useEffect, useState } from "react";
import image from "../../images/div (1).png";
import { FaCheck } from "react-icons/fa6";
import LearnMoreBtn from "../../components/LearnMoreBtn";
import icon1 from "../../images/n.png";
import icon2 from "../../images/figma.png";
import icon3 from "../../images/diamond.png";

const BuildTeam = () => {
  const [categories2, setCategories2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/categories.json");
        const data = await response.json();
        setCategories2(data.categories_2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold text-left">
          Built for all kinds of teams
        </h1>
        <div className="flex justify-between items-center mt-3">
          {categories2?.map((category, index) => (
            <div key={index}>
              <div className="space-y-4 ">
                <h3 className="font-normal text-sm border rounded-3xl px-3 py-2 ">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-start justify-between mt-5">
          <div className="space-y-4">
            <h3 className="font-normal text-lg flex gap-1 items-center">
              <FaCheck /> Build low-fi wireframes
            </h3>
            <h3 className="font-normal text-lg flex gap-1 items-center">
              <FaCheck />
              Involve stakeholders in the design process
            </h3>
            <h3 className="font-normal text-lg flex gap-1 items-center">
              <FaCheck />
              Run engaging design workshops
            </h3>
            <LearnMoreBtn></LearnMoreBtn>
            <div className="mt-7 space-y-3">
              <h2 className="font-normal text-lg">
                Integrate your favorite tools
              </h2>
              <div className="flex gap-5">
                <img src={icon3} alt="icon image" />
                <img src={icon2} alt="icon image" />
                <img src={icon1} alt="icon image" />
              </div>
            </div>
          </div>

          <div>
            <img src={image} alt="div image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildTeam;
