import React, { useState, useContext } from "react";
import Modal from './Modal/Modal'
import SearchIcon from '@material-ui/icons/Search';
import { UserContext } from '../UserContext'

function Header() {
    const [modal, setModal] = useState(false)
    const Context =useContext(UserContext)
      return (
        <header>
         <div className="logo">Peak 🏔</div>

         <div className="search-bar" >
            <input type="text" placeholder="Location" value={Context.location} onClick={() => setModal(true)}/>
            <input type="text" placeholder="Level"onClick={() => setModal(true)}/>
            <button><SearchIcon id="search" /></button>
        </div>  

        {modal && <Modal close={closeModal}/>}

        </header>
      );
    function closeModal(){
        setModal(false);
    }
    };
   
export default Header;