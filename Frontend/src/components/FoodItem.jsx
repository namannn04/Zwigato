import React, { useContext } from 'react'
import add from '/assets/add.png'
import greenAdd from '/assets/greenAdd.png'
import redRemove from '/assets/redRemove.png'

function FoodItem({id,name,rate,price,description,image}) {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='w-60 m-auto rounded-2xl shadow-custom transition duration-300 animate-fadeIn'>
        <div className="relative">
            <img className='w-60 h-60 rounded-t-2xl rounded-b-none' src={image} alt="" />
            {
              !cartItems[id]
              ?<img className='absolute w-9 bottom-4 right-4 cursor-pointer rounded-[50%] bg-[#d3d2d2]' onClick={ () => addToCart(id) } src={add} alt="" />
              :<div className='absolute bottom-3 right-4 flex items-center gap-3 p-2 rounded-[50px] bg-white'>
                <img className='w-7' onClick={() => removeFromCart(id)} src={redRemove} alt='' />
                <p>{cartItems[id]}</p>
                <img className='w-7' onClick={() => addToCart(id)} src={greenAdd} alt='' />
              </div>
            }
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