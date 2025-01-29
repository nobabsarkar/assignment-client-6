"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export type UserData = {
  name: string;
  image: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    console.log(data);
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
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                {...register("image")}
                placeholder="Image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Register</button>
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
