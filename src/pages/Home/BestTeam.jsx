import { useEffect, useState } from "react";

const BestTeam = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/team.json");
        const data = await response.json();
        setItems(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);
  return (
    <div className="">
      <h1 className="text-5xl font-bold text-center text-primary">
        Loved by the world&apos;s best teams
      </h1>
      <div className="flex items-center justify-center">
        <button className="px-10 py-2 border border-[#4262FF] text-[#4262FF] rounded-3xl mt-7 ">
          See all customer stories →
        </button>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
          {items?.map((item, index) => (
            <div key={index} className="space-y-10 w-[350px]">
              <div>
                <img src={item.image} alt="User" />
              </div>
              <div className="">
                <p className="">{item.description}</p>
              </div>
              <div className="flex gap-3">
                <div>
                  <img src={item.user.image} alt="User" />
                </div>
                <div>
                  <p className="text-sm font-normal">{item.user.name}</p>
                  <p className="text-sm font-normal">{item.user.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestTeam;
