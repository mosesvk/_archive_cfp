import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

// Main Pink -> #f2b4b4
// Black -> #393232
// Light Brown -> #eabf9f
// Light Gray -> #dddddd

export const SidebarContainer = styled.aside`
  position: fixed; 
  z-index: 999;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -1rem 0 4rem grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};
  overflow: scroll;

`

