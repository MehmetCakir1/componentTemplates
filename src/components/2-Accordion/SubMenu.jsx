import React, { useState } from "react";
import {FiChevronDown, FiChevronUp} from "react-icons/fi"

const SubMenu = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="main-part">
      <h1 onClick={handleClick}
      className="title"
      >{item.title}
      <span className="icon">
        {
          isShow ?  <FiChevronUp/> :  <FiChevronDown/>
        }
      </span>
      </h1>
        <div className={`${isShow ? "openMenu" :"submenu"}`}>
          {item.submenu.map((sub, index) => {
            return <p key={index}
            className="p-line"
            >{sub}</p>;
          })}
        </div>
    </div>
  );
};

export default SubMenu;
