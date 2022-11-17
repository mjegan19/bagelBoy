import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Styles = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  height: 550px;
  border-radius: 50px;
  text-align: center;
  background: var(--complementary);
  position: relative;

  .overlay {
    opacity: 0.6;
  }

  .reset {
    position: absolute;
    top: 150px;
    left: 25%;
    right: 25%;

    h1, p {
      color: var(--primary);
    }

    h1 {
      font-family: var(--logo);
      font-size: 3rem;
    }

    div {
      width: 200px;
      margin: 0 auto 0;
    }
  }
`;

const HeroBox = ({ title, content, button, page, onClick }) => {

  var bgImg;
    if (page === "home") {
      bgImg = require('../../assets/images/header/rainbow-bagel.jpg');
    }
    if (page === "about") {
      bgImg = require('../../assets/images/header/bagel-muted.jpg');
    }

  const navigate = useNavigate();

  return (
    <Styles>
      <div
        className='overlay'
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '550px',
          borderRadius: '50px'
        }}
      >
      </div>
      <div className='reset'>
        <h1>{title}</h1>
        <p>{content}</p>
        { button && (
          <div>
            <Button onClick={onClick}>{button}</Button>
          </div>
        )}
      </div>
    </Styles>
  )
}

export default HeroBox