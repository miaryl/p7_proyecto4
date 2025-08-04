import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Form from './form';

describe('QuoteForm', () => {
  test('permite escribir frase y autor y llama a handleSubmit', () => {
    global.alert = vi.fn();

    const mockHandleSubmit = vi.fn((e) => e.preventDefault());

    render(
      <Form />
    );

    const fraseInput = screen.getByLabelText(/Frase/i);
    const autorInput = screen.getByLabelText(/Autor/i);
    const boton = screen.getByRole('button', { name: /Guardar/i });

    fireEvent.change(fraseInput, { target: { value: 'Cree en ti' } });
    fireEvent.change(autorInput, { target: { value: 'Tú mismo' } });
    fireEvent.click(boton);

    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith("Frase guardada correctamente");
  });
});