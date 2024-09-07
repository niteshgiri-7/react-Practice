import React from "react";
import MenuItem from "./MenuItem";
const MenuList = ({ items }) => {
  return (
    <ul>
      {items && items.length
        ? items.map((item, index) => <MenuItem item={item} key={index} />)
        : null}
    </ul>
  );
};

export default MenuList;
