import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

const dummyButton = 'Dummy button';
const dummyFunction = jest.fn();

test('renders button with the correct label', () => {
  render(<Button>{ dummyButton }</Button>);
  const button = screen.getByRole('button', {
    name: dummyButton
  });
  expect(button).toBeVisible();
});

test('calls the function that was passed', () => {
  render(<Button onPress={dummyFunction}>{ dummyButton}</Button>);
  const button = screen.getByRole('button', {
    name: dummyButton
  });
  userEvent.click(button);
  expect(dummyFunction).toHaveBeenCalled();
});
