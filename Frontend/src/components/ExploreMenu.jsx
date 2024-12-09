import React from "react";
import { menu_list } from "../assets/assets";

// https://www.youtube.com/watch?v=DBMPXJJfQEA&t=3300s

function ExploreMenu() {
  return (
    <div className="flex flex-col gap-5 " id="explore-menu">
      <h1 className="text-[#262626] font-medium text-4xl">Explore ur Menu</h1>
      <p className="w-[60%] text-[#808080]">
        Embark on a culinary adventure where every dish is a masterpiece,
        crafted to ignite your senses and transform every meal into an
        unforgettable experience, blending tradition and innovation seamlessly.
      </p>
      <div className="flex justify-between items-center gap-8 text-center my-5 mx-0 overflow-x-scroll">
        {menu_list.map((item, index)=>{
            return(
                <div key={index} className="explore-menu-list-items">
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
