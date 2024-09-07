import React from "react";
import "./styles.css";
import menus from "./data";
import MenuList from "./MenuList";
const TreeNavigation = () => {
  return (
    <div className="tree-view-container">
      <MenuList items={menus} />
    </div>
  );
};

export default TreeNavigation;
