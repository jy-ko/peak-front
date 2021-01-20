import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'
import styled from "styled-components";

import SearchIcon from '@material-ui/icons/Search';

// const Background = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.1);
//   position: fixed;
// `;

// const ModalWrapper = styled.div`
//   width: 100%;
//   height: 500px;
//   background: #fff;
//   position: relative;
//   z-index: 10;
  
// `;

// const Modal = ({ showModal, closeModal }) =>  {
//   return(
//     <div>
//       <Background>
//         <ModalWrapper>
//             <h1>Modal goes here</h1>
//             <button onClick={closeModal}></button>
//         </ModalWrapper>
//       </Background>
//   </div>
//   );
// };


function Modal({ closeModal }) {
    const Context = useContext(UserContext)
    const [focus, setFocus] = useState({
        city: false,
        guest: false
    });
    const [guest, setGuest] = useState('');
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);

    useEffect(() => {
        setGuest(adult + child === 0 ? '' : adult + child)
    }, [adult, child])

    const [value, setValue] = useState('')
    // console.log(focus)
    // console.log(Context.updateLocation)
    return (
        <div className="overlay">
            <div className="modal">
                <div className="search-bar">
                    <input type="text" placeholder="Location" value={value} onMouseOver={() => setFocus({ city: true })} />
                    <input type="text" placeholder="Add Guest" value={guest && `${guest} guests`} onMouseOver={() => setFocus({ guest: true })} />
                    <button className="modal-btn" onClick={() => Context.updateLocation(value)}><SearchIcon />Search</button>
                </div>

                <div className="list">
                    {focus.city && Context.list.map(list => {
                        return (
                            <>
                              <li onClick={(e) => setValue(e.target.outerText)} value={list}>{list}</li>
                            </>
                        )
                    })}

                </div>

                <div className="guest">
                    {
                        focus.guest &&
                        <div className="guests">
                            <div className="guest">
                                <label>Adults</label>
                                <p>Ages 13 or above</p>
                                <div className="count">
                                    <button onClick={() => setAdult(adult - 1)}>-</button>
                                    <p>{adult}</p>
                                    <button onClick={() => setAdult(adult + 1)}>+</button>
                                </div>
                            </div>
                            <div className="guest">
                                <label>Children</label>
                                <p>Ages 2 - 12</p>
                                <div className="count">
                                    <button onClick={() => setChild(child - 1)}>-</button>
                                    <p>{child}</p>
                                    <button onClick={() => setChild(child + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}
export default Modal;