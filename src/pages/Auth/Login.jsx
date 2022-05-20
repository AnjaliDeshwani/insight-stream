import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, loginHandler, authError } = useAuth();
  const [loginCred, setLoginCred] = useState({ email: "", password: "" });
  const guestLoginCred = {
    email: "test@gmail.com",
    password: "test@123",
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginCred.email, loginCred.password);
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  });
  return (
    <div className="flex flex-col py-12">
      <div className="mx-auto text-center sm:max-w-xl sm:w-full">
        <span className="text-2xl font-light">Login to your Account</span>
        <div className="mt-4 bg-stone-100 dark:bg-slate-700 shadow-md rounded-lg text-left">
          <div className="h-2 bg-sky-400 rounded-t-md"></div>
          <form className="py-6 px-8" onSubmit={onSubmitHandler}>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md text-slate-900"
              value={loginCred.email}
              onChange={(e) =>
                setLoginCred({ ...loginCred, email: e.target.value })
              }
              required
            />
            <label className="block mt-3 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md text-slate-900"
              value={loginCred.password}
              onChange={(e) =>
                setLoginCred({ ...loginCred, password: e.target.value })
              }
            />
            {authError.length > 0 && <div className="">{authError}</div>}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:items-baseline">
              <button
                type="submit"
                className="mt-4 bg-sky-500 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
              >
                Login
              </button>

              <Link to="/signup" className="text-sm hover:underline">
                Need an account? Sign Up
              </Link>
            </div>
            <button
              type="submit"
              className="flex mt-4 mx-auto border-sky-500 border-2 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
              onClick={() =>
                setLoginCred({
                  email: guestLoginCred.email,
                  password: guestLoginCred.password,
                })
              }
            >
              Login with Test Credentials
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
