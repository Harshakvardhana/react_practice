import React from 'react';
import { FaHelp } from 'react-icons/fa';
import './style.css';
import { render } from 'react-dom';

// get our fontawesome imports
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search" />
      <div>
        <FontAwesomeIcon icon="fa-solid fa-circle-question" />
      </div>
    </div>
  );
  return <div>FaHelp</div>;
}
