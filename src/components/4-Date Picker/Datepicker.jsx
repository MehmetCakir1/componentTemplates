import React, { useEffect } from 'react'
import { useState } from 'react'
import "./datepicker.css"

const Datepicker = () => {
    const [firstDate,setFirstDate]=useState("")
    const [lastDate,setLastDate]=useState("")
    const [errorMsg,setErrorMsg]=useState("")

    
    const handleFirstDate=(e)=>{
        e.preventDefault()
        setFirstDate(e.target.value)
    }
    const handleLastDate=(e)=>{
        e.preventDefault()
        setLastDate(e.target.value)
    }

    useEffect(() => {
        if(lastDate<firstDate && lastDate){
            setErrorMsg("First Date Can Not Be Less Than Last Date")
        }else{
            setErrorMsg("")
        }
    }, [firstDate,lastDate])
    
   

  return (
 <>
    <div className='date-container'>
        <input 
        type="date"
        value={firstDate}
        onChange={handleFirstDate}
        />
        <input type="date" 
        value={lastDate}
        onChange={handleLastDate}/>
    </div>
    <div>
        <h3>{errorMsg && errorMsg}</h3>
    </div>
    <div className='date-div'>
        <div>
            <span>First Date :</span>
            <span>{firstDate}</span>
        </div>
        <div>
            <span>Last Date :</span>
            <span>{lastDate}</span>
        </div>
        <hr />
    </div>
 </>
  )
}

export default Datepicker