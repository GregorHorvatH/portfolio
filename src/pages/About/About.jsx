// core
import React from 'react';

// components
import Description from '../../components/Description';

const DESCRIPTION = {
  title: 'About',
  details: ''
};

const About = () => (
  <div className="container-fluid app-container">
    <Description title={DESCRIPTION.title} details={DESCRIPTION.details} />
  </div>
);

export default About;
