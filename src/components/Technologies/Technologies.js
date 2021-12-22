import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {FaHammer} from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider divider />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     <SectionText>
     I've worked with a range a technologies in the web development world.
      From Back-end To Design
     </SectionText>
     <List>
       <ListItem>
          <picture>
            <DiFirebase size="4rem" />
          </picture>
          <ListContainer>
            <ListTitle>BACK-END</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node, Express and Databases
            </ListParagraph>
          </ListContainer>
       </ListItem>
       <ListItem>
         <picture>
           <DiReact size="4rem" />
         </picture>
         <ListContainer>
           <ListTitle>FRONT-END</ListTitle>
           <ListParagraph>
             Great with <br />
             React.js 
           </ListParagraph>
         </ListContainer>
       </ListItem>
       <ListItem>
         <picture>
           <FaHammer size="3rem" />
           <ListContainer>
             <ListTitle>UI/UX</ListTitle>
             <ListParagraph>
               The best ideas take root 
             </ListParagraph>
           </ListContainer>
         </picture>
       </ListItem>
     </List>
   </SectionText>
 </Section>
);

export default Technologies;
