import { ChangeEventHandler } from "react";

export type TempoProps = {
  onChange: ChangeEventHandler<HTMLInputElement>,
  value: number
};
