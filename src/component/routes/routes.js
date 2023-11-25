import { Route, Routes } from "react-router-dom"
import RegistrationForm from "../account/RegistrationForm";
import LoginForm from "../account/LoginFrom";
import ForgotPassword from "../account/ForgotPassword";
import OTPVerification from "../account/OtpVerification";
import NewPassword from "../account/NewPassword";
function RoutesNavigation(){
return(
    <>
    <Routes>
    {/* <Route path="/" element={<Home />} /> */}
    <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path ="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="otpverify" element={<OTPVerification/>}/>
        <Route path="newpassword" element={<NewPassword/>}/>
        {/* <Route path="/login" element={<LoginForm />} /> */}

    </Routes>
    </>
)     
}
export default RoutesNavigation;