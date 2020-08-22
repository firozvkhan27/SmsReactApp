import React, { Component } from 'react'

import DetailsInformation from '../DetailsInormations';
import axios from 'axios';
import SearchbyDates from '../SearchbyDates';

export class Root extends Component {
    state={
        details:[],
        startDate:"",
        endDate:"",
        showPopup :false,
        updateFields:{},
        loader:false,
        nodata:true,
        dateValdation: false
}

    componentDidMount(){
        this.setState({loader:true})
    axios.get("http://localhost:8080/api/v1/sms/all").then(res=>{
        this.setState({details:res.data,
            loader:false,
        nodata:false});
        
        
    })
    }
    
updateHandler=(data)=>{
    console.log("update"+data.city);
    const updateDataReq ={...data, 
    selectEndDateRange: this.state.endDate,
    selectStartDateRange: this.state.startDate}
    console.log(updateDataReq);
    axios.put("http://localhost:8080/api/v1/sms",updateDataReq).then(res=>{
    this.setState({details:res.data});
   })
   this.setState({  
    showPopup: !this.state.showPopup})
}

togglePopup =(id)=> { 
      let data =  this.state.details.filter(it=>it.id==id);     
      this.setState({  
         showPopup: !this.state.showPopup ,
         updateFields: data[0]
    });  
    console.log("currnet state"+this.state.showPopup)  ;
    console.log("currnet state"+this.state.showPopup)  ;
    
} 

sortHandler = (tag)=>{
    axios.get("http://localhost:8080/api/v1/sms/sort/"+tag).then(res=>{
        this.setState({details:res.data});  
    })
}

deleteHandler=(id)=>{
    axios.delete("http://localhost:8080/api/v1/sms/"+id).then(res=>{
        this.setState({details:res.data});
    });
}

selectedDateRange =(startDate,endDate)=>{
if(null ==  startDate && null == endDate){
    this.setState({dateValdation:true})
    return;
} 
this.setState({dateValdation:false})

axios.get("http://localhost:8080/api/v1/sms/selectRange?start_date="+this.GetFormattedDate(startDate)+
        "&end_date="+this.GetFormattedDate(endDate)).then(res=>{
            if(!res.data.lenght>0){
                this.setState({nodata:true})
            }else{
         this.setState({details:res.data,
            startDate: this.GetFormattedDate(startDate),
            endDate: this.GetFormattedDate(endDate),
            nodata:false
        });
    }
       
    })
   

}

GetFormattedDate(date) {
    var month = date .getMonth() + 1;
    var day = date .getDate();
    var year = date .getFullYear();
    return month + "/" + day + "/" + year;
}

    render() {
        let data = <DetailsInformation detailslist={this.state.details} 
        showPopup={this.state.showPopup}
        togglePopup={this.togglePopup}
        updateData ={this.state.updateFields}
        sortBy={this.sortHandler}
        updateHandler={this.updateHandler}
        deleteHandler={this.deleteHandler}
        loader ={this.state.loader}
       
        />
        if(this.state.nodata){
            data =<div> <h4>No Data Found </h4></div>
        }

        return (
            <div>
                  <SearchbyDates sortByDates={this.selectedDateRange}  dateValdation ={this.state.dateValdation}/>
                  {data}
            </div>
        )
    }
}

export default Root
