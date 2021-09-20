import React from 'react';
import {RiFootprintLine} from 'react-icons/ri';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DateRangeIcon from '@material-ui/icons/DateRange';
import image3 from '../assets/image3.jpg';
import image7 from '../assets/image7.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
function Experiences(){
    const style1={width:45,height:25,color:'white'}
    const style2={width:25,height:15,color:'white'}
return(
    <div>
    <h2>Best Experiences</h2>
    <div className="pics">
                    <div className="child">
                    <img className="img" src={image3}/>
                    <div class="top-right"><FavoriteIcon style={style1}/></div>
                    <div className="bottom-left">The Golden Circle,</div>
                    <div className="bottom-left1">Iceland</div>
                    <div className="bottom-left2"><DateRangeIcon style={style2}/><text>5-7 days</text></div>
                    <div className="bottom-right"><RiFootprintLine style={style2}/><text>20km</text></div>
                    </div>
                    <div className="child">
                    <img className="img" src={image7}/>
                    <div class="top-right"><FavoriteIcon style={style1}/></div>
                    <div className="bottom-left">Snorkelling</div>
                    <div className="bottom-left1">Iceland</div>
                    <div className="bottom-left2"><DateRangeIcon style={style2}/><text>11 days</text></div>
                    <div className="bottom-right"><RiFootprintLine style={style2}/><text>20km</text></div>
                    </div>
                    <div className="child">
                    <img className="img" src={image5}/>
                    <div class="top-right"><FavoriteIcon style={style1}/></div>
                    <div className="bottom-left">Snorkelling</div>
                    <div className="bottom-left1">Iceland</div>
                    <div className="bottom-left2"><DateRangeIcon style={style2}/><text>11 days</text></div>
                    <div className="bottom-right"><RiFootprintLine style={style2}/><text>20km</text></div>
                    </div>
                    <div className="child">
                    <img className="img" src={image6}/>
                    <div class="top-right"><FavoriteIcon style={style1}/></div>
                    <div className="bottom-left">The Golden Circle,</div>
                    <div className="bottom-left1">Iceland</div>
                    <div className="bottom-left2"><DateRangeIcon style={style2}/><text>5-7 days</text></div>
                    <div className="bottom-right"><RiFootprintLine style={style2}/><text>20km</text></div>
                    </div>     
                    </div>
                    </div>
)
}
export default Experiences;
