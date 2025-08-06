import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React, { useState } from 'react';
import Form from './form';

function Wrapper({ handleSubmit = () => {} }) {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <Form
      text={text}
      author={author}
      setText={setText}
      setAuthor={setAuthor}
      handleSubmit={handleSubmit}
      error=""
      image=""q
      setImage={() => {}}
      handleImage={() => {}}
    />
  );
}

describe('Form component', () => {
  it('renderiza correctamente el formulario', () => {
    render(<Wrapper />);
    expect(screen.getByText(/¡Dale forma a tu inspiración!/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Frase:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Autor:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Guardar/i })).toBeInTheDocument();
  });

  it('actualiza los inputs cuando el usuario escribe', () => {
    render(<Wrapper />);
    const fraseInput = screen.getByLabelText(/Frase:/i);
    fireEvent.change(fraseInput, { target: { value: 'Hola mundo' } });
    expect(fraseInput).toHaveValue('Hola mundo');

    const authorInput = screen.getByLabelText(/Autor:/i);
    fireEvent.change(authorInput, { target: { value: 'Yo' } });
    expect(authorInput).toHaveValue('Yo');
  });

});