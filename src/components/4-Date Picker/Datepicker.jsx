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
 <h1 className='main-title'>DATE PICKER</h1>
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
        <h3 className='error-msg'>{errorMsg}</h3>
    <div className='date-div'>
        <div>
            <span>First Date :</span>
            <span>{firstDate}</span>
        </div>
        <div>
            <span>Last Date :</span>
            <span>{lastDate}</span>
        </div>
    </div>
    <hr />
 </>
  )
}

export default Datepicker