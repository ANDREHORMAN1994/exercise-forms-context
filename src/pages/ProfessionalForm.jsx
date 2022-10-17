import React, { useState } from 'react';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

function ProfessionalForm() {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { curriculum, job, description } = state;
  return (
    <form
      className="box column is-half is-offset-one-quarter"
      onSubmit={ () => console.log('Envia as informações para a store') }
    >
      <h1 className="title">Informações Profissionais</h1>
      <TextArea
        label="Resumo do currículo: "
        value={ curriculum }
        name="curriculum"
        maxLength="1000"
        onChange={ handleChange }
        required
      />
      <Input
        label="Cargo:"
        name="job"
        type="text"
        value={ job }
        onChange={ handleChange }
        required
      />
      <TextArea
        label="Descrição do cargo: "
        name="description"
        maxLength="500"
        onChange={ handleChange }
        value={ description }
        required
      />
      <Button
        type="submit"
        label="Enviar"
        moreClasses="is-fullwidth is-info"
      />
    </form>
  );
}

export default ProfessionalForm;
