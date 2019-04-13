import React from 'react';
import styled from 'styled-components'
import { Spring, config } from 'react-spring/renderprops.cjs';
import VisibilitySensor from "react-visibility-sensor";


const Grid = styled.div`
  margin-top: 50vh;
  display: grid;
  height: 800px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr, 5);
  grid-template-areas: "box1 box1"
                       "box2 box3"
                       "box4 box5"
                       "box6 box6";

  @media only screen and (min-width: 1000px) {
    margin-top: 30vh;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: ". . box1 box1"
                        "box2 box3 . ."
                        "box2 box4 box5 box6";
  }

  .box1, .box2, .box3, .box4, .box5, .box6 {
    font-size: 1.2rem;
    color: #fff;
    padding: 20px;
    transition: all 0.1s;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.1);
    }

    @media only screen and (min-width: 1000px) {
      font-size: 1.8rem;
    }
  }

  .box1 {
    background-color: #324333;
    grid-area: box1;
  }

  .box2 {
    grid-area: box2;
    background-color: #366baa;
  }

  .box3 {
    grid-area: box3;
    background-color: #6baa36;
  }

  .box4 {
    grid-area: box4;
    background-color: #d2d49a;
  }

  .box5 {
    grid-area: box5;
    background-color: #666666;
  }

  .box6 {
    grid-area: box6;
    background-color: #53832a;
  }
`;

class GridContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: null 
    };

    this.onChangeVisibility = this.onChangeVisibility.bind(this);
  }

  render() {
    return (
      <Grid>
        <VisibilitySensor active={!this.state.visible} 
                          onChange={this.onChangeVisibility}
                          partialVisibility offset={{ top: 100 }}>
          {({ isVisible }) => (
            <Spring
              delay={300}
              to={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(600px)"
              }}>
              { props => <div style={props} className="box1">The best gras ever</div>}
            </Spring>
          )}
        </VisibilitySensor>
        <div className="box2">When to seed!</div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="box5">Smell it</div>
        <div className="box6"></div>
      </Grid>
    )
  }

  onChangeVisibility (isVisible) {
    this.setState({visible: isVisible});
  }
};

export default GridContainer