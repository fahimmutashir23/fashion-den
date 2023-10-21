import banner from "../../assets/becomeamember.jpg";

const BecomeAMember = () => {
  return (
    <div>
      <div
        className="hero h-96 rounded-lg"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-gradient-to-l from-gray-200 dark:from-slate-800 bg-opacity-60 rounded-lg"></div>
        <div className="">
          <div className="max-w-4xl text-center">
            <h1 className="dark:text-green-200 font-semibold text-3xl md:text-4xl ">
              BECOME A MEMBER
            </h1>
            <h3 className="dark:text-green-200 font-semibold text-2xl">
              Join now and get 10% off your next purchase.
            </h3>
            <form className="">
              <div className="form-control mt-5">
                <label className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="input ml-10 lg:ml-24"
                  />
                  <span>GO</span>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAMember;
