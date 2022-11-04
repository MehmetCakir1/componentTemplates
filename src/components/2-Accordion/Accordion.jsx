import { useState } from "react";
import "./accordion.css";
import SubMenu from "./SubMenu";

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

const Accordion = () => {

  return (
    <div className="container">
      {
        data.map((item)=>{
          return(
            <SubMenu key={item.id} item={item}/>
          )
        })
      }
    </div>
  );
};

export default Accordion;
