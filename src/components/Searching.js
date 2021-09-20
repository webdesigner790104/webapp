import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
function Search(){
    return(
        <div className="sea">
                    
                     <button className="search-btn">
                    <SearchIcon/>
                    </button> 
                    <input type="text" className="searchcontrol" placeholder="Search"/>
                    
                    </div>
    )
}
export default Search;
