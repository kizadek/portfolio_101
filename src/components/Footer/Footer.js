import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {FaGithub,FaInstagramSquare,FaTwitter} from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+260971196736">
            +260-971196736
          </LinkItem>
       </LinkColumn>
       <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:mupelansowa404@gmail.com">
             mupelansowa404@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>one often meets his destiny on the road he takes to avoid it</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/kizadek">
        <FaGithub size="2.5rem" />
       </SocialIcons>
       <SocialIcons href="https://www.linkedin.com/in/mupela-nsowa-492292222/">
         <AiFillLinkedin size="2.5rem" />
       </SocialIcons>
       <SocialIcons href="https://www.instagram.com/kizadek/">
        <FaInstagramSquare size="2.5rem" />
       </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
