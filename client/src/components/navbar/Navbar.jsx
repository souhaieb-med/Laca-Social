import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="Navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Lacasocial</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <HomeOutlinedIcon />
        </Link>
        {/* <DarkModeOutlinedIcon /> */}
        <Link to="/app" style={{ textDecoration: "none", color: "black" }}>
          <GridViewOutlinedIcon />
        </Link>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
