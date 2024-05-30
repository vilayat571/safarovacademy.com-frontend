import { OfferContentComp } from "../../elements/Home/OfferContent";

interface Props {
  compData: OfferContentComp[];
}

const OffercontentComp: React.FC<Props> = (props) => {
  return (
    <>
      {props.compData.map((item: OfferContentComp) => {
        return (
          <div
            key={item.src}
            className="col-span-2 text-white bg-[#171719] rounded-2xl p-12  "
          >
            <div className="flex items-center justify-center    ">
              <img className="object-cover  mb-4" src={item.src} alt="" />
            </div>
            <p
              className=" xl:text-[19px] lg:text-[19px] md:text-[19px] sm:text-[17px]
   text-center xl:font-semibold lg:font-semibold shadow-none p-1 md:font-semibold sm:font-medium mt-4 mb-2  text-[#fff] "
            >
              {item.title}
            </p>
            <div className="flex justify-center items-center">
              <p
                className=" xl:w-7/10 lg:w-7/10 md:w-7/10 sm:w-full 
    lg:text-[17px] md:text-[17px] sm:text-[14px]
    xl:text-[17px] text-center  text-white"
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default OffercontentComp;
