import React from 'react';
import styled from 'styled-components'
import { Spring, config } from 'react-spring/renderprops.cjs';

const HeroDiv = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;

  h2 {
    order: 0;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: 0;
  }

  p {
    order: 1;
    font-size: 1.1rem;
    margin: 0;
  }

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    height: 70vh;
    margin-top: 0vh;

    h2 {
      order: 1;
      font-size: 8rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

class Hero extends React.Component {
  render() {
    return (
      <HeroDiv>
        <p>Christian Burkhart</p>
        <Spring
          from={{ 
            opacity: 0,
            top: -100,
            transform: "scale(0.8)",
            transform: "translateY(-80px)"
          }}
          to={{ 
            opacity: 1,
            top: 0,
            transform: "scale(1)",
            transform: "translateX(0px)"
          }}
          config={{duration: 500, tension: 180, friction: 12}}>
          {props => <h2 style={props}>The Grass is Singing</h2>}
        </Spring>
        <p>2 Okt, 2019<br />13 Jan, 2020</p>
      </HeroDiv>
    )
  }
};

export default Hero

