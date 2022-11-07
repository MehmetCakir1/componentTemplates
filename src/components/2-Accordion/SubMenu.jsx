import React, { useState } from "react";


const SubMenu = ({ data}) => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = data.map((item, index) => {
    const isActive = index === activeIndex ? "active" : "hide";

  return (
    <div key={index} className="main-part">
      <h1 onClick={()=>handleClick(index)} className="title">
        {item.title}
      </h1>
      <div className={`${isActive}`}>
        {item.submenu.map((sub, index) => {
          return (
            <p key={index} className="p-line">
              {sub}
            </p>
          );
        })}
      </div>
    </div>
  );
});
return <div>{renderedItems}</div>;
};

export default SubMenu;
