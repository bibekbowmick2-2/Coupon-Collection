import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({card }) => {
   const {id,brand_name,rating,description,brand_logo,isSaleOn } = card;

    return (
        <div>

        
            <div className="card bg-slate-300 w-96 lg:w-72 ml-5 lg:ml-0 h-[500px] shadow-xl">
            {
                isSaleOn == true && <p className='mx-auto text-2xl font-bold text-emerald-900 animate__animated animate__bounce animate__infinite infinite'>Sale is on</p>
            }
            
                <div className="h-[300px] px-10 pt-10">
                    <img
                        className="w-[200px] h-[200px] object-center rounded-xl"
                        src={brand_logo}
                        alt={brand_logo } />
                </div>
                <div className="card-body mt-0">
                    <h4 className="card-title">{brand_name}</h4>
                    <p>Rating:{rating}</p>
                    <p>{description}</p>
                    <div className="card-actions">
                   

                    
                    
                
                    <Link to={`/brands/${id}`}>

                    <button className="btn border-2 border-[#9538E2] rounded-full text-[#9538E2] bg-white">View Detail</button>
                    </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;