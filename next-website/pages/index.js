import React from 'react';
import Nav from '../components/header';
import Hero from '../components/hero';
import Grid from '../components/grid';
import styled from 'styled-components'
import { Spring, config } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "react-visibility-sensor";


const BackgroundImage = styled.div`
  position: absolute;
  top: 75vh;
  left:0;
  width: 100%;
  min-height: 150vh;
  z-index: -2;
  background: url('/static/gras.jpg') no-repeat;
  background-size: 150%;
  background-position: top;

  @media only screen and (min-width: 1000px) {
    top: 30vh;
  }
`;

const Landing = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-top: 20vh;

  @media only screen and (min-width: 1000px) {
    width: ${props => props.theme.width};
    margin-top: 10vh;
  }
`;

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <Landing>
          <Hero></Hero>
        </Landing>
        <Spring
          from={{ 
            opacity: 0,
            transform: "translateY(200px)"
          }}
          to={{ 
            opacity: 1,
            transform: "translateY(0px)"
          }}
          config={{duration: 600, tension: 180, friction: 12, delay: 500}}>
          {props => <BackgroundImage style={props}></BackgroundImage>}
        </Spring>
        <Grid></Grid>
      </div>
    )
  }
};

export default Index