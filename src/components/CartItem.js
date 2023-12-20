import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/CartSlice'
import toast from 'react-hot-toast';

function CartItem({item,itemIndex}) {

  const dispatch=useDispatch();

  function removeFromCart()
  {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div>
          <p>{item.price}</p>
          <button className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeFromCart}>
              <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem