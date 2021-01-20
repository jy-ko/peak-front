import React from 'react'
import { useGlobalContext } from '../Context';
import SearchIcon from '@material-ui/icons/Search';

function Modal() {
    const { isModalOpen, closeModal } = useGlobalContext();
    return (
        <div className={`${ isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
            <div className="modal-container">
                <h3>modal content</h3>
                <div className="location">Location</div>
                <div className="level">Level</div>
                <button className="close-modal-btn" onClick={ closeModal }>
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
}
export default Modal;