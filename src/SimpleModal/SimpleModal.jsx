import React, { useEffect } from "react";
import { Transition } from "react-transition-group";

import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal.css";
import { Helmet } from 'react-helmet';

export const SimpleModal = ({ isOpen, onClose, children }) => {
  const onWrapperClick = (event) => {
    event.stopPropagation();
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen])
  
  return (
    <>
    <Helmet>
        <title>Home-School</title>
        <meta name="description" content="Удобное обучение не выходя из дома" />
        <meta name="theme-color" content="#0D8259" />
      </Helmet>


      
      <Transition in={isOpen} timeout={0} unmountOnExit={true}>
        {(state) => (
          
          <div className={`modal modal--${state}`}>
             
            <div className="modal-wrapper" onClick={onWrapperClick }> 
            {/* <InnerModal onClick={e => e.stopPropagation()} /> */}
            <div className="nnn">    <div className="modal-content"></div>
             <button
                  className="modal-close-button"
                  onClick={() => onClose()}
                >
                  <IconClose />
                </button> 
                {children}
                </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
