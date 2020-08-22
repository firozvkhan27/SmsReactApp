import React from 'react';
import {useState} from 'react';
import './SearchByDates.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function SearchbyDates(props) {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
  
    return (
        <div>
       

         <DatePicker selected={startDate} onChange={date => setStartDate(date)}>
                    <div style={{ color: "red" }}></div>
        </DatePicker>
        <DatePicker selected={endDate} onChange={date => setEndDate(date)}>
                    <div style={{ color: "red" }}></div>
        </DatePicker>       
     
          <button onClick={()=>props.sortByDates(startDate,endDate)}>Search</button>
        </div>
    )
}

export default SearchbyDates
