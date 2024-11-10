import { logo } from "@/assets";
import { useState } from "react";
import { login, signup } from "@/config/Firebase.config";
import { netflix_spinner } from "@/assets";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const user_auth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={netflix_spinner} className="w-[60px]" />
    </div>
  ) : (
    <div
      style={{
        backgroundImage:
          "linear-gradient(#0000007e, #0000007e), url('/background_banner.jpg')",
      }}
      className="h-screen px-[8%] py-[20px] max-sm:px-[5%] max-sm:py-[15px]"
    >
      <img src={logo} className="w-[150px]" alt="Netflix_logo" />
      <div className="w-full max-w-[450px] bg-black/75 rounded p-[60px] m-auto max-sm:p-5 max-sm:mt-[30px]">
        <h1 className="font-medium text-[32px]">{signState}</h1>
        <form onSubmit={user_auth}>
          {signState === "Sign Up" && (
            <input
              className="w-full h-[50px] bg-[#333] mx-0 my-3 border-0 outline-0 rounded py-4 px-[20px] text-[16px] font-medium"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            className="w-full h-[50px] bg-[#333] mx-0 my-3 border-0 outline-0 rounded py-4 px-[20px] text-[16px] font-medium"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full h-[50px] bg-[#333] mx-0 my-3 border-0 outline-0 rounded py-4 px-[20px] text-[16px] font-medium"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full border-0 outline-0 p-3 text-white bg-[#e50914] rounded text-[16px] cursor-pointer font-medium mt-5">
            {signState}
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-[14px] mt-3">
            <div className="flex items-center gap-[5px]">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-[18px] h-[18px] border-0 outline-0"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <p>Need Help?</p>
          </div>
        </form>

        <div className="mt-[40px] text-[#737373]">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                onClick={() => setSignState("Sign Up")}
                className="ml-[6px] text-white font-medium cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                onClick={() => setSignState("Sign In")}
                className="ml-[6px] text-white font-medium cursor-pointer"
              >
                Sign in Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
