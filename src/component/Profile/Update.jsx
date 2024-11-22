import React, { useContext } from 'react'
import { AppContext } from '../contextapi/AppProvider';
import { useNavigate } from "react-router-dom";

export default function Update() {
    const { handleSubmit3 } = useContext(AppContext);
  const navigate = useNavigate();
  const handleUpdateSubmit = (e) => {
    handleSubmit3(e, navigate); // Pass navigate to the context's method
  };
  return (
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto top-10">
    <form class="card-body" onSubmit={handleUpdateSubmit}>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input name='name'  placeholder="name" class="input input-bordered" required />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">URL</span>
        </label>
        <input name='url' type='url' placeholder="password" class="input input-bordered" required />

      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
  )
}
