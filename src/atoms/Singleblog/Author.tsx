import profile from "../../assets/images/vilayat_safarov_profile.jpeg";
import AuthorP from "./AuthorP";

function Author() {
  return (
    <div className="xl:mx-10 lg:mx-10 md:mx-4 sm:mx-0 mt-12 ">
      <div>
        <div>
          <img
            src={profile}
            alt="Vilayat Safarof's profile photo"
            className="xl:w-52 lg:w-52 md:w-52 sm:w-44 h-40 object-cover rounded-lg inline "
          />
        </div>
        <AuthorP />
      </div>
    </div>
  );
}

export default Author;
