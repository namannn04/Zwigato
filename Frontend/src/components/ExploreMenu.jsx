import React from "react";
import { menu_list } from "../assets/assets";

// https://www.youtube.com/watch?v=DBMPXJJfQEA&t=3300s

function ExploreMenu({category, setCategory}) {



  return (
    <div className="flex flex-col gap-5 " id="explore-menu">
      <h1 className="text-[#262626] font-medium text-4xl">Explore our Menu</h1>
      <p className="w-[60%] text-[#808080]">
        Embark on a culinary adventure where every dish is a masterpiece,
        crafted to ignite your senses and transform every meal into an
        unforgettable experience, blending tradition and innovation seamlessly.
      </p>
      <div className="flex justify-between items-center gap-8 text-center my-5 mx-0">
        {menu_list.map((item, index)=>{
            return(
                <div onClick={() => setCategory(prev => prev===item.menu_name?"ALL":item.menu_name)} key={index} className="explore-menu-list-items">
                    <img className={`h-28 w-28 rounded-full cursor-pointer ${category===item.menu_name?"border-4 border-[tomato] p-[2px]":""}`} src={item.menu_image} alt="" />
                    <p className="mt-3 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className="my-3 mx-0 h-[2px] bg-[#d1d1d1] border-none"/>
    </div>
  );
}

export default ExploreMenu;
