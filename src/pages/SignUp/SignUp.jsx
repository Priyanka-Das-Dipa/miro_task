import { Link } from "react-router-dom";
import image from "../../images/signup.jpg";

const SignUp = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center ">
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-2"> Sign In</h1>
          <form action="">
            <div className="space-y-1">
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Your Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Email Address</span>
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Password</span>
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Confirm Password</span>
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
            </div>
            <p>
              Already have an account? Please
              <Link to="/signIn" className="text-blue-600">
                SignIn
              </Link>
            </p>
            <button className="btn mt-5 btn-outline md:w-1/5 w-full btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
