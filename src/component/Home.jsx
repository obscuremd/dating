import { CommentBankRounded } from "@mui/icons-material";
import { Pic } from "./Data"
import CakeIcon from '@mui/icons-material/Cake';
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Home = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    
    const items = []

    const updateIndex = (newIndex) => {
        if (newIndex === 0) {
            newIndex = 0
        } else if (newIndex === Pic.length){
            newIndex = Pic.length - 1
        }

        setActiveIndex(newIndex)
    }


  return (
    <div className="w-full h-screen absolute">
        <div className="flex" style={{transform : `translate(-${activeIndex * 100}%)`}}>
            {Pic.map((pics, index)=>(
                <img 
                    key={index} 
                    src={pics} 
                    alt=""
                    className="w-full h-screen object-cover "
                    />
                    
                        
            ))}
        </div>

        <div className="relative bottom-[20%] left-3">
            <h3 className="text-3xl">MEIJAKAY (23)</h3>
            <div className="flex gap-2 text-base">
                <CakeIcon/> 
                <h1>19 June 2000</h1>
            </div>
            <div className="flex gap-3 text-base">
                <h1>♊</h1> 
                <h1>Gemini</h1>
            </div>
        </div>
        
        <Link to='/comment'>
            <div className="bg-gradient-to-br from-[#DC9170] to-[#EB7E7E] w-12 h-12 rounded-full relative bottom-[30%] left-[80%] flex justify-center items-center">
                <CommentBankRounded/>
            </div>
        </Link>

        <button 
            onClick={()=>{updateIndex(activeIndex - 1)}}
            className="absolute bottom-[50%] left-[2%]"
        >
            <ArrowCircleLeftIcon />
        </button>
        <button 
            onClick={()=>{updateIndex(activeIndex + 1)}}
            className="absolute bottom-[50%] left-[92%]"
        >
            <ArrowCircleRightIcon/> 
        </button>

       
        
    </div>
  )
}

export default Home