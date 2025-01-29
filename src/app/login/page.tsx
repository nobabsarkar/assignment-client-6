/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { FormEvent } from "react";
import {
  // resetLoginState,
  setEmail,
  setPassword,
} from "../../redux/features/LoginSlice";
import { useLoginMutation } from "@/redux/auth/authApi";
import { toast } from "sonner";
import { setUser } from "@/redux/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { signIn } from "next-auth/react";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  const [login] = useLoginMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = await login({ email, password }).unwrap();

    const user = verifyToken(data.data.accessToken);

    if (data.success) {
      dispatch(setUser({ user: user, token: data.data.accessToken }));
      toast(data.message);
    }
  };

  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content flex-col w-full lg:flex-row-reverse">
        {/* <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div> */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                onChange={(e) => dispatch(setEmail(e.target.value))}
                value={email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                onChange={(e) => dispatch(setPassword(e.target.value))}
                value={password}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent">
                Login
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000",
                  })
                }
                type="submit"
                className="btn btn-outline btn-accent"
              >
                Google Login
              </button>
            </div>
            <p className="text-center mt-2">
              Dont have an account?{" "}
              <Link className="text-accent" href="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
