import React, { Component } from 'react';
import styled from 'styled-components';
import { MdPlayCircleOutline } from "react-icons/md";

const MainDiv = styled.div`
  grid-area: main;
  background-image: linear-gradient(to right bottom, #2e5258, #324852, #363f48, #35373c, #303030);
  display: grid;
  grid-template-columns: auto 100% auto;
  overflow-y: scroll;

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto 85% auto;
  }
`;

const Content = styled.div`
  grid-column:  2 / 3;
  padding-top: 4vh;

  nav {
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (min-width: 600px) {
      width: 60%;
    }

    a {
      text-decoration: none;
      text-transform: uppercase;
      color: rgba(255, 255, 255, .6);
      font-size: 0.9rem;
      transition: color 0.5s;

      &:first-child {
        color: #fff;
      }

      &:first-child:after {
          content: ""; /* This is necessary for the pseudo element to work. */ 
          display: block; /* This will put the pseudo element on its own line. */
          margin: 0 auto; /* This will center the border. */
          width: 40%; /* Change this to whatever width you want. */
          padding-top: 5px; 
          border-bottom: 2px solid #00D66E; /* This creates the border. Replace black with whatever color you want. */
      }
      
      &:hover {
        color: #fff;
      }
    }
  }

  div.albums {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media only screen and (min-width: 600px) {
      justify-content: flex-start;
    }

    .album {
      width: 85%;
      margin-bottom: 20px;
      margin-right: 17px;
     

      @media only screen and (min-width: 600px) {
        max-width: 15%;
      }

      .cover {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        justify-content: center;
        cursor: pointer;
        min-height: 200px;

        img {
          grid-column: 1 / -1;
          grid-row: span 1 / -1;
          filter: grayscale(.5);
          position: relative;
          width: 100%;
          height: 100%;
          object-fit: cover;

          &:hover {
            filter: grayscale(.9);
          }

          &:hover + svg {
            display: block;
            /* transform: scale(1); */
          }
        }

        svg {
          display: none;
          grid-column: 1 / -1;
          grid-row: span 1 / -1;
          z-index: 99;
          align-self: center;
          justify-self: center;
          font-size: 5rem;
          transition: all 0.2s;
        }
      }
    }

    h4 {
      font-size: 0.8rem;
      text-align: center;
      font-weight: 400;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.8rem;
      text-align: center;
      font-weight: 100;
      margin-top: 0;
    }
  }
`;

const ForMe = styled.div`
  margin-top: 6vh;
  font-size: 1.4rem;
  color: #fff;
  letter-spacing: 2px;
`;

class Main extends Component {
  render() {

    return (
      <MainDiv>
        <Content>
          <nav>
            <a href="#">Featured</a>
            <a href="#">Podcasts</a>
            <a href="#">Charts</a>
            <a href="#">Genres & Moods</a>
            <a href="#">New Releases</a>
            <a href="#">Discover</a>
          </nav>

          <ForMe>
            <h2>For Christian</h2>

            <div className="albums">
              <div className="album album1">
                <div className="cover">
                  <img src="https://source.unsplash.com/random/220x220?v=1" />
                  <MdPlayCircleOutline />
                </div>
                <div>
                  <h4>Dein Mixtape 1</h4>
                  <p>Agnèle Dubeau, Roedelius, Ryuichi Sakamoto und mehr</p>
                </div>
              </div>
              <div className="album album2">
                <div className="cover">
                  <img src="https://source.unsplash.com/random/220x220?v=2" />
                  <MdPlayCircleOutline />
                </div>
                <div>
                  <h4>Dein Mixtape 2</h4>
                  <p>Delayde, j'san, Idealism und mehr</p>
                </div>
              </div>
              <div className="album album3">
                <div className="cover">
                  <img src="https://source.unsplash.com/random/220x220?v=3" />
                  <MdPlayCircleOutline />
                </div>
                <div>
                  <h4>Dein Mixtape 3</h4>
                  <p>Martin Landh, Hushed, Slow, Meadow und mehr</p>
                </div>
              </div>
              <div className="album album4">
                <div className="cover">
                  <img src="https://source.unsplash.com/random/220x220?v=4" />
                  <MdPlayCircleOutline />
                </div>
                <div>
                  <h4>Dein Mixtape 4</h4>
                  <p>Muse, Toploader, Coldplay und mehr</p>
                </div>
              </div>
              <div className="album album5">
                <div className="cover">
                  <img src="https://source.unsplash.com/random/220x220?v=5" />
                  <MdPlayCircleOutline />
                </div>
                <div>
                  <h4>Dein Mixtape 5</h4>
                  <p>The Beatles, Elvis Presley, Queen und mehr</p>
                </div>
              </div>
              <div className="album album6">
                <div className="cover">
                  <img src="https://source.unsplash.com/random/220x220?v=6" />
                  <MdPlayCircleOutline />
                </div>
                <div>
                  <h4>Deine Top Tracks 2018</h4>
                  <p>Kina Grannis, Gabrielle Aplin, Lucy Schwartz und mehr</p>
                </div>
              </div>
              <div className="album album7">
                <div className="cover">
                  <img src="https://source.unsplash.com/random/220x220?v=7" />
                  <MdPlayCircleOutline />
                </div>
                <div>
                  <h4>B-Seite</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </ForMe>
        </Content>
      </MainDiv>
      );
    }
  }
   
export default Main;