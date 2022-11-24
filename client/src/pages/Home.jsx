import React from 'react';
import ShoutBox from '../components/common/ShoutBox';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Welcome</h1>
      <ShoutBox 
        title="We are BAGELBOY!"
        content="The ultimate Bagel review database.  Check out all the stores reviewed so you know where to go next for a top nosh on a legendary Bagel!  Been somewhere GREAT... create an account to submit your own store experience and its details today."
        button="View Store Reviews"
        page="home"
        onClick={() => {navigate("/bagels/stores")}}
      />
    </main>
  )
}

export default Home;