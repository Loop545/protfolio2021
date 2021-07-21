import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am <br />
        Pranab Raj Amatya.
      </SectionTitle>
      <SectionText>
        A Front-End developer in making. Started the journey back in 2020, since the day has never settled.
        Welcome to one of my projects where I showcase my skills. <br/>
        Cheers!
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/pranab-raj-amatya-6615901a2/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;