import "./Counter.css";
import { CounterProps } from "./Counter.types";

export const Counter = ({ count }: CounterProps): JSX.Element => <h1 className="Counter">{count}</h1>;
