import { ChangeEventHandler } from "react";

export type TimeSignatureProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>,
  value: string
};
