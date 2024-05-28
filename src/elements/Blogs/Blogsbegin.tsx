import globus from "../../assets/images/globus.png";

function Blogsbegin() {
  return (
    <div className="w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      <div className="col-span-2">
        <div className="flex justify-start">
          <p
            className="text-[28px] mt-16 
         tracking-wider leading-10 font-semibold xl:w-5/6 md:w-5/6 lg:w-5/6 sm:w-full "
          >
            Learn new things and improve your skills with great articles.
          </p>
        </div>
        <div className="flex justify-start">
          <p
            className="text-[28px] mt-8 text-[#c3c3c3] 
         tracking-wider font-semibold leading-10 xl:w-5/6 md:w-5/6 lg:w-5/6"
          >
            Find the latest of my writing here. The more your read the more you
            learn 👌
          </p>
        </div>
      </div>

      <div
        className="h-auto col-span-2 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-16
       flex xl:justify-end lg:justify-end md:justify-start sm:justify-start "
      >
        <img className="object-cover h-[380px]" src={globus} alt="" />
      </div>
    </div>
  );
}

export default Blogsbegin;
