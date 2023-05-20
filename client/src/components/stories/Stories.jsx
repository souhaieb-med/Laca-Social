import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const {currentUser} = useContext(AuthContext)
  const stories = [
    {
      id: 1,
      name: "salim la7wel",
      img: "https://images.pexels.com/photos/6953924/pexels-photo-6953924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "samir sankou7",
      img: "https://images.pexels.com/photos/5935239/pexels-photo-5935239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "chikamaru",
      img: "https://images.pexels.com/photos/4458552/pexels-photo-4458552.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="Stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
export default Stories;
