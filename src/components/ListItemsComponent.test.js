import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ListItemsComponent from './ListItemsComponent';

describe('ListItemsComponent Counter', () => {
  test('Present the Conter elements', () => {
    render(<ListItemsComponent />);
    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);
    const counterLabel = screen.getByText(/Counter:/i);
    const counterText = screen.getByTestId('counter-value');

    // Check the existence of each element
    expect(incrementButton).toBeInTheDocument();
    expect(incrementButton).toBeEnabled();
    expect(decrementButton).toBeInTheDocument();
    expect(decrementButton).toBeDisabled();
    expect(counterLabel).toBeInTheDocument();
    expect(counterText).toHaveTextContent(0);
  });

  test('Increment Button increases the value by 1 and enables the Decrement Button', () => {
    render(<ListItemsComponent />);
    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);
    const counterText = screen.getByTestId('counter-value');

    expect(counterText).toHaveTextContent(0);

    // Increment, increase the value and enable Decrement
    userEvent.click(incrementButton);
    expect(counterText).toHaveTextContent(1);
    expect(decrementButton).not.toBeDisabled();
  });

  test('Decrement Button decreases the value by 1 and disables the Decrement Button at 0', () => {
    render(<ListItemsComponent />);
    const incrementButton = screen.getByText(/Increment/i);
    const decrementButton = screen.getByText(/Decrement/i);
    const counterText = screen.getByTestId('counter-value');

    expect(counterText).toHaveTextContent(0);

    // Increment, increase value and enable Decrement
    userEvent.click(incrementButton);
    expect(counterText).toHaveTextContent(1);
    expect(decrementButton).not.toBeDisabled();

    // Decrement, decrease value and disable Decrement
    userEvent.click(decrementButton);
    expect(counterText).toHaveTextContent(0);
    expect(decrementButton).toBeDisabled();
  });
});

describe('ListItemsComponent Item List', () => {
  test('Prsent the Item List elements', () => {
    render(<ListItemsComponent />);
    const listItemInput = screen.getByLabelText(/Add New Item/i);
    const addItemButton = screen.getByTestId('add-item');

    // Check the existence of each element.
    expect(listItemInput).toBeInTheDocument();
    expect(addItemButton).toBeInTheDocument();
  });

  test('User can add item to page', () => {
    render(<ListItemsComponent />);
    const listItemInput = screen.getByLabelText(/Add New Item/i);
    const addItemButton = screen.getByTestId('add-item');

    expect(listItemInput).toHaveValue('');
    userEvent.type(listItemInput, 'hello');
    expect(listItemInput).toHaveValue('hello');

    userEvent.click(addItemButton);
    expect(screen.getByText('hello')).toBeInTheDocument();
    expect(listItemInput).toHaveValue('');
  });

  test('User can remove item from page', () => {
    render(<ListItemsComponent />);
    const listItemInput = screen.getByLabelText(/Add New Item/i);
    const addItemButton = screen.getByTestId('add-item');

    userEvent.type(listItemInput, 'hello');
    userEvent.click(addItemButton);
    const newItem = screen.getByText('hello');
    expect(newItem).toBeInTheDocument();

    const removeButton = screen.getByTestId('remove-item0');
    userEvent.click(removeButton);
    expect(newItem).not.toBeInTheDocument();
  });
});
