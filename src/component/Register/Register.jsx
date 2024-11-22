import React, { useContext, useState } from 'react'
import { AppContext } from '../contextapi/AppProvider';
import { Link, useNavigate } from "react-router-dom";
import myImage4 from '../../../assets/hide.png';
import myImage5 from '../../../assets/view.png';
export default function Register() {
  const { handleSubmit,handleGoogle,passwordError } = useContext(AppContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Toggle state

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle between true and false
  };



  const handleFormSubmit = (e) => {
    handleSubmit(e, navigate); // Pass navigate to the context's method
  };

  

  
  return (
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto top-2">
      <form class="card-body" onSubmit={handleFormSubmit}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input name="name"  placeholder="name" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name='password'  type={showPassword ? "text" : "password"} placeholder="password" class="input input-bordered" required 
           
          />
          <button onClick={togglePasswordVisibility}>
          {
            showPassword? <img className='w-[20px] relative left-72 bottom-9' src={myImage5}></img>:  <img className='w-[20px] relative left-72 bottom-9' src={myImage4}></img>
          }
         
          </button>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


        <div class="form-control">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input name='url' type="url" placeholder="photo_url" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Register</button>
        </div>
        <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 underline">
          Login here
        </Link>
      </p>
        {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
      </form>
      <button onClick={() => handleGoogle(navigate)}  class="btn btn-success">Register with Google</button>
    </div>
  )
}
