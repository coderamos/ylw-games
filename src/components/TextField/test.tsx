import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import { MailIcon } from 'assets/icons';

import TextField from '.';

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(<TextField label="label" name="field" />);

    expect(screen.getByLabelText('label')).toBeInTheDocument();
  });

  it('should render without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('label')).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder="some placeholder" />);

    expect(screen.getByPlaceholderText('some placeholder')).toBeInTheDocument();
  });

  it('should change value when typing', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField onInput={onInput} label="textField" name="textField" />
    );

    const input = screen.getByRole('textbox');
    const text = 'this is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });
    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('should accessible by tab key', () => {
    renderWithTheme(<TextField label="textField" name="textField" />);

    const input = screen.getByLabelText('textField');
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('should renders with Icon', () => {
    renderWithTheme(<TextField icon={<MailIcon data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('shoud renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<MailIcon data-testid="icon" />} iconPosition="right" />
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });

  it('shoul not change values when disabled', async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="textField"
        name="textField"
        disabled
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();

    const text = 'this is my new text';
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it('should render with error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<MailIcon data-testid="icon" />}
        label="textField"
        name="textField"
        error="error message"
      />
    );

    expect(screen.getByText('error message')).toBeInTheDocument();
    expect(screen.getByText('error message')).toHaveStyle({ color: '#E72176' });
    expect(container.firstChild).toMatchSnapshot();
  });
});
