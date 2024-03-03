import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-5 items-center justify-between">
        <div className="space-y-3">
          <h1 className="text-[#050038] text-5xl font-bold">
            Take ideas from <br /> better to best
          </h1>
          <p className=" text-[#050038] text-2xl">
            Miro is your team&apos;s visual platform to connect, <br /> collaborate,
            and create — together.
          </p>
          <div>
            <input
              type="text"
              placeholder="Enter your work email"
              className=" rounded-2xl border px-12 py-2"
            />
            <br />
            <button className="rounded-2xl border px-24 py-2 mt-3 bg-[#4262FF] text-white flex items-center gap-1 justify-center">
              Sign up free <FaArrowRight />
            </button>
            <p className="text-xs">Collaborate with your team within minutes</p>
          </div>
          <div className="bg-[#F5F5F7] p-5 md:p-10 flex items-center gap-5 rounded-lg">
            <div>
              <p className="flex text-2xl text-[#FF9D48]">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </p>
              <p className="text-md">Based on 5149+ reviews:</p>
            </div>
            <img src="https://i.ibb.co/bWdNPxb/svg.png" alt="" />
            <p className="text-xl font-bold">GetApp</p>
            <p className="text-xl font-bold">Capterra</p>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/Th3jkrf/headerimage-without-text-png.png"
            alt=" Banner Image"
           className="640px"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
