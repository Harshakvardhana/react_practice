import React from 'react';
import { FaHelp } from 'react-icons/fa';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search" />
      <FontAwesomeIcon icon="fa-solid fa-circle-question" />
    </div>
  );
  return <div>FaHelp</div>;
}
