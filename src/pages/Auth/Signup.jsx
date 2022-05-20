import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";

export const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, signUpHandler, authError } = useAuth();
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    signUpHandler(
      signUpForm.firstName,
      signUpForm.lastName,
      signUpForm.email,
      signUpForm.password
    );
  };
  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  });
  return (
    <div className="flex flex-col py-12">
      <div className="mx-auto text-center sm:max-w-xl sm:w-full">
        <span className="text-2xl font-light">Register your Account</span>
        <div className="mt-4 bg-stone-100 dark:bg-slate-700 shadow-md rounded-lg text-left">
          <div className="h-2 bg-sky-400 rounded-t-md"></div>
          <form className="py-6 px-8" onSubmit={onSubmitHandler}>
            <label className="block font-semibold">Enter First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md text-slate-900"
              value={signUpForm.firstName}
              onChange={(e) =>
                setSignUpForm({
                  ...signUpForm,
                  firstName: e.target.value,
                })
              }
              required
            />
            <label className="block font-semibold">Enter Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md text-slate-900"
              value={signUpForm.lastName}
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, lastName: e.target.value })
              }
              required
            />
            <label className="block font-semibold">Enter Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md text-slate-900"
              value={signUpForm.email}
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, email: e.target.value })
              }
              required
            />
            <label className="block mt-3 font-semibold">Enter Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md text-slate-900"
              value={signUpForm.password}
              onChange={(e) =>
                setSignUpForm({
                  ...signUpForm,
                  password: e.target.value,
                })
              }
              required
            />
            {authError.length > 0 && (
              <div className="auth-error">{authError}</div>
            )}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:items-baseline">
              <button
                type="submit"
                className="mt-4 bg-sky-500 py-2 px-6 rounded-md hover:bg-sky-600 font-semibold"
              >
                Signup
              </button>
              <Link to="/login" className="text-sm hover:underline">
                Already have an account? Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
