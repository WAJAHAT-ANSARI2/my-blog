import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Zero-Day Exploit",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    content: "Full details about zero-day exploit..."
  },
  {
    id: 2,
    title: "Ransomware Attack",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    content: "Full details about ransomware..."
  }
];

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <h1>Not Found</h1>;

  return (
    <div className="bg-black text-white min-h-screen">

      <button
        onClick={() => navigate("/")}
        className="text-red-500 p-4"
      >
        ← Back
      </button>

      <img src={post.img} className="w-full h-[300px] object-cover" />

      <div className="p-6">
        <h1 className="text-red-500 text-2xl mb-4">{post.title}</h1>
        <p className="text-gray-300">{post.content}</p>
      </div>

    </div>
  );
};

export default Post;