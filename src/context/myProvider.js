import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [personal, setPersonal] = useState({});
  const [professional, setProfessional] = useState({});

  const valueGlobal = useMemo(() => ({
    personal,
    setPersonal,
    professional,
    setProfessional,
  }), [personal, professional]);

  return (
    <MyContext.Provider value={ valueGlobal }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
