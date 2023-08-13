import { TempoProps } from "./types/TempoProps";

export const Tempo = ({ onChange, value }: TempoProps): JSX.Element => (
  <>
    <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>
      <label htmlFor="tempo">Tempo:</label>
      <output>{value}</output>
    </div>
    <div>
      <input id="tempo" style={{
        width: "100%"
      }} type="range" min="30" max="200" step="1" onChange={onChange} value={value}></input>
    </div>
  </>
);
