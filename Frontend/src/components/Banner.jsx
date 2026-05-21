const Banner = () => {
  return (
    <>
      <div className="container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
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
          </div>
        </div>
        <div className="w-full md:w-1/2">Right</div>
      </div>
    </>
  );
};

export default Banner;
