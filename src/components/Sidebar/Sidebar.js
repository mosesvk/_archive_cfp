import React from "react";
import {SidebarContainer} from "./SidebarContainer";
import {FaTimes} from 'react-icons/fa';
import './Sidebar.scss'

const Sidebar = (props) => {
  // console.log(cart)
  
  const {cart, isOpen, toggle, editItem, total, removeItem, clearCart} = props;

    return (
      <SidebarContainer isOpen={isOpen}>
        <div className='close-div' onClick={toggle}>
          <FaTimes className='close-icon'/>
        </div>
        <div className='sidebar-wrap'>
          <div className=''>

          </div>
        </div>
      </SidebarContainer>
    );
};

export default Sidebar;
