import smirking from "../../assets/images/smirking.png";

const ImgInfocmp = () => {
  return (
    <>
      <p className="xl:text-3xl md:text-3xl lg:text-3xl sm:text-[20px] font-semibold text-white">
        Mən kiməm?
        <img src={smirking} className="w-8 inline" alt="Who I am" />
      </p>
      <p className="xl:text-3xl md:text-3xl lg:text-3xl sm:text-[20px] font-normal mt-6 text-white">
        İşini sevən, özünün və cəmiyyətin inkişafını hədəfləyən bir mühəndis
      </p>
      <p className="xl:text-[22px] lg:text-[22px] md:text-[22px] sm:text-[18px] font-normal mt-6 text-[#c3c3c3]">
        Mən düşünürəm ki, hər bir insanın dünyada icra etməli olduğu bir peşə
        olmalıdır, hansı ki, bu peşə ilə həm özünə, həm də ətrafındakı insanlara
        fayda verə bilər. Nəticə olaraq, mənim bacarıqlarımın informasiya
        texnologiyaları sahəsində inkişaf etməyə meyilli olduğunu gördüm. Əsas
        hədəfim isə həqiqətən faydalı və innovativ texnologiyalar ərsəyə
        gətirən, uğurlu bir mühəndis olaraq karyeramı davam etdirməkdir.
      </p>
    </>
  );
};

export default ImgInfocmp;
