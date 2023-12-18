import { CommentBankRounded } from "@mui/icons-material";
import { Pic } from "./Data"
import CakeIcon from '@mui/icons-material/Cake';
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Carousel } from "@material-tailwind/react";

import bitcoin from '../assets/bitcoin.svg'
import cashapp from '../assets/cashapp.svg'
import paypal from '../assets/paypal.svg'
import zelle from '../assets/zelle.svg'

const Home = () => {

  return (
    <div className="w-full h-screen absolute">
        <Carousel>
            {Pic.map((pics, index)=>(
                <img 
                    key={index} 
                    src={pics} 
                    alt=""
                    className="w-full h-[125VH] object-cover "
                    />
                    
                        
            ))}
        </Carousel>

        <div className="relative bottom-[35%] left-3">
            <h3 className="text-3xl">MEIJAKAY (23)</h3>
            <div className="flex gap-2 text-base">
                <CakeIcon/> 
                <h1>19 June 2000</h1>
            </div>
            <div className="flex gap-3 text-base">
                <h1>♊</h1> 
                <h1>Gemini</h1>
            </div>
            <div className="flex flex-col gap-3 mt-3">
                <p>payment method</p>
                <div className="flex gap-5">
                    <div className="flex flex-col justify-center items-center">
                        <img src={paypal} alt=""  className="w-8"/>
                        <p>paypal</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={bitcoin} alt=""  className="w-8"/>
                        <p>Bitcoin</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={zelle} alt=""  className="w-8"/>
                        <p>Zelle</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={cashapp} alt=""  className="w-8"/>
                        <p>Cashapp</p>
                    </div>
                </div>
            </div>
        </div>
        
        <Link to='/comment'>
            <div className="bg-gradient-to-br from-[#DC9170] to-[#EB7E7E] w-12 h-12 rounded-full relative bottom-[40%] left-[80%] flex justify-center items-center">
                <CommentBankRounded/>
            </div>
        </Link>


       
        
    </div>
  )
}

export default Home