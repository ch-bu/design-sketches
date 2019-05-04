import React, { Component } from 'react';
import styled, {ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize'


const theme = {
  breakpointOne: "1200px",
  breakpointTwo: "1600px",
  primaryColor: "rgb(248, 245, 236)",
  breakpointOne: "1200px",
  breakpointTwo: "1600px",
  width: "65vw"
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Normalize />
          {this.props.children}
        </div>
      </ThemeProvider> 
      );
    }
  }
   
export default Page;