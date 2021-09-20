import React from 'react';
import img from '../assets/img.jpg';
import Side from './sidebar'; 
import Search from './Searching';
import Menu from './Menu';
import Experiences from './Experiences';
import Hotels from './Hotels';
function Dashboard(){
    return(
        
        <div fluid className="dashboard">
            <div>
            <Side/>
            </div>
            <div className="content">
            
                <div className="topSec">
                    <div >
                    <Search/>
                    </div>
                <div className="prof">
                    Hello, User <img className="imge" src={img}/>
                </div>
                </div>
            <div className="box-menu">
                <Menu/>
            </div>
                <div className="Exp">
                    <Experiences/>
                </div>
                <div className="Hote">
                <Hotels/>
                </div>
            </div>
            </div>
    )
}
export default Dashboard;
