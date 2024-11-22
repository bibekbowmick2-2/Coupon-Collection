import React, { useContext, useState } from 'react'
import { AppContext } from '../contextapi/AppProvider';
import { NavLink, useNavigate } from "react-router-dom";
import myImage4 from '../../../assets/hide.png';
import myImage5 from '../../../assets/view.png';
export default function Login() {
  const { handleSubmit2,passwordError } = useContext(AppContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Toggle state

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle between true and false
  };
  const handleFormSubmit = (e) => {
    handleSubmit2(e, navigate); // Pass navigate to the context's method
  };
  return (
    
   
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto top-10">
      <form class="card-body" onSubmit={handleFormSubmit}>
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
          <input name='password' type={showPassword ? "text" : "password"} placeholder="password" class="input input-bordered" required />
          <button onClick={togglePasswordVisibility}>
          {
            showPassword? <img className='w-[20px] relative left-72 bottom-9' src={myImage5}></img>:  <img className='w-[20px] relative left-72 bottom-9' src={myImage4}></img>
          }
          </button>
          <label class="label">
          <NavLink to={"/reset"} >
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </NavLink>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
        {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
      </form>
    </div>
  

  )
}
