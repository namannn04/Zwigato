import React from 'react'

function FoodItem({id,name,rate,price,description,image}) {

  return (
    <div className='w-60 m-auto rounded-2xl shadow-custom transition duration-300 animate-fadeIn'>
        <div className="food-item-img-container">
            <img className='w-60 h-60 rounded-t-2xl rounded-b-none' src={image} alt="" />
        </div>
        <div className="p-3">
            <div className="flex justify-between items-center mb-3">
                <p className='text-xl font-medium'>{name}</p>
                <img className='w-20' src={rate} alt="" />
            </div>
            <p className='text-[#676767] text-xs'>{description}</p>
            <p className="text-[tomato] text-xl font-medium my-3 mx-0">{price}</p>
        </div>
    </div>
  )
}

export default FoodItem