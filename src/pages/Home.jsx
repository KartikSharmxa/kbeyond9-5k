import React, { useEffect } from 'react';
import HeroSection from '../sections/HeroSection'
import Navbar from '../components/layout/Navbar'
import JourneyClub from '../sections/journeyClub'
import WhatYouget from '../sections/whatYouget'
import TestimonialsSection from '../sections/testimonials'
import MemberSection from '../sections/memberSection'
import EducationVault from '../sections/EducationVault'
import AboutFounder from '../sections/aboutFounder'
import Plan from '../sections/plan'
import FaqSection from '../sections/Faq'
import NumberSection from '../sections/numberSection'
import SkillFlow from '../sections/skillFlow'
import Footer from '../components/layout/Footer';

function Home() {
 
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <NumberSection></NumberSection>
    <SkillFlow></SkillFlow>
    <JourneyClub></JourneyClub>
    <WhatYouget></WhatYouget>
    <TestimonialsSection></TestimonialsSection>
    <MemberSection />
    <EducationVault/>
    <AboutFounder></AboutFounder>
    <Plan/>
    <FaqSection></FaqSection>
    <Footer></Footer>

    </>
  )
}

export default Home