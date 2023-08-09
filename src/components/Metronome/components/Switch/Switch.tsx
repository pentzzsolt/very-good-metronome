import { useButton } from '@react-aria/button';
import { SwitchProps } from './types/SwitchProps';
import { PropsWithChildren, useRef } from 'react';

export const Switch = ({ children, onPress }: PropsWithChildren<SwitchProps>): JSX.Element => {
  let ref = useRef(null);
  let { buttonProps } = useButton({
    onPress
  }, ref);

  return <button {...buttonProps} ref={ref}>{ children }</button>;
};
