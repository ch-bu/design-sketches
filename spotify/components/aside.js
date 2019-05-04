import React, { Component } from 'react';
import styled from 'styled-components';
import { MdHome, MdSearch, MdLocalLibrary, MdCloudDownload } from 'react-icons/md';

const AsideDiv = styled.div`
  grid-area: aside;
  /* background-color: #111; */
  background-image: linear-gradient(to bottom, #111111, #0f1010, #0d0e0f, #0a0d0e, #070b0c);
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Logo = styled.div`
  padding: 25px;
  padding-top: 10px;
  min-height: 70px;

  img {
    width: 72%;
  }
`;

const Link = styled.div`
  min-height: 120px;
  font-size: 1.3rem;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      border-left: 5px solid #111;
      font-size: 0.8rem;
      color: rgba(255, 255, 255, .6);
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      grid-template-rows: 1fr;

      span {
        padding: 0 20px;
        width: 15%;
        font-size: 1.7rem;
      }
    }

    li:first-child {
      border-left: 5px solid #00D66E;
      color: #fff;
    }
  }
`;

const RecentlyPlayed = styled.div`
  padding-left: 25px;

  h2 {
    text-transform: uppercase;
    color: rgba(255, 255, 255, .6);
    font-size: 0.8rem;
    font-weight: 200;
    letter-spacing: 1px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      line-height: 130%;
      font-size: 0.8rem;
      padding: 8px 0;
      color: rgba(255, 255, 255, 0.95);
      font-weight: 200;
      letter-spacing: 1px;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      &:hover {
        color: #fff;
      }

      span:nth-child(2) {
        text-transform: uppercase;
      }
    }
  }
`;

const AboutMe = styled.div`
  justify-self: bottom;
  min-height: 100px;
  margin-top: auto;
  padding: 30px 30px 0 30px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, .6);

  p {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      height: 30px;
      margin-right: 10px;
    }

    &:hover {
      color: #fff;
    }

    span {
      color: rgba(255, 255, 255, .6);
    }

    hr {
      height: 0.6px;
      border: 0 none;
      color: #333; 
    }
    
    span:first-child {
      padding-right: 20px;
    }
    
    span:nth-child(2) {
      flex-grow: 1;
    }
  }

`;

class Aside extends Component {
  render() {
    return (
      <AsideDiv>
          <Logo>
            <h1><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" /></h1>
          </Logo>

          <Link>
            <ul>
              <li><span><MdHome /></span>Home</li>
              <li><span><MdSearch /></span>Search</li>
              <li><span><MdLocalLibrary /></span>Your Library</li>
            </ul>
          </Link>

          <RecentlyPlayed>
            <h2>Recently played</h2>

            <ul>
              <li><span>Soft Rock</span><span>Playlist</span></li>
              <li><span>Your Time Capsule</span><span>Playlist</span></li>
              <li><span>Discover Weekly</span><span>Playlist</span></li>
              <li><span>Have a Great Day!</span><span>Playlist</span></li>
            </ul>
          </RecentlyPlayed>

          <AboutMe>
            <p><span><MdCloudDownload /></span> Install App</p>
            <hr />
            <p><img src="https://avatars2.githubusercontent.com/u/7213407?s=40&v=4" /> <span>Christian Burkhart</span></p>
          </AboutMe>
      </AsideDiv>
      );
    }
  }
   
export default Aside;