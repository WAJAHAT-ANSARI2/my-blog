import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  try {
    await addDoc(collection(db, "blogs"), {
      title,
      image,
      content,
      createdAt: new Date(),
    });

    setTitle("");
    setImage("");
    setContent("");

    navigate("/admin");

  } catch (err) {
    console.log("ERROR:", err.message);
    alert("Upload failed ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-6 rounded w-full max-w-md shadow-lg border border-red-900"
      >

        <h1 className="text-red-500 text-2xl mb-4 font-bold text-center">
          Create Blog
        </h1>

        {/* ERROR */}
        {error && (
          <p className="text-red-400 text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* TITLE */}
        <input
          className="w-full p-2 mb-3 bg-black border border-red-500 outline-none"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* IMAGE */}
        <input
          className="w-full p-2 mb-3 bg-black border border-red-500 outline-none"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {/* CONTENT */}
        <textarea
          className="w-full p-2 mb-4 bg-black border border-red-500 outline-none"
          placeholder="Write your blog content..."
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-500 text-black py-2 font-bold hover:bg-red-600 transition"
        >
          {loading ? "Publishing..." : "Publish Blog"}
        </button>

      </form>

    </div>
  );
};

export default CreateBlog;