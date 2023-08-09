import React from 'react';
import './App.css';

type Props = {};

type State = {
  count: number,
  interval: number | undefined,
  playing: boolean,
  tempo: number
};

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      interval: undefined,
      playing: false,
      tempo: 60
    };
  };

  public readonly handleClick = (): void => {
    let interval;
    if (this.state.playing) {
      window.clearInterval(this.state.interval);
    } else {
      interval = window.setInterval(this.increaseCount, 60 / this.state.tempo * 1000);
    };
    this.setState({
      interval: interval,
      playing: !this.state.playing
    });
  };

  public readonly render = (): JSX.Element => {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>{this.state.playing ? "Stop" : "Start"}</button>
      </div>
    );
  };

  private readonly increaseCount = (): void => {
    this.setState({
      count: this.state.count % 4 + 1
    });
  };
};

export default App;
