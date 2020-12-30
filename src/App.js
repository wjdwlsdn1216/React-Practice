import React from 'react';
import './App.css';
import Contact from './components/Contact';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return(
      <Contact/>
    );
  }
}

export default App;
