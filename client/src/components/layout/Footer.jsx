// Import React modules
import React from 'react';
import styled from 'styled-components';

import { TbMoodBoy } from 'react-icons/tb';
import { GrInstagram, GrFacebook, GrTwitter, GrPinterest } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFax, FaRegBuilding, FaSitemap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { TiShoppingCart, TiContacts } from 'react-icons/ti';

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };


  const CopyBar = styled.div`
    text-align: center;
    background-color: var(--dark-background);
    color: var(--light-white);
    font-weight: 500;
    padding: 2rem 0;
  `;

  const StyledSections = styled.section`
    color: var(--dark-background);
  `;

  const Socials = styled.div`
      color: var(--dark-background);
  `;

  const StyledSpan = styled.div`
      color: var(--dark-background);
  `;


  return (

  // Footer Component adapted & modified from the Bootstrap tutorial @
  // https://mdbootstrap.com/docs/standard/navigation/footer/

  <footer class="text-center text-lg-start text-muted">
    <StyledSections>
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <TbMoodBoy size={40} /> BagelBoy
            </h6>
            <p>
              Est minus repellendus et reprehenderit velit vel sapiente aperiam. In deleniti quas quo mollitia laudantium et earum dolores aut aliquid distinctio quo voluptas dicta sed explicabo voluptas ex dicta rerum.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <TiShoppingCart size={40} /> Products
            </h6>
            <p><a href="#!" class="text-reset">Buy Bagels</a></p>
            <p><a href="#!" class="text-reset">Stickers</a></p>
            <p><a href="#!" class="text-reset">Clothing</a></p>
            <p><a href="#!" class="text-reset">Headwear</a></p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <FaSitemap size={40} /> Sitemap
            </h6>
            <p><a href="#!" class="text-reset">Stores</a></p>
            <p><a href="#!" class="text-reset">Add a Store</a></p>
            <p><a href="#!" class="text-reset">Bagel Recipes</a></p>
            <p><a href="#!" class="text-reset">Contact</a></p>
            <p><a href="#!" class="text-reset">Terms of Use</a></p>
            <p><a href="#!" class="text-reset">Privacy Policy</a></p>
            <p><a href="#!" class="text-reset">Help</a></p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <TiContacts size={40} /> Contact
            </h6>
            <p><FaRegBuilding /> Melbourne VIC 3001, AU</p>
            <p><MdEmail /> info@bagelboy.com.au</p>
            <p><BsFillTelephoneFill /> (03) 2314 9543</p>
            <p><FaFax /> (03) 2314 5743</p>
          </div>
        </div>
      </div>
    </StyledSections>

    <section class="d-flex justify-content-center ustify-content-lg-between p-4 border-bottom">
      <div class="me-5 mt-3 d-none d-lg-block">
        <StyledSpan>Connect with us on our social platforms:</StyledSpan>
      </div>
      <Socials>
        <a href="https://www.facebook.com" class="me-4 text-reset"><GrFacebook size={35} /></a>
        <a href="https://www.instagram.com" class="me-4 text-reset"><GrInstagram size={35} /></a>
        <a href="https://www.twitter.com" class="me-4 text-reset"><GrTwitter size={35} /></a>
        <a href="https://www.pinterest.com" class="me-4 text-reset"><GrPinterest size={35} /></a>
      </Socials>
    </section>

    <CopyBar>Copyright &copy; {getCurrentYear()} BagelBoy Pty Ltd, All Rights Reserved</CopyBar>
  </footer>
  )
}

export default Footer