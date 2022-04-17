import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/join">Join</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
