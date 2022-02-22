import React      from "react";
import { Link }   from "react-router-dom";

  const Header = () => {
    return (
      <>
          <div style={{top:"0", height:"100px", width:"100vw", backgroundColor:"rgb(255, 255, 255)", }}>
            <div style={{height:"5rem", width:"5rem", margin:"0 auto", paddingTop:"1rem"}}>
                <Link to="/api"  style={{cursor:"pointer"}}>
                <img
                  alt=""
                  src="../assets/logo128.png"
                  width="80%"
              />
              </Link>
            </div>

          </div>

      </>
    );
  };

export default Header;