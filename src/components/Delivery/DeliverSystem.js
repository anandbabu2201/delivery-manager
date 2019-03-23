import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";


export default class DeliverSystem extends Component {
  state = {
    deliveryBoys: '',
    reload:'',
    arr:[],
    getboys:[],
    error:""
  };


  onChange = e => this.setState({ [e.target.name] :e.target.value });
  addboys=()=>{
    let {deliveryBoys}=this.state;
    let arr=[];
    deliveryBoys=parseInt(deliveryBoys,10);
    if(deliveryBoys>0){
      for(var i = 1; i <= deliveryBoys; i++){
        arr.push(i);
    }
    }
    this.setState({arr:arr,error:"",getboys:[]});
  }

  getBoy=()=>{
     let {arr,getboys}=this.state;
     let onDuty=[];
     if(arr && arr.length){
     onDuty.push(arr.shift())
     this.setState({getboys:[...getboys,...onDuty],error:""});
     }
     else 
      this.setState({error:'No more deliveryboys available'})
  }
  reloadboys=()=>{
    let {arr,getboys,reload}=this.state;
    reload=parseInt(reload)
    let index= getboys.indexOf(reload);
    if(getboys && getboys.length &&  reload && index>-1){
      let removed=getboys.splice(index,1);
      let newArray=[...arr,...removed].sort((a,b)=>a-b);
       this.setState({arr:newArray,error:''});
    }
    else 
      this.setState({error:'No delivery boy Utilised with given input'})
    
 }

  render() {
   
    return (
      <div >
        <div className="card-header">Delivery System</div>
        <div className="card-body">
            <TextInputGroup
              label="Number of Delivery boys"
              name="deliveryBoys"
              placeholder="Enter count"
              value={this.state.deliveryBoys}
              onChange={this.onChange}
            />
            <button className="btn-primary" type="button" onClick={this.addboys}>Add deliveryBoys</button>
        </div>
        <div className="mainAllocation">
        <div>
        <div className="allocatedClass">
        {
          this.state.arr.map(e=>
            <div key={e} className="numberCircle">{e}</div>)
        }
        </div>
        <div>Allocated</div>
        </div>
        <div>
        <div className="allocatedClass">{
          this.state.getboys.map(e=>
            <div key={e} className="numberCircle">{e}</div>)
        }
        </div>
        <label>Utilised</label>
        </div>
        <div className="">
        <button className="btn-primary" type="button" onClick={this.reloadboys}>Reload deliveryboy</button>
            <TextInputGroup
              name="reload"
              placeholder="Enter reload number"
              value={this.state.reload}
              onChange={this.onChange}
            />
        </div>
        </div>
        <button className="btn-primary" type="button" onClick={this.getBoy}>get DeliveryBoy</button>
       {this.state.error?<div className="alert alert-danger">
      <strong>{this.state.error}</strong></div>:''}
      </div>
    );
  }
}