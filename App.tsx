import * as React from 'react';
import './style.css';
import Accordion from './Accordion.js';

export default function App() {
  
  return (
    <div>
      <h2>Accrdion</h2>
      <Accordion
        title={'Accrdion Title'}
        content={'Accrdion Content Accrdion Content Accrdion Content'}
      />
      <Accordion
        title={'Accrdion Title'}
        content={'Accrdion Content Accrdion Content Accrdion Content '}
      />
    </div>
  );
}
