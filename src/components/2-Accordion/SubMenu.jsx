import React, { useState } from "react";

const SubMenu = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <h1 onClick={handleClick}>{item.title}</h1>
        <div className={`${isShow ? "openMenu" :"submenu"}`}>
          {item.submenu.map((sub, index) => {
            return <p key={index}>{sub}</p>;
          })}
        </div>
    </div>
  );
};

export default SubMenu;
