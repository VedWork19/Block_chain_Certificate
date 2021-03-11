import React from "react";
import animation from "../../img/404.json"
import animation2 from "../../img/404_2.json";
import "./Error.css";
import {useLottie} from "lottie-react";
const Anime=()=>{
    const style={
      height:350,
      width:500,
    
    }
    
      const options = {
        animationData: animation2,
        loop: true,
        autoplay: true,
      };
      const { View } = useLottie(options, style);
      
      return View;
    }
    
const ErrorPage =()=>{
    return(<>
        <div className="error_page">
            <div className="animation_show">
                <Anime/>
                <center><h2 className="error_msg_is">Page not found !</h2></center>
            </div>
        </div>
    </>)
}

export default ErrorPage;