import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle>
          <span style={{color:"#ccdee4",fontWeight: "bold"}}>Hi ! (●'◡'●)</span> <br />
         <span style={{color:"#ccdee4",fontWeight: "lighter"}}>I’am Nsowa Mupela </span> 
        </SectionTitle>
        <SectionText>
        <span style={{color: ""}}>
        <span style={{fontSize:"50px"}}>A</span> software Engineer/Designer<br /> based in Africa Zambia,
        loves to craft attractive useful interactive products for the web. 
        introduced to computer scienc in 2017,</span><br /> <span style={{color:"",fontSize:"2rem"}}>if you are a business seeking for web presence or an employer looking to hire, get in touch with me</span>
        </SectionText>
        <Button onClick={props.handleClick}>MORE ABOUT ME</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;