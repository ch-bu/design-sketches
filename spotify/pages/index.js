import React from 'react';
import styled from 'styled-components'
import Aside from '../components/aside'
import Main from '../components/main'
import Player from '../components/player'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(100px, auto) auto 7vh;
  grid-template-areas: "aside"
                         "main"
                         "player";

  @media only screen and (min-width: 600px) {
    grid-template-columns: 230px auto;
    grid-template-rows: 91vh 9vh;
    grid-template-areas: "aside main"
                       "player player";
  } 
`;


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Aside />
        <Main />
        <Player />
      </Container>
    )
  }
};

export default Index