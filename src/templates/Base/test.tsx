import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import BaseTemplate from '.';

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="mock menu"></div>;
    }
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function mock() {
      return <div data-testid="mock footer"></div>;
    }
  };
});

describe('<Base />', () => {
  it('should render the menu, footer and children', () => {
    renderWithTheme(
      <BaseTemplate>
        <h1>base template</h1>
      </BaseTemplate>
    );

    expect(screen.getByTestId('mock menu')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /base template/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock footer')).toBeInTheDocument();
  });
});
