import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: +61 452 520 182'>+61 452 520 182</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:amatyap2@gmail.com'>amatyap2@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>One team one dream</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/Loop545'>
            <AiFillGithub size='3rem' color='#9CC3D5FF'/>
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/pranab-raj-amatya-6615901a2/'>
            <AiFillLinkedin size='3rem' color='#9CC3D5FF'/>
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/pranab.raj_/'>
            <AiFillInstagram size='3rem' color='#9CC3D5FF'/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
