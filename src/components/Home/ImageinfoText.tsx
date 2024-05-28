import myImg from "../../assets/images/vilayat_safarov_profile.jpeg";

function ImageinfoText() {
  return (
    <div className="col-span-1">
      <img
        src={myImg}
        className="w-[530px] xl:h-[586px] lg:h-[586px] md:h-[586px] sm:h-[400px] object-cover	rounded-[20px]"
        alt=""
      />
    </div>
  );
}

export default ImageinfoText;
