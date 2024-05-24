import React, { useState, useEffect } from 'react';
import MakeThemost from '../pages/Make themost/MakeThemost';
import HeaderBanner from '../pages/headerBanner/headerBanner';
import LimitedTime from '../pages/TrustedBy/trustedBy';
import TheJourney from '../pages/TheJourney/Thejourney';
import WhoWeAre from '../pages/whyWe/whyWe';
import VideoBanner from '../pages/videoplay/videoplay';
import PartnerTestimonials from '../pages/partners/partners';
import Member from '../pages/BecomeMmeber/member';
import UserReview from '../pages/userReview/userReview';
import './Home.css'; 
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <HeaderBanner />
          <TheJourney />
          <MakeThemost />
          <Member />
          <PartnerTestimonials />
          <LimitedTime />
          <WhoWeAre />
          <VideoBanner />
          <UserReview />
        </>
      )}
    </>
  );
};

export default Home;
