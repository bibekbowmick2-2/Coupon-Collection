import React from 'react'
import { useContext } from "react";
import { AppContext } from "../contextapi/AppProvider";
export default function Reset() {
    const { handleReset,user } = useContext(AppContext);
  return (
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto top-10">
    <form class="card-body" onSubmit={handleReset }>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
        <input type='email' name='email'  placeholder="email" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input name='password' type='password' placeholder="password" class="input input-bordered" required />

      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Reset</button>
      </div>
    </form>
  </div>
  )
}
