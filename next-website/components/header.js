import React from 'react';
import styled from 'styled-components'

const MyHeader = styled.header`
  margin: 0 auto;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
  z-index: 99;
  height: 80px;
  padding-top: 20px;
  text-align: center;
  border-bottom: 1px solid #dfdcd4;
  transition: all 0.5s;

  @media only screen and (min-width: 1000px) {
    height: 100px;
  }

  h1 {
    padding: 10px;
    font-family: 'Prata', serif;
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 0 auto;
    transition: all 0.5s;

    @media only screen and (min-width: 1000px) {
      font-size: 0.9rem;
    }
  }

  &.smaller {
    padding-top: 10px;
    background-color: #fff;
    height: 50px;

    h1 {
      font-size: 0.4rem;
    }

    @media only screen and (min-width: 1000px) {
      background-color: #fff;
      height: 60px;

      h1 {
        font-size: 0.6rem;
      }
    }
  }

`;

class Nav extends React.Component {
  render() {
    return (
      <MyHeader id="header">
        <h1>Kunst <br/>Historisches<br />Museum<br/>Freiburg</h1>
      </MyHeader>
    )
  }

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 50,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
};

export default Nav

