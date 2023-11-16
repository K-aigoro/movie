import React, { useState } from "react";
import "./header.css";
import NavListitem from "../component/NavListitem";
import NavListData from "../data/NavListData";
import Search from "../component/Search";
import Button from "../component/Button";

function Header({ scroll }) {
  const [NavList, setNavList] = useState(NavListData);
  const handleOnClick = id => {
    const newNavList = NavList.map(nav => {
      nav.active= false;
      if(nav._id === id) nav.active = true;
      return nav;
    })
    setNavList(newNavList);
  }
  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
      <a href="/" className="logo">
        {" "}
        Titan Cinema
      </a>
      <ul className="nav">
        {NavListData.map((nav) => (
          <NavListitem key={nav._id} nav={nav}  navOnClick={handleOnClick}/>
        ))}
      </ul>
      <Search />
      <Button
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="Sign in"
      />
    </header>
  );
}

export default Header;
