import React from 'react'
import "./details.css"
import Spinner from './UI/Spinner';
import Popup from './UpdateWidget/Popup';

function DetailsInformation(props) {
    let details = props.detailslist;
     console.log(props.updateData)

    let row = details.map(it=>{
        return <tr key={it.id}><td>{it.city}</td> 
            <td>{it.start_date}</td>
             <td>{it.end_date}</td> 
             <td>{it.color}</td>
             <td>{it.price}</td>
             <td>{it.status}</td>
             <td><button  onClick={()=>props.togglePopup(it.id)} >edit</button></td>
             <td><button  onClick={()=>props.deleteHandler(it.id)}>delete</button></td>
             </tr>;
    })

    if(props.loader){
        row= <Spinner />
    }
     
    return (
          <div>
            <table id="customers">
            <tbody>
                <tr><th>city <span onClick={()=>props.sortBy('city')}>&#8597;</span></th>
                    <th>startdate <span onClick={()=>props.sortBy('startDate')}>&#8597;</span></th>
                     <th>enddate <span onClick={()=>props.sortBy('endDate')}>&#8597;</span></th>
                     <th>color <span onClick={()=>props.sortBy('color')}>&#8597;</span></th>
                     <th>price <span onClick={()=>props.sortBy('price')}>&#8597;</span></th>
                     <th>status <span onClick={()=>props.sortBy('status')}>&#8597;</span></th>
                     <th>Update </th>
                     <th>Delate </th>
                </tr>
                  {row}
                  </tbody>
            </table>

        {props.showPopup ?  
        <Popup  
          updateData={props.updateData}
          updateHandler={props.updateHandler}
        text='Click "Close Button" to hide popup'  
           
        />  
            : null  
        }     
        </div>
    )
}

export default DetailsInformation
