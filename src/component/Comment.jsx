import { Link } from "react-router-dom"
import { Comments } from "./Data"
import { Cancel } from "@mui/icons-material"




const Comment = () => {
  return (
    <div className="bg-[#231F26] w-full flex flex-col items-center">
        {Comments.map((comment, index)=>(
          <div key={index} className="flex flex-col gap-5 w-[95%] pt-5">
            <div className="flex gap-3">
              <img src={comment.image} alt="" className="bg-white w-10 h-10 rounded-full object-cover"/>
              <div>
                <h1 className="text-lg capitalize">{comment.name}</h1>
                <p  style={{color: `rgb(250, 235, 215, 0.7)`}} className="text-sm text-[]">{comment.comment}</p>
              </div>
            </div>
            <hr className="bg-[#dc907086] border-none h-[0.5px] w-full"/>
          </div>
        ))}
         <Link to='/'>
            <div className="bg-gradient-to-br from-[#DC9170] to-[#EB7E7E] w-12 h-12 rounded-full  flex justify-center items-center mt-10">
                <Cancel/>
            </div>
        </Link>
        
    </div>
  )
}

export default Comment
