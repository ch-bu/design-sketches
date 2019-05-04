import React, { Component } from 'react';
import styled from 'styled-components';


const PlayerDiv = styled.div`
  /* grid-column: 1 / -1;
  grid-row: span 1; */
  grid-area: player;
  background-color: #343434;
  border-top: 1px solid #000;
`;

class Player extends Component {
  render() {
    return (
      <PlayerDiv>
        <h2>Player</h2>
      </PlayerDiv>
      
      );
    }
  }
   
export default Player;