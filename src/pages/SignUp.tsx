import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogInIcon as LogoIcon } from "lucide-react";
import LOGO from "../assets/logo.png";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // Add your signup logic here
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden">
      <div className="w-full max-w-md">
        <div className="bg-[rgba(17,12,15,0.22)] backdrop-blur-sm shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <div className="relative w-10 h-10 mr-2">
              <img src={LOGO} alt="" className="" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#06508d] to-[rgb(6,224,173)] bg-clip-text text-transparent">
              BlindSpot
            </h1>
          </div>

          <h2 className="text-2xl font-semibold text-white mb-6">Sign up</h2>

          <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-[#4a5568] border border-[#4a5568] text-[#e2e8f0] rounded-md focus:outline-none focus:border-[#63b3ed] focus:ring-1 focus:ring-[#63b3ed]"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-[#4a5568] border border-[#4a5568] text-[#e2e8f0] rounded-md focus:outline-none focus:border-[#63b3ed] focus:ring-1 focus:ring-[#63b3ed]"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-[#4a5568] border border-[#4a5568] text-[#e2e8f0] rounded-md focus:outline-none focus:border-[#63b3ed] focus:ring-1 focus:ring-[#63b3ed]"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 bg-[#4a5568] border border-[#4a5568] text-[#e2e8f0] rounded-md focus:outline-none focus:border-[#63b3ed] focus:ring-1 focus:ring-[#63b3ed]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#e2e8f0] hover:bg-[#cbd5e0] text-[#2d3748] font-medium py-2 px-4 rounded-md transition duration-200"
            >
              Sign up
            </button>
          </form>

          <div className="text-center mt-4 mb-4">
            <span className="text-sm text-[#a0aec0]">
              Already have an account?{" "}
              <button
                onClick={() => navigate('/')}
                className="text-[#63b3ed] hover:text-blue-400"
              >
                Sign in
              </button>
            </span>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#4a5568]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-[rgba(17,12,15,0.22)] text-[#a0aec0] text-xs uppercase">
                or
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}