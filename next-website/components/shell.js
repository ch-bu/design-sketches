import {ThemeProvider} from 'styled-components';
import React from 'react';
import { Normalize } from 'styled-normalize'

const theme = {
  breakpointOne: "1200px",
  breakpointTwo: "1600px",
  primaryColor: "rgb(248, 245, 236)",
  breakpointOne: "1200px",
  breakpointTwo: "1600px",
  width: "65vw"
};

class Shell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Normalize />
          <style jsx global>{`
            body { 
              background: rgb(248, 245, 236);
              font-size: 11px;
              font-family: 'Prata', serif;
              @import url("https://fonts.googleapis.com/css?family=Cinzel:400,700,900");
              @import url("https://fonts.googleapis.com/css?family=Prata");
              color: #000;
              overflow-x: hidden;
            }
          `}</style>
            {this.props.children}
        </div>
      </ThemeProvider> 
    )
  }
};

export default Shell