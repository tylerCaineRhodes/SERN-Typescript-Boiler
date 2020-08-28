import React, { Component } from 'react';
import Axios from 'axios';
import SomeComponent from './components/SomeComponent';
import style from './components/styles/App.css';

interface AppProps {
  passeddownmessage: string;
}

interface AppState {
  message: string;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps){
    super(props);

    this.state = {
      message: 'hero worm',
    }
  }

  render(){
    return (
      <div className= {style.container}>
        <h1>{this.state.message}</h1>
        <h3>{this.props.passeddownmessage}</h3>

        <SomeComponent />
      </div>
    )
  }
}
