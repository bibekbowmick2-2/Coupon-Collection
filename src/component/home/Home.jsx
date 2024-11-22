import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Cards from "../Cards/Cards";
import Banner from "../banner/Banner";
import { NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Marquee from "react-fast-marquee";
const Home = () => {
  const product = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Home </title>
      </Helmet>
      <Banner></Banner>
      {/* <div className='flex flex-col  lg:flex-row lg:justify-evenly bg-white text-black'>
            <div className=""><Sidebar categories={categories} ></Sidebar></div>
            
            <Outlet ></Outlet>
            
        </div> */}

      <Marquee pauseOnHover="false">
        <div className="flex gap-52 ">
          {product.map((card) => (
            <NavLink to={`/brands/${card.id}`}>
              <img className="w-14" src={card.brand_logo}></img>
            </NavLink>
          ))}
        </div>
      </Marquee>
  
       <p className='text-center bg-lime-400 text-2xl font-bold text-emerald-900 animate__animated animate__bounce animate__infinite infinite'>Sale is on</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {product.filter((card) => card.isSaleOn).map((card) => (
            
          <div class="card bg-base-100 w-96 shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src={card.brand_logo}
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">{card.brand_name}</h2>
              <p>Total coupons: {card.coupons.length}</p>
              <p> {card.category}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
