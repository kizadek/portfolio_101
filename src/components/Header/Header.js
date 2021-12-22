import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {FaGithub,FaInstagramSquare,FaTwitter} from 'react-icons/fa';
import { DiCssdeck,DiRedhat } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{display:"flex",alignItems: "center" , color:"#fff"}}>
            <DiRedhat size="3rem"/> <span>Nsowa Mupela</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>
              Projects
            </NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>
              Technologis
            </NavLink>
          </Link>
        </li>
        <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> 
      </Div2>
      <Div3>
       <SocialIcons href="https://github.com/kizadek">
        <FaGithub size="2.5rem" />
       </SocialIcons>
       <SocialIcons href="https://www.linkedin.com/in/mupela-nsowa-492292222/">
         <AiFillLinkedin size="2.5rem" />
       </SocialIcons>
       <SocialIcons href="https://www.instagram.com/kizadek/">
        <FaInstagramSquare size="2.5rem" />
       </SocialIcons>
       {/* <SocialIcons href="#">
        <FaTwitter size="3.5" />
       </SocialIcons> */}
      </Div3> 
    </Container>
  </div>
);

export default Header;
