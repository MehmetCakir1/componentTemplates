import React, { useState } from "react";
import {FiChevronDown, FiChevronUp} from "react-icons/fi"

const data=[
  {title:"Fruits",
  id:1,
submenu:["apple","pear","banana"]},
{title:"Cars",
id:2,
submenu:["mercedes","porche","bmw"]},
{title:"Colors",
id:3,
submenu:["red","yellow","black"]},
]


const SubMenu = ({ item }) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = (e) => {
    setIsShow(!isShow);
  //  let control=data.find((item)=>item.title==e.target.innerText)
  //  console.log(control);
  //  control?.classList.add("openMenu")
  };


  return (
    <div className="main-part">
      <h1 onClick={handleClick}
      className="title"
      >{item.title}
        {
          isShow ?  <FiChevronUp/> :  <FiChevronDown/>
        }
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
