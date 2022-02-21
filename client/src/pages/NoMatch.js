
import React      from "react";
import { Link }   from "react-router-dom";


  const NoMatch = () => {
    return (
      <>
          <div style={{top:"0", height:"100px", width:"100vw", backgroundColor:"rgb(65, 65, 65)", }}>
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
          <div style={{color:"white", display: "flex", justifyContent:"center", alignItems: "center", height: "60vh" }}>
            <h1 style={{padding:"0 2rem", color:"black"}} >
              I can't find that page, please try another address.
            
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>

      </>
    );
  };

export default NoMatch;
