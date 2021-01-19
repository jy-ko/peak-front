import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: #fff;
  position: relative;
  z-index: 10;
  
`;

const Modal = ({ showModal, closeModal }) =>  {
  return(
    <div>
      <Background>
        <ModalWrapper>
            <h1>Modal goes here</h1>
            <button onClick={closeModal}></button>
        </ModalWrapper>
      </Background>
  </div>
  );
};

export default Modal;