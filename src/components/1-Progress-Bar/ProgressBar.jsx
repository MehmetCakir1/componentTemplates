import React from "react";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import "./progress.css"

const ProgressBar = () => {
    const [count,setCount]=useState(1)


    const handleNext=()=>{
        if(count<4){
            setCount(count+1)
        }
    }
    const handlePrevious=()=>{
        if(count>1){
            setCount(count-1)
        }
    }

  return (
    <>
        <h1 className="main-title">PROGRESS-BAR</h1>
      <div className="progress-bar">
        <div className={`${count===1 ? "current-circle" : "completed-circle"} circle`}>{count>1 ? <TiTick className="tick"/> : 1}</div>
        <div className={`${count>1 && "completed-line"} line`}></div>
        <div className={`${count===2 ? "current-circle" : count>2 ? "completed-circle" : "circle"} circle`}>{count>2 ? <TiTick className="tick"/> : 2}</div>
        <div className={`${count>2 && "completed-line"} line`}></div>
        <div className={`${count===3 ? "current-circle" :count>3 ? "completed-circle" : "circle"} circle`}>{count>3 ? <TiTick className="tick"/> : 3}</div>
        <div className={`${count>3 && "completed-line"} line`}></div>
        <div className={`${count===4 ? "current-circle" :count>4 ? "completed-circle" : "circle"} circle`}>4</div>
      </div>
      <div className="btn-div">
        <button
        onClick={handlePrevious}
        className="btn"
        >Previous</button>
        <button
        onClick={handleNext}
        className="btn"
        >Next</button>
      </div>
      <hr />
    </>
  );
};

export default ProgressBar;
