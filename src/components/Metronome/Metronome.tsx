import { ChangeEvent, useState } from "react";
import { Button, Controls, Footer } from "./components";

export const Metronome = (): JSX.Element => {
  const [count, setCount] = useState(1);
  const [interval, setInterval] = useState<number | undefined>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(60);
  const [timeSignature, setTimeSignature] = useState("4/4");

  const handleTempoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTempo(parseInt(event.currentTarget.value))
  };

  const handleTimeSignatureChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setTimeSignature(event.currentTarget.value)
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
      <div>
        <Button onPress={handlePress}>{isPlaying ? "Stop" : "Start"}</Button>
        <Controls onTempoChange={handleTempoChange} onTimeSignatureChange={handleTimeSignatureChange} tempo={tempo} timeSignature={timeSignature} />
      </div>
      <Footer />
    </>
  )
};
