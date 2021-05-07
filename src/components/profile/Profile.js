import "bootstrap/dist/css/bootstrap.css";
import "./Profile.css";

const sty = { display: "flex" , justifyContent: "center", backgroundColor: "black"}
const styy = { paddingTop: "1px",paddingRight: "1px",paddingBottom: "30px",
  paddingLeft: "30px" }
const Profile = (
  {fullName,
  bio,
  handleAlert,
  proffesion,
  children,}
) => {
  return (
    
  
    <div className="card" style={sty }>
    <div className="m-b-25" style={styy}>{children}</div>
    <div className="card-body">
      <h5 className="card-title">{fullName}</h5>
      <h2 className="card-title">{bio}</h2>
      <h4 className="card-title">{proffesion}</h4>
      <button type="button" className="btn btn-outline-primary"
       onClick={() => handleAlert(" HELLO MR AYMEN  you are welcom")} >click me </button>
    </div>
  </div>
  );
};
export default Profile;