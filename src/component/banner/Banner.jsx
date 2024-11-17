import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative  bg-white h-[650px] lg:h-[794px] px-5">
      <div className="hero bg-slate-700 text-white p-5 lg:px-36 rounded-b-lg h-[500px] lg:h-[694px]">
        <div className="hero-content text-center">
          <div className="max-w-xs lg:max-w-4xl lg:max-h-[500px] absolute top-3 lg:top-10 space-y-1">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl">Hi Bibek, How are you?</h1>
            <p className="lg:py-6">
              Your email address: bibek@gmail.com <br /> the coolest coupons, we
              have it all!
            </p>
          </div>
        </div>
      </div>
      <div className="absolute max-w-xs lg:max-w-4xl mx-auto p-5 bg-[#ffffff86] rounded-lg border-2 border-white top-[380px] lg:top-[310px] left-0 right-0 h-[300px]lg:h-[563px]">
        {/* <img
          className="w-full h-full rounded-lg"
          src={banner}
          alt="banner picture"
        /> */}

        
        <div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      class="w-full" />
  </div>
  <div id="item2" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full" />
  </div>
  <div id="item3" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full" />
  </div>
  <div id="item4" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full" />
  </div>
</div>
<div class="flex w-full justify-center gap-2 py-2">
  <a href="#item1" class="btn btn-xs">1</a>
  <a href="#item2" class="btn btn-xs">2</a>
  <a href="#item3" class="btn btn-xs">3</a>
  <a href="#item4" class="btn btn-xs">4</a>
</div>


      </div>
    </div>
  );
};

export default Banner;
