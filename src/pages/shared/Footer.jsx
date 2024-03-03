import { Link } from "react-router-dom";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import "./footer.css"

const Footer = () => {
  return (
    <div className="bg-[#02033B]">
      <footer className="footer p-16  text-base-content">
        {/* first row */}
        <nav className="text-white space-y-4">
          <h6 className="text-2xl font-bold">Scan. Detect. Remove.</h6>
          <div className="flex gap-5 mb-2">
            <Link>
              <FaTwitterSquare className="text-4xl" />
            </Link>
            <Link>
              <FaSquareFacebook className="text-4xl" />
            </Link>
            <Link>
              <FaSquareYoutube className="text-4xl" />
            </Link>
          </div>
          <div className="flex gap-5 mb-2">
            <Link className="link link-hover underline">Privacy Policy</Link>
            <Link className="link link-hover underline">Terms of Service</Link>
          </div>
          <div className="space-y-5">
            <p className="">
              Copyright © 2022 Certo Software Limited | Registered in <br />
              England & Wales No. 10072356
            </p>
            <p className="">
              Designed & developed by{" "}
              <span className="underline">Bigger Picture</span>
            </p>
          </div>
        </nav>
        {/* second row */}
        <nav>
          <h6 className="text-2xl text-white font-bold border-b-2 pb-3 mb-5">
            Miro.
          </h6>
          <div className="space-y-3">
            <p className="text-[#FFC247] text-lg font-medium flex items-center gap-1">
              {" "}
              <IoRemoveOutline className="font-medium text-xl" /> iPhone
            </p>
            <p className="text-[#FFC247] text-lg font-medium flex items-center gap-1">
              {" "}
              <IoRemoveOutline className="font-medium text-xl" /> Android
            </p>
            <p className="text-[#FFC247] text-lg font-medium flex items-center gap-1">
              {" "}
              <IoRemoveOutline className="font-medium text-xl" /> Help
            </p>
            <p className="text-[#FFC247] text-lg font-medium flex items-center gap-1">
              {" "}
              <IoRemoveOutline className="font-medium text-xl" /> About
            </p>
            <p className="text-[#FFC247] text-lg font-medium flex items-center gap-1">
              {" "}
              <IoRemoveOutline className="font-medium text-xl" /> Insights
            </p>
          </div>
        </nav>
        {/* third row */}
        <nav>
          <div className="text-left footerImg p-10 rounded-xl space-y-3">
            <h1 className="text-[#02033B] font-bold text-xl">
              Sign up to our newsletter
            </h1>
            <p className="text-[#02033B]">
              Receive the latest mobile security news, exclusive <br />{" "}
              discounts & offers straight to your inbox!
            </p>
            <div className="flex items-center justify-left">
              <input
                type="text"
                placeholder="Email Address"
                className="px-5 py-2 rounded-l-xl"
              />
              <button className="text-white bg-[#02033B] rounded-r-xl px-5 py-2">
                Submit
              </button>
            </div>
          </div>
        </nav>
      </footer>
      <div className="container mx-auto text-white ">
        <p className="md:w-2/3 w-full">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>
    </div>
  );
};

export default Footer;
