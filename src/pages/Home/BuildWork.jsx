import image from "../../images/div.png";
import { useEffect, useState } from "react";
import LearnMoreBtn from "../../components/LearnMoreBtn";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const BuildWork = () => {
  const [categories1, setCategories1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/categories.json");
        const data = await response.json();
        setCategories1(data.categories_1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-bold text-left">
        Built for the way you work
      </h1>
      <Tabs defaultIndex={1}>
        <TabList className="flex flex-wrap gap-2 items-center mt-3">
          {categories1?.map((category, index) => (
            <Tab
              key={index}
              className="space-y-4 font-normal text-sm border rounded-3xl px-3 py-2 "
            >
              {category.name}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <div className="flex flex-col lg:flex-row gap-5 items-start mt-10">
            <div className="space-y-4">
              <h3 className="font-normal text-lg">Brainstorming</h3>
              <p className="font-normal text-lg w-1/2">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div className="">
              <img src={image} alt="div image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row gap-5 items-start mt-10">
            <div className="space-y-4">
              <h3 className="font-normal text-lg">Diagramming</h3>
              <p className="font-normal text-lg w-1/2">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div className="">
              <img src={image} alt="div image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row gap-5 items-start mt-10">
            <div className="space-y-4">
              <h3 className="font-normal text-lg">Meetings & Workshops</h3>
              <p className="font-normal text-lg w-1/2">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div className="">
              <img src={image} alt="div image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row gap-5 items-start mt-10">
            <div className="space-y-4">
              <h3 className="font-normal text-lg">Scrum Events</h3>
              <p className="font-normal text-lg w-1/2">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div className="">
              <img src={image} alt="div image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row gap-5 items-start mt-10">
            <div className="space-y-4">
              <h3 className="font-normal text-lg">Mapping</h3>
              <p className="font-normal text-lg w-1/2">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div className="">
              <img src={image} alt="div image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row gap-5 items-start mt-10">
            <div className="space-y-4">
              <h3 className="font-normal text-lg">Research & Design</h3>
              <p className="font-normal text-lg w-1/2">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div className="">
              <img src={image} alt="div image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row gap-5 items-start mt-10">
            <div className="space-y-4">
              <h3 className="font-normal text-lg">Strategic Planning</h3>
              <p className="font-normal text-lg w-1/2">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div className="">
              <img src={image} alt="div image" />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col lg:flex-row gap-5 items-start mt-10">
            <div className="space-y-4">
              <h3 className="font-normal text-lg">Brainstorming</h3>
              <p className="font-normal text-lg w-1/2">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <LearnMoreBtn></LearnMoreBtn>
            </div>
            <div className="">
              <img src={image} alt="div image" />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BuildWork;
