function IntroofAsk() {
  return (
    <div
      className="grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4  
    relative top-4 w-full h-auto"
    >
      <div
        className="col-span-1 flex justify-start items-center
      xl:w-11/12 lg:w-11/12 md:w-11/12 sm:w-full
      "
      >
        <div
          className="xl:text-[27px] lg:text-[27px] md:text-[27px] sm:text-2xl
        xl:mb-0 md:mb-0 lg:mb-0 sm:mb-16  tracking-wide  font-semibold "
        >
          <p className="text-[#fff] leading-10">
            Ask me a unique question individually, I will answer you asap.
          </p>
          <br />
          <p className="text-[#C3C3C3] leading-10">
            In order to do that, you must have an account then you will be able
            to ask 🔥
          </p>
        </div>
      </div>
      <div className="col-span-1 flex xl:justify-end lg:justify-end md:justify-end sm:justify-center">
        <img
          className=" object-contain w-[325px] h-[325px]  "
          src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/mic"
          alt=""
        />
      </div>
    </div>
  );
}

export default IntroofAsk;
