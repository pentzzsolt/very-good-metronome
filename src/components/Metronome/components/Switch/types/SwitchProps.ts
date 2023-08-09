import { AriaButtonProps } from '@react-aria/button';
import { PropsWithChildren } from 'react';

export type SwitchProps = PropsWithChildren<Pick<AriaButtonProps, 'onPress'>>;
