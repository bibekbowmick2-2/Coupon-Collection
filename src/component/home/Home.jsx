import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Cards from '../Cards/Cards';
import Banner from '../banner/Banner';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Marquee from "react-fast-marquee";
const Home = () => {
  
    const categories = useLoaderData();
    
    

    return (
        <div className=''>
       <Helmet>
        <title>Home </title>
      </Helmet>
        <Banner></Banner>
        {/* <div className='flex flex-col  lg:flex-row lg:justify-evenly bg-white text-black'>
            <div className=""><Sidebar categories={categories} ></Sidebar></div>
            
            <Outlet ></Outlet>
            
        </div> */}

        <Marquee pauseOnHover='false' >
            <p>Bdinv jd vkdnvkd vdv jdkvnidjvciedvcedncmkdcmkdnmckdmcksmcsmcoslc oesjcmscn</p>
        </Marquee>

        </div>
    );
};

export default Home;