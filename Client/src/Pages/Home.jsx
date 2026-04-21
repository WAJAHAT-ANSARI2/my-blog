import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../Data/blog";

const Home = () => {
  return (
    <>
      {/* STYLES */}
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

        .typing {
          overflow: hidden;
          border-right: 2px solid red;
          white-space: nowrap;
          display: inline-block;
          animation: typing 4s steps(30,end) forwards, blink 0.7s infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }

        .glitch {
          position: relative;
        }

        .glitch::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,0,0,0.25) 2px,
            rgba(255,0,0,0.25) 4px
          );
          opacity: 0;
          pointer-events: none;
        }

        .glitch:hover::before {
          opacity: 1;
          animation: glitch 0.2s infinite;
        }

        @keyframes glitch {
          100% { transform: translateY(4px); }
        }
      `}</style>

      <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden relative">

        {/* BACKGROUND FLOATING ERRORS */}
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

        {/* NAVBAR */}
        <div className="sticky top-0 z-20 flex justify-between px-12 py-5 bg-black/80 backdrop-blur">
          <h1 className="text-red-500 text-2xl font-bold">🐞 NUSK LAB</h1>

          <div className="space-x-8 text-gray-400">
            <Link to="/" className="hover:text-red-500">Blog</Link>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>
          </div>
        </div>

        {/* HERO */}
        <div className="text-center py-24 relative z-10">
          <h1 className="text-red-500 text-4xl font-bold typing">
            Accessing Cyber Intelligence...
          </h1>
          <p className="text-gray-500 mt-3">
            Deep Web | Exploits | Vulnerabilities
          </p>
        </div>

        {/* BLOGS */}
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          {blogs.length === 0 ? (
            <p className="text-gray-500 text-center">No blogs found 💤</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="glitch bg-[#0d0d0d] rounded-xl mb-8 overflow-hidden"
              >
                <img
                  src={blog.image}
                  className="w-full h-[260px] object-cover"
                  alt={blog.title}
                />

                <div className="p-5">
                  <h3 className="text-red-500 font-semibold text-lg">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400">
                    {blog.content?.slice(0, 100)}...
                  </p>

                  <Link to={`/post/${blog.id}`}>
                    <button className="mt-3 px-4 py-2 bg-red-500 text-black border border-red-500 hover:bg-black hover:text-red-500 hover:shadow-[0_0_25px_red] transition-all duration-300 hover:scale-105">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* FOOTER */}
        <div className="text-center text-gray-500 py-6 border-t border-red-900 relative z-10">
          ⚠ SYSTEM MONITORED | CYBER-X SECURITY
        </div>

      </div>
    </>
  );
};

export default Home;