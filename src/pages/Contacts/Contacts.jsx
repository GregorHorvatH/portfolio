// core
import React from 'react';

// components
import Description from '../../components/Description';

const DESCRIPTION = {
  title: 'Contacts',
  details: ''
};

const Contacts = () => (
  <div className="container-fluid app-container">
    <Description title={DESCRIPTION.title} details={DESCRIPTION.details} />
  </div>
);

export default Contacts;
