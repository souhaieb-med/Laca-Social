import Post from "../post/Post";
import "./posts.scss";
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "seif charfi",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/4050437/pexels-photo-4050437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta repellendus quia adipisci expedita porro autem, quisquam similique fugiat quas! Harum praesentium quos dolorem, sed placeat totam fugiat quia aut? ",
      img: "https://images.pexels.com/photos/5553094/pexels-photo-5553094.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "cristiano lorando",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/6953586/pexels-photo-6953586.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "manich fake jemla ",
    },
  ];
  return <div className="Posts">
    {posts.map(post=>(
    <Post post={post} key={post.id}/>
    ))}
  </div>;
};
export default Posts;

