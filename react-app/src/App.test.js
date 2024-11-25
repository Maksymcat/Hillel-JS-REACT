import {  waitFor,getByPlaceholderText, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react';
import { todosTitle } from './components/Todos/Todos';
import Todos from './components/Todos/Todos';
import { render, fireEvent } from '@testing-library/react';
function add() {
  return todosTitle;
}

// Приклад Unit тесту для функції add
test('add function adds two numbers', () => {
  expect(add()).toBe('TODOS');
  expect(add()).toBe('TODOS');
  expect(add()).toBe('TODOS');
});
test('Text input accepts numbers and letters', () => {
  const { getByLabelText } = render(<Todos />);

  const input = getByLabelText('ben');
  act(() => {
    fireEvent.change(input, { target: { value: 'Buy milk 123' } });
  });
  expect(input.value).toBe('Buy milk 123');
});
test('Text input accepts numbers and letters', async () => {
  const { getByText, getByLabelText } = render(<Todos />);
 
  const button = screen.getByText(/Ввести новое задание/i);
  expect(screen.queryByText(/Обов`язкове поле/i)).toBeNull()

    fireEvent.click(button);
  
    await waitFor(() => {

      expect(screen.queryByText(/Обов`язкове поле/i)).toBeInTheDocument();
    });

});
test('Text input accepts numbers and letters', async () => {
  const { getByText, getByLabelText } = render(<Todos />);
 const input = getByLabelText('ben')
  const button = screen.getByText(/Ввести новое задание/i);
  expect(screen.queryByText(/Обов`язкове поле/i)).toBeNull()
    fireEvent.change(input, {target: {value: 'bebebe'}})
    fireEvent.click(button);
  
    await waitFor(() => {

      expect(screen.getByText('bebebe')).toBeInTheDocument();
    });

});

