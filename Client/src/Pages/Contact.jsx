import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaXTwitter, FaMedium } from "react-icons/fa6";

const Contact = () => {
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
          animation: typing 3s steps(25,end) forwards, blink 0.7s infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink {
          50% { border-color: transparent }
        }

      `}</style>

      {/* MAIN WRAPPER (normal cursor) */}
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
            <Link to="/contact" className="text-red-500">Contact</Link>
          </div>
        </div>

        {/* HERO */}
        <div className="text-center py-20 relative z-10">
          <h1 className="text-red-500 text-4xl font-bold typing inline-block">
            Contact Cyber Intelligence
          </h1>
          <p className="text-gray-500 mt-3">
            Report vulnerabilities or connect securely
          </p>
        </div>

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto px-6 py-10 relative z-10 grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="bg-[#0d0d0d] p-6 rounded-xl shadow-[0_0_15px_rgba(255,0,0,0.2)] flex flex-col">

            <div>
              <h3 className="text-red-500 mb-3">Contact Info</h3>

              <p className="mb-2">Email: cyberx@securemail.com</p>
              <p className="mb-2">Location: Dark Web Node</p>
              <p className="mb-4">Status: Active Monitoring ⚠</p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-auto flex gap-4">

              <a
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-red-500 text-black rounded-full 
                hover:bg-black hover:text-red-500 hover:shadow-[0_0_15px_red] transition duration-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-red-500 text-black rounded-full 
                hover:bg-black hover:text-red-500 hover:shadow-[0_0_15px_red] transition duration-300"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://medium.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-red-500 text-black rounded-full 
                hover:bg-black hover:text-red-500 hover:shadow-[0_0_15px_red] transition duration-300"
              >
                <FaMedium size={18} />
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#0d0d0d] p-6 rounded-xl shadow-[0_0_15px_rgba(255,0,0,0.2)]">

            <h3 className="text-red-500 mb-3">Send Message</h3>

            <input
              placeholder="Your Name"
              className="w-full mb-3 p-2 bg-[#111] border border-[#300] text-white"
            />

            <input
              placeholder="Your Email"
              className="w-full mb-3 p-2 bg-[#111] border border-[#300] text-white"
            />

            <textarea
              placeholder="Message"
              className="w-full mb-3 p-2 bg-[#111] border border-[#300] text-white"
            />

            <button className="px-4 py-2 bg-red-500 text-black shadow-[0_0_10px_red] hover:bg-black hover:text-red-500 hover:shadow-[0_0_20px_red] transition duration-300">
              Send
            </button>

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

export default Contact;