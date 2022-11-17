import React from 'react';
import ShoutBox from '../components/common/ShoutBox';

const About = () => {
  return (
    <main>
    <h1>About Us</h1>
    <ShoutBox 
      title="We really LOVE Bagels ♥️"
      content="The ultimate Bagel review database.  Check out all the stores reviewed so you know where to go next for a top nosh on a legendary Bagel!  Been somewhere GREAT... create an account to submit your own store experience and its details today."
      button="Create Account"
      page="about"
      location="'/register'"
    />
    </main>

  )
}

export default About;