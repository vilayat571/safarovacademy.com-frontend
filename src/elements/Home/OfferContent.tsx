import image1 from "../../assets/images/imageone.png";
import image2 from "../../assets/images/imagetwo.png";

function OfferContent() {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 ssm:grid-cols-2 gap-8">
      <div className="col-span-2 text-white bg-[#171719] rounded-2xl p-12  ">
        <div className="flex items-center justify-center    ">
          <img className="object-cover  mb-4" src={image1} alt="" />
        </div>
        <p
          className=" xl:text-[19px] lg:text-[19px] md:text-[19px] sm:text-[17px]
       text-center xl:font-semibold lg:font-semibold shadow-none p-1 md:font-semibold sm:font-medium mt-4 mb-2  text-[#fff] "
        >
          Web Development
        </p>
        <div className="flex justify-center items-center">
          <p
            className=" xl:w-7/10 lg:w-7/10 md:w-7/10 sm:w-full 
        lg:text-[17px] md:text-[17px] sm:text-[14px]
        xl:text-[17px] text-center  text-white"
          >
            I have 3 years of experience as a front-end developer. I recently
            built a responsive e-commerce website using HTML, CSS, and
            JavaScript. I'm a strong problem-solver and enjoy collaborating with
            designers to bring websites to life.{" "}
          </p>
        </div>
      </div>

      <div className="col-span-2 text-white bg-[#171719]  rounded-[15px] p-12  ">
        <div className="flex items-center justify-center   rounder-[15px]">
          <img className="object-cover  mb-4" src={image2} alt="" />
        </div>
        <p
          className=" xl:text-[19px] lg:text-[19px] md:text-[19px] sm:text-[17px]
       text-center xl:font-semibold lg:font-semibold md:font-semibold sm:font-medium mt-4 mb-2  text-[#fff] "
        >
          UI/UX design
        </p>
        <div className="flex justify-center items-center">
          <p
            className=" xl:w-7/10 lg:w-7/10 md:w-7/10 sm:w-full 
        lg:text-[17px] md:text-[17px] sm:text-[14px]
        xl:text-[17px] text-center  text-white"
          >
            I have 3 years of experience as a front-end developer. I recently
            built a responsive e-commerce website using HTML, CSS, and
            JavaScript. I'm a strong problem-solver and enjoy collaborating with
            designers to bring websites to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferContent;
