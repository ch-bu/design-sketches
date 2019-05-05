import React, { Component } from 'react';
import styled from 'styled-components';
import { FiPlus } from "react-icons/fi";
import { MdWeb, MdFormatIndentIncrease, MdSettingsCell } from "react-icons/md";
import { IoIosVolumeHigh } from "react-icons/io";
import { FiRepeat, FiSkipBack, FiSkipForward, FiPlayCircle, FiRotateCw } from "react-icons/fi";
import { Line } from 'rc-progress';


const PlayerDiv = styled.div`
  grid-area: player;
  background-color: #343434;
  border-top: 1px solid #000;
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  align-items: center;
  padding: 0 2vh;

  .current-album {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 12%;

    p {
      padding: 0px;
      margin: 0px;
      color: rgba(255, 255, 255, .6);
    }

    p:first-child {
      font-size: 1rem;
      margin-bottom: 4px;
      color: rgba(255, 255, 255, .9);
    }

    p:nth-child(2) {
    }
  }

  .player {
    flex-basis: 40%;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;

    .player-controls {
      display: flex;
      width: 30%;
      justify-content: space-between;
      align-items: center;

      svg {
        font-size: 1.4rem;
        transition: all 0.1s;

        &:first-child {
          color: #00D66E;
        }

        &:nth-child(3) {
          font-size: 2.4rem;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  .controls {
    flex-basis: 12%;
    display: flex;
    justify-content: space-between;
    

    .slider {
      width: 200px;
    }
  }

  svg {
    color: rgba(255, 255, 255, .6);
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

`;

class Player extends Component {
  render() {
    return (
      <PlayerDiv>
        <div className="current-album">
          {/* <img src="" alt=""/> */}
          <img src="https://source.unsplash.com/random/50x50?v=1" />
          <div className="title">
            <p>Georgia</p>
            <p>Phoebe Bridgers</p>  
          </div>
          <FiPlus />
          <MdWeb />
        </div>
        <div className="player">
          <div className="player-controls">
            <FiRepeat />
            <FiSkipBack />
            <FiPlayCircle />
            <FiSkipForward />
            <FiRotateCw />
          </div>

          <div className="progress">
            <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
          </div>
        </div>
        <div className="controls">
          <MdFormatIndentIncrease />
          <MdSettingsCell />
          <IoIosVolumeHigh />
        </div>
      </PlayerDiv>
      );
    }
  }
   
export default Player;