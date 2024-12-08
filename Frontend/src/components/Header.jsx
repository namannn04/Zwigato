import React from "react";

// https://www.youtube.com/watch?v=DBMPXJJfQEA&t=2624s

function Header() {
  return (
    <div className="h-[34vw] my-7 mx-auto bg-landing-img bg-no-repeat relative bg-cover rounded-3xl">
      <div className="absolute flex flex-col items-start gap-[1.5vw] w-1/2 bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="text-white font-medium text-landingSize">Crave It, Click It, Get It!</h2>
        <p className="text-[1vw] text-white">
          Your cravings deserve the best! At Zwigato, every click brings you
          closer to flavors you love, served fresh and fast. Because hunger
          waits for no one—so why should you?
        </p>
        <button className="text-[#747474] font-medium p-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]">View Menu</button>
      </div>
    </div>
  );
}

export default Header;
