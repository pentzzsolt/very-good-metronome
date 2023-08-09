import React, { useState } from 'react';
import { Footer, Switch } from './components';

export const Metronome = (): JSX.Element => {
  const [ count, setCount ] = useState(1);
  const [ interval, setInterval ] = useState<number | undefined>();
  const [ isPlaying, setIsPlaying ] = useState(false);
  const [ tempo, setTempo ] = useState(60);
  const [ timeSignature, setTimeSignature ] = useState('4/4');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTempo(parseInt(event.target.value))
  };

  const handleTimeSignatureChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setTimeSignature(event.target.value)
  };

  const handlePress = (): void => {
    if (isPlaying) {
      window.clearInterval(interval);
      setCount(1)
    } else {
      setInterval(window.setInterval(increaseCount, 60 / tempo * 1000));
    };
    setIsPlaying(!isPlaying);
  };

  const increaseCount = (): void => {
    const splitCount = timeSignature.split("/");
    setCount(count % parseInt(splitCount[0]) + 1)
  };

  return (
    <>
      <h1>{count}</h1>
      <label htmlFor="timeSignature">Time signature</label>
      <select onChange={handleTimeSignatureChange} value={timeSignature} id="timeSignature">
        <option value="2/4">2/4</option>
        <option value="3/4">3/4</option>
        <option value="4/4">4/4</option>
      </select>
      <Switch onPress={handlePress}>{isPlaying ? "Stop" : "Start"}</Switch>
      <label htmlFor="tempo">Tempo: {tempo}</label>
      <input id="tempo" type="range" min="30" max="200" onChange={handleChange} value={tempo} step="1"></input>
      <Footer />
    </>
  )
};
