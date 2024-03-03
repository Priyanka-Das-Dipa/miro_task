const SignIn = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold"> Sign In</h1>

      <form action="" className="space-y-1">

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
      
        <button className="btn mt-2 btn-outline w-1/3 btn-primary">
                Sign In
        </button>

        
        
      </form>
    </div>
  );
};

export default SignIn;
