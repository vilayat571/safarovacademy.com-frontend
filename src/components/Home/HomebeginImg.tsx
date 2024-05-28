import imgOfReact from '../../assets/images/react-performance.png';

function HomebeginImg() {
  return (
    <div className="col-span-2 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-16 flex xl:justify-end lg:justify-end md:justify-start sm:justify-start ">
      <img
        className=" object-contain "
        src={imgOfReact}
        alt="React Performance Analys"
      />
    </div>
  );
}

export default HomebeginImg;
