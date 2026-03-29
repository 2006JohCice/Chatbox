// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Login
import LayoutLoginUser from './pages/login/layoutLogin';
import LoginPageUser from "./pages/login/login";
import RegisterPageUser from "./pages/login/register";
import LoginPageUserForgot from "./pages/login/forgotPassword";
import Home from './pages/home/home';
import ChatUI from './pages/chatting/ChatUI';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route  path="/user/auth" element={<LayoutLoginUser />} >
            <Route path="login" element={<LoginPageUser/>} />
            <Route path="register" element={<RegisterPageUser/>} />
            <Route path="forgot-password" element={<LoginPageUserForgot/>} />
         </Route>
          <Route path='/chat' element={<ChatUI/>}/>
  

         {/* <Route path="/" element={<Home/>} />
         <Route path='/chat' element={<ChatUI/>}/> */}
         


      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
