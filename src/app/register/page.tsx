"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Link from "next/link";
import React, { FormEvent } from "react";
import {
  setName,
  setImage,
  setEmail,
  setPassword,
} from "../../redux/features/RegisterSlice";
import { RootState } from "@/redux/store";
import { useSignUpMutation } from "@/redux/auth/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// export type UserData = {
//   name: string;
//   image: string;
//   email: string;
//   password: string;
// };

const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { name, image, email, password } = useAppSelector(
    (state: RootState) => state.register
  );

  const [signUp] = useSignUpMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const user = await signUp({ name, image, email, password });
    toast(user?.data.message);
    router.push("/login");
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                onChange={(e) => dispatch(setName(e.target.value))}
                value={name}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image"
                className="input input-bordered"
                onChange={(e) => dispatch(setImage(e.target.value))}
                value={image}
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent">
                Register
              </button>
            </div>
            <p className="mt-2 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-accent">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
