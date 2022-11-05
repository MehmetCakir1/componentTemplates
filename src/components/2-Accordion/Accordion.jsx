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
    <>
    <h1 className="main-title">ACCORDION</h1>
    <div className="container">
      {
        data.map((item,index)=>{
          return(
            <SubMenu key={index} item={item}/>
          )
        })
      }
     
    </div>
     <hr />
     </>
  );
};

export default Accordion;
