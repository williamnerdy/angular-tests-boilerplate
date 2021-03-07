import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { CounterComponent } from './counter.component';

describe('Counter', () => {
  let counter: number;

  beforeEach(() => {
    counter = 5;
  });

  test('should render counter', async () => {
    await render(CounterComponent, {
      componentProperties: { counter },
    });

    expect(screen.getByText('Current Count: 5'));
  });

  test('should increment the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: { counter },
    });

    userEvent.click(screen.getByText('+'));

    expect(screen.getByText('Current Count: 6'));
  });
});
