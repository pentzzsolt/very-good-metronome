import { useId } from "react";
import { TempoProps } from "./types/TempoProps";

export const Tempo = ({ onChange, value }: TempoProps): JSX.Element => {
  const id = useId();

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <label htmlFor={id}>Tempo:</label>
        <output>{value}</output>
      </div>
      <div>
        <input id={id} style={{
          width: "100%"
        }} type="range" min="30" max="200" step="1" onChange={onChange} value={value}></input>
      </div>
    </>
  )
};
