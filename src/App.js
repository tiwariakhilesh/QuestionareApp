import React, { Component } from 'react';
import classes from  './App.css';
import QuestionContainer from './container/QuestionContainer/QuestionContainer'
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <QuestionContainer/>
      </div>
    );
  }
}

export default App;
