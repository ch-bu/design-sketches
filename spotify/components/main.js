import React, { Component } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  /* grid-column: 2 / -1;
  grid-row: 1; */
  grid-area: main;
  background-image: linear-gradient(to right bottom, #2e5258, #324852, #363f48, #35373c, #303030);
`;

class Main extends Component {
  render() {
    return (
      <MainDiv>
        <h2>Main div</h2>
      </MainDiv>
      );
    }
  }
   
export default Main;