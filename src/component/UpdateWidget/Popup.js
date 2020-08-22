import React from 'react';
import './Popup.css';

class Popup extends React.Component {
    
    state ={
        updateFields:{},
        data:this.props.updateData
         }

         updateFileds=(event)=>{
            event.persist();
            console.log("handle")

            let value = event.target.value;
          
            this.setState(prevState => ({
              data: { ...prevState.data,  [event.target.name]: value }
            }))
         }
  
    render() {
        console.log(this.props);
        return (
            
            <div className='popup'>
                <div className='popupinner'>
                <ul>
                  <li> City  :<input type="text" name="city" value={this.state.data.city} onChange={this.updateFileds}/></li>
                  <li> status :<input type="text" name="status" value={this.state.data.status} onChange={this.updateFileds}/></li>  
                  <li> price:   <input type="text" name="price" value={this.state.data.price} onChange={this.updateFileds}/></li>  
                  <li> color :  <input type="text"  name="color"value={this.state.data.color} onChange={this.updateFileds}/></li>
                  <li> startate :  <input type="text" name="start_date" value={this.state.data.start_date} onChange={this.updateFileds}/></li>
                  <li> endDate :  <input type="text"  name="end_date" value={this.state.data.end_date} onChange={this.updateFileds}/></li>  
                </ul>
                    <button onClick={()=>this.props.updateHandler(this.state.data)}>Update</button>
                </div>
            </div>
        );
    }
}

export default Popup;