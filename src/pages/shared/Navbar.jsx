import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { RiGlobalLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-3 border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <details>
                  <summary className="text-lg font-normal">Product</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-lg font-normal">Solutions</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-lg font-normal">Resources</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="text-lg font-normal">Enterprise</a>
              </li>
              <li>
                <a className="text-lg font-normal">Pricing</a>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img src={logo} alt="" />{" "}
          </Link>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary className="text-lg font-normal">Product</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-lg font-normal">Solutions</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-lg font-normal">Resources</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a className="text-lg font-normal">Enterprise</a>
              </li>
              <li>
                <a className="text-lg font-normal">Pricing</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg font-normal hidden lg:flex">
                <RiGlobalLine /> EN
              </a>
            </li>
            <li>
              <a className="text-lg font-normal hidden lg:flex">
                Contact Sales
              </a>
            </li>
          </ul>
          <Link to="/signIn" className="text-lg font-normal mr-3">
            Login
          </Link>

          <Link to="/signUp" className="btn rounded-3xl bg-secondary text-white">
            Sign up free →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
