import profile from "../../assets/images/vilayat_safarov_profile.jpeg";

function Author() {
  return (
    <div className="xl:mx-10 lg:mx-10 md:mx-4 sm:mx-0">
      <div>
        <div>
          <img
            src={profile}
            alt="Vilayat Safarof's profile photo"
            className="w-52 h-52 object-cover rounded-full inline "
          />
        </div>
        <p className=" xl:w-2/3 lg:w-2/3 md:w-3/4 sm:w-full mt-4 text-sm leading-6 tracking-wider text-[#c3c3c3]">
          <span className="text-lg text-white font-semibold mb-1 mt-2 block">
            Vilayat Safarov
          </span>
          For the past 4 years, I've been a software developer who also enjoys
          designing user interfaces (UI) and user experiences (UX). I've had the
          chance to work on over 30 projects, from large-scale ones like
          customer relationship management (CRM) systems, e-commerce platforms,
          and delivery apps, to smaller projects that helped me hone my skills.
          My main goal is to become a true expert in the field of software
          development
        </p>
      </div>
    </div>
  );
}

export default Author;
