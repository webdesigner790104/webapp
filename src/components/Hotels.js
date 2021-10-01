import React from 'react';
import HCard from './hcard';
import { hData } from './hData';
function Hotels(){
    return(
        <div>
             <h3> Top Hotels</h3>
            <div className="box-hotel">
            {hData.map((e)=>{
            return(
                <HCard img={e.img} name={e.name} desc={e.desc} rating={e.rating}/>
            );
        }
        )}
            </div>
        </div>
    )
}
export default Hotels;