import smirking from '../../assets/images/smirking.png'

const ImgInfocmp = () => {
  return (
    <>
      <p className="xl:text-3xl md:text-3xl lg:text-3xl sm:text-[20px] font-semibold text-white">
        Who I’m{" "}
        <img
          src={smirking}
          className="w-8 inline"
          alt="Who I am"
        />
      </p>
      <p className="xl:text-3xl md:text-3xl lg:text-3xl sm:text-[20px] font-normal xl:mt-12 md:mt-12 lg:mt-8 sm:mt-6 text-white">
        Someone who loves his job and helping people make the world a better
        place.
      </p>
      <p className="xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[18px] font-normal xl:mt-10 md:mt-10 lg:mt-8 sm:mt-6 text-[#c3c3c3]">
        I believe that a well designed website has the power to leave a lasting
        impression. With years of experience in the industry, I’ve had the
        privilege of working with diverse clients, helping them achieve their
        goals.
      </p>
    </>
  );
};

export default ImgInfocmp;
