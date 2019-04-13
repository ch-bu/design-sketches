import React from 'react'
import App, { Container } from 'next/app'
import Page from '../components/Page'
import {createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: rgb(248, 245, 236);
    font-size: 11px;
    font-family: 'Prata', serif;
    color: #000;
    overflow-x: hidden;
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Page>
          <GlobalStyles />
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}