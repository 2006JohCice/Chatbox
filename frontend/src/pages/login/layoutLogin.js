// import { Routes ,Route} from "react-router-dom";
// import LoginPageUser from "./login";
// import RegisterPageUser from "./register";
// import LoginPageUserForgot from "./forgotPassword";
import "../../css/login/login.css"
import "../../css/login/register.css"
import { Outlet } from "react-router-dom";
const LayoutLoginUser =() =>{

    return(
        <>
            <Outlet/>
        </>
    )

}

export default LayoutLoginUser;