import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogs } from "../Data/blog"; // ✅ SAME DATA SOURCE

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogs.find((b) => b.id === Number(id));
    setPost(foundPost || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        Post Not Found
      </div>
    );
  }

  return (
    <>
      {/* 🔥 STYLES */}
      <style>{`
        .errors-bg span {
          position: absolute;
          bottom: -20px;
          color: rgba(255,0,0,0.6);
          font-size: 12px;
          animation: rise linear infinite;
        }

        @keyframes rise {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>

      <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden">

        {/* 🔴 BACKGROUND ERRORS */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="errors-bg relative w-full h-full">
            {["ERROR", "ACCESS DENIED", "SYSTEM FAIL", "MALWARE", "ROOT"].map(
              (text, i) => (
                <span
                  key={i}
                  style={{
                    left: `${10 + i * 20}%`,
                    animationDuration: `${5 + i}s`,
                  }}
                >
                  {text}
                </span>
              )
            )}
          </div>
        </div>

        {/* 🔴 NAVBAR */}
        <div className="sticky top-0 z-20 flex justify-between items-center px-12 py-5 bg-black/80 backdrop-blur border-b border-red-900">
          <h1 className="text-red-500 text-2xl font-bold">🐞 NUSK LAB</h1>

          <div className="space-x-8 text-gray-400">
            <Link to="/" className="hover:text-red-500">Blog</Link>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>
          </div>
        </div>

        {/* 🔥 CONTENT */}
        <div className="py-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto relative text-center">

            {/* ❌ CLOSE BUTTON */}
            <button
              onClick={() => navigate("/")}
              className="absolute top-3 right-3 bg-black/70 text-red-600 text-2xl font-bold px-3 py-1 rounded-md border border-red-500 hover:bg-red-600 hover:text-black hover:scale-110 transition duration-300 shadow-[0_0_10px_red]"
            >
              ✕
            </button>

            {/* 🖼 IMAGE (Same as Home) */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-8 hover:scale-105 transition duration-500"
            />

            {/* 🧠 TITLE */}
            <h1 className="text-red-500 text-3xl md:text-4xl font-bold mb-6">
              {post.title}
            </h1>

            {/* 📄 CONTENT */}
            <p className="text-gray-400 leading-8 text-lg max-w-2xl mx-auto">
              {post.content}
            </p>

          </div>
        </div>

      </div>
    </>
  );
};

export default PostDetail;