import React from 'react';
import {ImHome2} from 'react-icons/im';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import ExploreIcon from '@material-ui/icons/Explore';
import FlightIcon from '@material-ui/icons/Flight';
function Menu(){
    const style={width:45,height:25,color:'lightcoral'}
    return(
<div>
            <div className="menu1">
            <button className="button"><ImHome2 style={style}/></button>
            <div className="txt">Accomodation</div>
            </div>
            <div className="menu1">
            <button className="button"><BeachAccessIcon style={style}/></button>
            <div className="txt">Experiences</div>
            </div>
            <div className="menu1">
            <button className="button"><ExploreIcon style={style}/></button>
            <div className="txt">Adventures</div>
            </div>
            <div className="menu1">
            <button className="button"><FlightIcon style={style}/></button>
            <div className="txt">Flights</div>
            </div>
            </div>
    )
}
export default Menu;
