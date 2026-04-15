import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
          width: 0;
          animation: typing 4s steps(30,end) forwards, blink 0.7s infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }

        /* GLITCH */
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

      {/* MAIN WRAPPER (NO CURSOR LOGIC) */}
      <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden">

        {/* Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="errors-bg">
            <span style={{ left: "10%", animationDuration: "6s" }}>ERROR</span>
            <span style={{ left: "30%", animationDuration: "8s" }}>ACCESS DENIED</span>
            <span style={{ left: "50%", animationDuration: "7s" }}>SYSTEM FAIL</span>
            <span style={{ left: "70%", animationDuration: "5s" }}>MALWARE</span>
            <span style={{ left: "90%", animationDuration: "9s" }}>ROOT</span>
          </div>
        </div>

        {/* Navbar */}
        <div className="relative z-10 sticky top-0 flex justify-between px-12 py-5 bg-black/80 backdrop-blur">
          <h1 className="text-red-500 text-2xl font-bold">🐞 NUSK LAB</h1>

          <div className="space-x-8 text-gray-400">
            <Link to="/" className="hover:text-red-500">Blog</Link>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>
          </div>
        </div>

        {/* Hero */}
        <div className="text-center py-24 relative z-10">
          <h1 className="text-red-500 text-4xl font-bold typing inline-block">
            Accessing Cyber Intelligence...
          </h1>
          <p className="text-gray-500 mt-3">
            Deep Web | Exploits | Vulnerabilities
          </p>
        </div>

        {/* BLOG */}
        <div className="max-w-3xl mx-auto px-4 relative z-10">

          {/* CARD 1 */}
          <div className="glitch bg-[#0d0d0d] rounded-xl mb-8 overflow-hidden hover:scale-[1.02] transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              className="w-full h-[260px] object-cover"
              alt=""
            />

            <div className="p-5">
              <h3 className="text-red-500">Zero-Day Exploit</h3>
              <p className="text-gray-400">System compromised silently.</p>

              <button
                onClick={() => alert("Opening Zero-Day")}
                className="px-4 py-2 bg-red-500 text-black shadow-[0_0_10px_red] hover:bg-black hover:text-red-500 hover:shadow-[0_0_20px_red] transition duration-300 border border-red-500"
              >
                Read More
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="glitch bg-[#0d0d0d] rounded-xl mb-8 overflow-hidden hover:scale-[1.02] transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              className="w-full h-[260px] object-cover"
              alt=""
            />

            <div className="p-5">
              <h3 className="text-red-500">Ransomware Attack</h3>
              <p className="text-gray-400">Enterprise systems locked globally.</p>

              <button
                onClick={() => alert("Opening Ransomware")}
                className="px-4 py-2 bg-red-500 text-black shadow-[0_0_10px_red] hover:bg-black hover:text-red-500 hover:shadow-[0_0_20px_red] transition duration-300 border border-red-500"
              >
                Read More
              </button>
            </div>
          </div>

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