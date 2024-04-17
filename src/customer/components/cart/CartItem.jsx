import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/material";
const CartItem = () => {
  return (
    <div className=" p-5 shadow-lg border rounded-md">
      <div className=" flex items-center">
        <div className=" w-[5rem] h-[5rem] lg:w-[9rem]">
          <img
            className=" w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
            alt="/"
          />
        </div>
        <div className=" ml-5 space-y-1">
          <p className=" font-semibold pt-5">
            Men Regular Fit Solid Cut Away Collar Formal Shirt
          </p>
          <p className=" opacity-70">Size:L,white</p>
          <p className=" opacity-70 mt-2"> Seller:LAHEJA</p>
          <div className=" flex space-x-5 items-center text-gray-900 pt-6">
            <p className=" font-semibold">$199</p>
            <p className=" opacity-50 line-through">$211</p>
            <p className=" text-green-600 font-semibold ">5% Off</p>
          </div>
          <div className=" lg:flex items-center lg:space-x-10 pt-4">
            <div className=" flex items-center space-x-2">
                <IconButton >
                    <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className=" py-1 px-7 border rounded-sm">3</span>
                    <IconButton sx={{color:"blue"}}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                
            </div>
            <div>
                <Button>
                    remove
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
