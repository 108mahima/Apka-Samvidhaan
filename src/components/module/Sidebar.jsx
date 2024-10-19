// Sidebar.jsx
import React from 'react';
import '../module/Sidebar.css';
import { Link } from 'react-router-dom';
import "./quiz"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Inside this Module:</h2>
      <ul>
        <li>
          <Link to="/">Video lectures</Link>
        </li>
        <li>
          <Link to="/src/components/module/quiz.jsx">Quizzes</Link>
        </li>
        <li>
          <Link to="/services">Crosswords</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
