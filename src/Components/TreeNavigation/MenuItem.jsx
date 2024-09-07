import React, { useState } from "react";
import MenuList from "./MenuList";
import {FaMinus, FaPlus} from 'react-icons/fa'
const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item?.children?.length >0;
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <li style={{listStyle:"none"}}>
        <div style={{display:"flex",gap:"5px"}}>

      <p >{item.label}</p>
      <span onClick={handleToggle} style={{fontSize:"16px"}}> {item && hasChildren ? (!isOpen? <FaPlus/>:<FaMinus/>):null}</span>
        </div>
      {isOpen && item &&  hasChildren > 0 ? (
        <MenuList items={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
