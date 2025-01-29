/* eslint-disable @next/next/no-img-element */
"use client";
import { logOut } from "@/redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>

      {user?.role ? (
        <>
          {user?.role === "ADMIN" ? (
            <>
              <li>
                <a>Admin Dashboard</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Log Out</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a>User Dashboard</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Log Out</a>
              </li>
            </>
          )}
        </>
      ) : (
        <>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );

  //   <li>
  //   <a>Dashboard</a>
  // </li>
  // <li>
  //   <a>Log Out</a>
  // </li>
  // <li>
  //   <Link href="/login">Login</Link>
  // </li>
  // <li>
  //   <Link href="/register">Register</Link>
  // </li>

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <img
          style={{ width: "50px", height: "50px", borderRadius: "100%" }}
          src={user?.image}
          alt="image"
        />

        {/* <a className="btn">Button</a> */}
      </div>
    </div>
  );
};

export default Navbar;
