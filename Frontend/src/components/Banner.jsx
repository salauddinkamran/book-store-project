import banner from "../assets/Banner.png";
const Banner = () => {
  return (
    <>
      <div className="container mx-auto md:px-20 min-h-screen px-4 flex items-center justify-center flex-col md:flex-row">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae expedita cupiditate odit molestiae iusto ratione
              quisquam aliquid, similique reiciendis quia rem maiores ullam esse
              rerum vel asperiores nemo consequatur! Ipsum!
            </p>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-secondary -mt-10">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
          <img src={banner} className="w-full" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
