import React, { useState, useContext } from 'react';

import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import MyContext from '../context/myContext';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

function PersonalForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const { setPersonal } = useContext(MyContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPersonal({
      name, email, cpf, address, city, uf,
    });
  };

  return (
    <form
      className="box column is-half is-offset-one-quarter"
      onSubmit={ handleSubmit }
    >
      <h1 className="title">Informações Pessoais</h1>
      <Input
        label="Nome: "
        type="text"
        onChange={ ({ target }) => setName(target.value) }
        value={ name }
        name="name"
        required
      />
      <Input
        label="Email: "
        type="text"
        onChange={ ({ target }) => setEmail(target.value) }
        value={ email }
        name="email"
        required
      />
      <Input
        label="Cpf: "
        type="text"
        onChange={ ({ target }) => setCpf(target.value) }
        value={ cpf }
        name="cpf"
        required
      />
      <Input
        label="Endereço: "
        type="text"
        onChange={ ({ target }) => setAddress(target.value) }
        value={ address }
        name="address"
        required
      />
      <Input
        label="Cidade: "
        type="text"
        onChange={ ({ target }) => setCity(target.value) }
        name="city"
        value={ city }
      />
      <Select
        defaultOption="Selecione"
        onChange={ ({ target }) => setUf(target.value) }
        value={ uf }
        label="Estado: "
        name="uf"
        options={ UF_LIST }
      />
      <Button
        type="submit"
        label="Enviar"
        moreClasses="is-fullwidth is-info"
      />
    </form>
  );
}

export default PersonalForm;
