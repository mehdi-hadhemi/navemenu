import React from "react";

const SubMenu = props => {
  return (
    <ul className="menu">
      {props.list.map((el, i) => (
        <li key={i} className="list">
          <a href={el.link}>{el.text}</a>
        </li>
      ))}
    </ul>
  )
};

export default SubMenu;