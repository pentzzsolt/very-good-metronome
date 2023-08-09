import React from 'react';
import './App.css';
import { Footer } from './components';

type Props = {};

type State = {
  count: number,
  interval: number | undefined,
  playing: boolean,
  tempo: number,
  timeSignature: string
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 1,
      interval: undefined,
      playing: false,
      tempo: 60,
      timeSignature: "4/4"
    };
  };

  public readonly handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      tempo: parseInt(event.target.value)
    });
  };

  public readonly handleTimeSignatureChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({
      timeSignature: event.target.value
    });
  };

  public readonly handleClick = (): void => {
    let interval;
    if (this.state.playing) {
      window.clearInterval(this.state.interval);
      this.setState({
        count: 1
      });
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
      <>
        <h1>{this.state.count}</h1>
        <label htmlFor="timeSignature">Time signature</label>
        <select onChange={this.handleTimeSignatureChange} value={this.state.timeSignature} id="timeSignature">
          <option value="2/4">2/4</option>
          <option value="3/4">3/4</option>
          <option value="4/4">4/4</option>
        </select>
        <button onClick={this.handleClick}>{this.state.playing ? "Stop" : "Start"}</button>
        <label htmlFor="tempo">Tempo: {this.state.tempo}</label>
        <input id="tempo" type="range" min="30" max="200" onChange={this.handleChange} value={this.state.tempo} step="1"></input>
        <Footer />
      </>
    );
  };

  private readonly increaseCount = (): void => {
    const count = this.state.timeSignature.split("/");
    this.setState({
      count: this.state.count % parseInt(count[0]) + 1
    });
  };
};

export default App;
