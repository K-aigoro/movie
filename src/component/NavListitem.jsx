import React from 'react';
import "./navListitem.css";
function NavListitem({ nav, navOnClick }) {
  return (
    <li>
      <a
        href={nav.link}
        className={`${nav.active ? 'active': undefined}`}
        onClick={() => {
          navOnClick(nav._id);
        }}
      >
        {nav.name}
      </a>
    </li>
  );
}
export default NavListitem;
