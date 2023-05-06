import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        <span style={{color: '#00FF00'}}>Pedro's Portfolio</span>
      </SectionTitle>
      <SectionText>
        I am a Software Engineer with a passion for learning new technologies and building new things.
      </SectionText>
      <Button onClick={() => window.location = 'https://pacosta613.github.io/'}>Learn More</Button>
    </LeftSection>
  </Section>

);

export default Hero;