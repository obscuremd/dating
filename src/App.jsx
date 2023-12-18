import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import Comment from "./component/Comment"
import './App.css'



const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/comment" element={<Comment/>}/>
        </Routes>
      </BrowserRouter>
 )
}

export default App