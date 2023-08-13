import { CounterProps } from "./types/CounterProps";

export const Counter = ({ children }: CounterProps): JSX.Element => <h1 style={{
  fontSize: "30vh",
  margin: 0,
  paddingTop: ".25em"
}}>{children}</h1>;
