import profile from "../../assets/images/vilayat_safarov_profile.jpeg";
import AuthorP from "./AuthorP";

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
        <AuthorP />
      </div>
    </div>
  );
}

export default Author;
