import React from "react";


const Navoverlay = () => {

    const closeNav = function () {
        document.getElementById("myNav").style.height = "0%";
    }
    return (
        <div id="myNav" className="overlay">
           
        </div>
      );
}
 
export default Navoverlay