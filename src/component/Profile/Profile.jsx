import React from "react";
import { useContext } from "react";
import { AppContext } from "../contextapi/AppProvider";
import { NavLink } from "react-router-dom";

export default function Profile() {
  const { user } = useContext(AppContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
      <span class="loading loading-spinner loading-lg"></span>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="">
      <div class="card bg-base-100 w-96 shadow-xl mx-auto">
        <figure class="px-10 pt-10">
          <img className="h-[250px]" src={user.photoURL} alt="Bibek" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">
            Hi I am {user.displayName} Welcome to my account

          </h2>
          <p>Email Address: {user.email}</p>
          <div class="card-actions">
          <NavLink to="/update">
            <button class="btn btn-primary">Update Profile</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
