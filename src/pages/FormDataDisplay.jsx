import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Context
    return (
      <section className="box column is-half is-offset-one-quarter">
        <h1 className="title">Dados Enviados</h1>
        <div>
          {/* { `Nome: ${name}` } */}
        </div>
        <div>
          {/* { `Email: ${email}` } */}
        </div>
        <div>
          {/* { `CPF: ${cpf}` } */}
        </div>
        <div>
          {/* { `Endereço: ${address}` } */}
        </div>
        <div>
          {/* { `Cidade: ${city}` } */}
        </div>
        <div>
          {/* { `Estado: ${uf}` } */}
        </div>
        <div>
          {/* { `Currículo: ${curriculum}` } */}
        </div>
        <div>
          {/* { `Cargo: ${job}` } */}
        </div>
        <div>
          {/* { `Descrição do cargo: ${description` } */}
        </div>
      </section>
    );
  }
}

// FormDataDisplay.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   job: PropTypes.string.isRequired,
//   curriculum: PropTypes.string.isRequired,
//   uf: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
// };

export default FormDataDisplay;
