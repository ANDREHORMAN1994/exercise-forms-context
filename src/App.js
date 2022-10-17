import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';

function App() {
  return (
    <main className="has-background-light my-container">
      <Switch>
        <Route exact path="/" component={ PersonalForm } />
        <Route path="/professionalform" component={ ProfessionalForm } />
        <Route path="/formdisplay" component={ FormDataDisplay } />
      </Switch>
    </main>
  );
}

export default App;
