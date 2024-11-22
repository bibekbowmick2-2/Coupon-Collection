import { Rate } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contextapi/AppProvider";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const filteredProduct = data.find((d) => d.id == id);
    if (filteredProduct) {
      setProduct(filteredProduct);
    } else {
      console.warn(`Product with id ${id} not found`);
      setProduct({}); // Set to an empty object or handle as needed
    }
  }, [data, id]);

  // const { handleChoosePlayer, handleWislist, disabledItems } =useContext(AppContext);

  return (
    <div className="relative ">
      <div className="relative bg-white h-[1200px] lg:h-[1000px] px-1">
        <div className="hero bg-[#0c6b85] text-white p-5 lg:px-36 rounded-b-lg h-[250px] lg:h-[294px] ">
          <div className="hero-content text-center">
            <div className="max-w-xs lg:max-w-4xl lg:max-h-[500px] absolute top-3 lg:top-10 space-y-1">
              <h1 className="text-4xl lg:text-5xl">ProductDetails</h1>
              <p className="lg:py-3">
                Explore the latest coupons  that will take your experience to the
                next level. 
              </p>
              <div className="space-x-3"></div>
            </div>
          </div>
        </div>
                  
      </div>

      <div class="hero bg-slate-400 h-[700px] lg:h-[800px] w-[400px] lg:w-2/3  absolute top-40 left-3 md:left-36 lg:left-60 rounded-3xl">
        <div class="hero-content flex-col  lg:flex-row mb-96">
          <div>
            <img
              src={product.brand_logo}
              class="w-60 rounded-lg shadow-2xl mr-40 h-64 mb-0 lg:mb-52"
            />
          </div>
          <div>
            <h1 class="text-3xl font-bold mb-14">{product.brand_name}</h1>

            <div className="mb-64">
              <p className="">Rating: ${product.rating}</p>

              <p className="text-gray-500">{product.description}</p>
              <h2 class="">Coupon Details</h2>

              <div className="card bg-green-500 text-black w-96 absolute left-2 lg:left-[500px] bottom-[-350px] md:bottom-[-350px] lg:bottom-2 ">
                {product.coupons &&
                  product.coupons.map((coupon, index) => (
                    <>
                      <div class="card-body">
                        <h2 class="card-title"> {coupon.coupon_code}</h2>
                        <p className="text-sm ">{coupon.description}</p>
                        <p className="text-sm  mt-2">
                          Expires: {coupon.expiry_date}
                        </p>
                        <p className="text-sm 0">
                          Condition: {coupon.condition}
                        </p>
                        <p className="text-sm ">Type: {coupon.coupon_type}</p>
                        <div class="card-actions justify-end">
                          <CopyToClipboard text={coupon.coupon_code}>
                            <button  onClick={() => toast.success("Coupon Code Copied Successfully")}  class="btn">Copy to clipboard</button>
                          </CopyToClipboard>
                         
                        </div>
                      </div>
                    </>
                  ))}
              </div>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => window.open(product.shop_link, "_blank")}
              >
                Use Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
