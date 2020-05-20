import React, { useState, useContext, useEffect } from 'react';

export const Modal =(props) => {
 const {handleClose, children, show} = props;
 const showHideClassName = show ? "modal display-block" : "modal display-none";

 return(
    <div className={showHideClassName}>
         <i  className="fa fa-2x fa-times close-icon" aria-hidden="true"  onClick={handleClose}></i>
    <section className="modal-main">
   
      {children}
    
      {/* <button className="btn" onClick={handleClose}>close</button> */}
    </section>
  </div>
 );
}