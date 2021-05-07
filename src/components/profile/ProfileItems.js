import Profile from "./Profile.js";
import "bootstrap/dist/css/bootstrap.css";
import "./Profile.css";
import image from "./image.jpg";

const ProfileItems = () => {
    const handleAlert = (name) => {
        alert(name);
      };
  return (
    <div>
      <Profile
        fullName="Tlijani Aymen"
        bio="AYMEN TLIJANI GOMYCODE student . PHOTOGRAPH . "
        handleAlert={handleAlert}
        proffesion = "Photograph"
      >
        <img src={image} alt = "aymen" />
      </Profile>
    </div>
  );
};

export default ProfileItems;