import React from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {};

type State = {
  playing: boolean,
  tempo: number
};

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      tempo: 60
    };
  };

  public readonly handleClick = () => {
    this.setState({
      playing: !this.state.playing
    })
  };

  public readonly render = () => {
    return (
      <div className="App">
        <button onClick={this.handleClick}>{this.state.playing ? "Stop" : "Start"}</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  };
};

export default App;
