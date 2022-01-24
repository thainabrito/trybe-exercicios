// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
  return (
    <div>
    <Header />
    <Content />
    <Footer />
    </div>
  );
  }
}

export default App;
