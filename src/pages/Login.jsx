import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
      
    <div className="hero my-0 min-h-screen  py-32 bg-[url('./login.png')] bg-cover bg-center ">
    <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left text-pink-500 font-bold">
        <h1 className="text-5xl text-center  ">Login now!</h1>
        
        <p className="py-6 text-center">
        💪 "Le futur du numérique s'écrit aussi au féminin. Faites partie du changement !"
        </p>
        </div>
    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl ">
      <form className="card-body ">
        <div className="form-control relative z-10 ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control  mt-6">
          <button className="btn btn-secondary ">Login</button>
        </div>
        <p className="text-sm text-gray-600 mt-4">
            Pas encore de compte ? <Link to="#" className="text-pink-500 font-semibold">Créer un compte</Link>
        </p>
      </form>
        
    </div>
  </div>
</div>
        </>
    )
}
