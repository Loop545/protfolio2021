import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const NavDropDown = (props) => (
  <DropDownContainer className='here'>
    <DropDownItemTitle>Here</DropDownItemTitle>
    <DropDownTextContainer> Whats in here???</DropDownTextContainer>
    <DropDownIcon>
      <AiFillPhone size='3rem'/>
      <AiOutlineMail size='3rem'/>
    </DropDownIcon>
  </DropDownContainer>
);

export default NavDropDown
