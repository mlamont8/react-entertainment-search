
import React from 'react';
import Header from './Header';
import Footer from '../containers/FooterContainer';



export default class Main extends React.Component {
  render() {
    return(
      <main className="fullContain fullSite">
        <Header />
      {this.props.children}
      </main>
    )
  }
}
