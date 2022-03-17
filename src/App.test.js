import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renderizando label', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText("Email");
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe("email");
});

test('Verifica se existe dois botoes', () => {
  render(<App />);
  const btn = screen.getAllByRole("button");
  expect(btn).toHaveLength(2);
});

test("Verifica se existe o botao 'Enviar'", () => {
  render(<App />);
  const btn = screen.getByTestId("id-send");
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveValue("Enviar");
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});