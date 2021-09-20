import React from "react";
import { SidebarData } from "./SidebarData";
function Side(){
  return (
    <div className="dash">
    <div className="side">
      <ol className="SidebarList">
     {SidebarData.map((val,key)=>{
       return(
       <li key={key} 
       className="row"
       onClick={()=>{window.location.pathname=val.link}}>
         <div>{val.icon}</div>
       </li>
     );
     })}
     </ol>
    </div>
    </div>
  )
}
export default Side;