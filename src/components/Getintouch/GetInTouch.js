import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import ConnectButton from './GetInTouchStyles';

const Connect = (props) => {
    return(
    <Section id="connect">
        <SectionDivider/>
        <SectionTitle className='connect-title'>ok, lets create something great</SectionTitle>
        <SectionText>If you like my projects and would like me to join your team/create something beautiful with you. Just Email me or diret message me via the soical links below. </SectionText>
        <ConnectButton classname='connect-button'href='mailto:amatyap2@gmail.com'> <AiFillMail />Get In Touch</ConnectButton>
    </Section>
    
    )}
export default Connect;