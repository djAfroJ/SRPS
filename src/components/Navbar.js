import image from "../projectContainer/assets/kasulogo.png";

const Navbar = () => {
  return (
    <>
      <div className="Header">
        <div className="logoBar">
          <img src={image} alt="kasulogo" className="kasulogo" />
        </div>
        <div className="schoolName">
          <h1>KADUNA STATE UNIVERSITY</h1>
          <h3>Statement of result processing portal</h3>
        </div>
      </div>
      {/* <div className="image2">
        
      </div> */}
    </>
  );
};

export default Navbar;
