import React from "react";
import { useGlobalContext } from '../Context';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
    const { openModal } = useGlobalContext();
    return (
      <>
        <div>
        <button onClick={ openModal } className='btn'>
            Location
        </button>
        </div>
        
        <button onClick={ openModal } className='btn'>
            Level
        </button>
    </>
    );
      
}
   
export default Search;