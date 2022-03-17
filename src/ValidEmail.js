import React from "react";
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
      <div>
        <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
        <h3>{(verifyEmail(email) ? 'Email Válido' : (<p style={{color: "red"}}>Email Inválido ou não digitado</p>))}</h3>
      </div>
  );
};

ValidEmail.propTypes = {
    email: PropTypes.string.isRequired,
};

export default ValidEmail;
