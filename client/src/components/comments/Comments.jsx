import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
    const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      name: "sla7 farzit",
      desc: "barra mrigel",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/5711930/pexels-photo-5711930.jpeg",
    },
    {
      id: 2,
      name: "kim jang young",
      desc: "nihaw",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/4126749/pexels-photo-4126749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "karim benzima",
      desc: "suuuuuuuuui",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/6954208/pexels-photo-6954208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};
export default Comments;
