import React from 'react';
import ReactDOM from 'react-dom';
import { JsonToTable } from "react-json-to-table";

class NYAttorneyGeneralWorstLandlord extends React.Component {
  constructor() {
    super();
    this.state = {
      zipcodeBox: null,
      boroughBox: null
    };
   
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    document.getElementById("zipcode").innerHTML = this.state.zipcodeBox;
    document.getElementById("borough").innerHTML = this.state.boroughBox;
    console.log( this.state.zipcodeBox, this.state.boroughBox );
  }

  fetchResults() {
    let that = this;
    let payload = {
      "zipcode": this.state.zipcodeBox,
      "borough": this.state.boroughBox
    };
    let uri = "./api/nyattorneySearch";
    fetch(uri, {
      method: "post",
      body: JSON.stringify(payload)
    }).then(function(response){
      return response.json();
    }).then(function(data){
      console.log(data);
      console.log("Fetched: "+JSON.stringify(data));
      that.setState({serverData:data.response});
    }); 
  }

  render() {
    let {serverData} = this.state;
    return (
      <div style={{position: "absolute", right:"200px"}}>
        <input 
          type="text" 
          name="zipcodeBox" 
          placeholder="Enter zipcode here..." 
          value={ this.state.zipcodeBox }
          onChange={ this.handleChange } 
        />
        
        <input 
          type="text" 
          name="boroughBox" 
          placeholder="Enter borough here..."
          value={ this.state.boroughBox } 
          onChange={ this.handleChange } 
        />
        
        <button value="Send" onClick={ this.fetchResults }>Search</button>
        <p id = "zipcode"></p>
        <p id = "borough"></p>
        {
          serverData ? 
          serverData.map((data) => (
            <p><JsonToTable json={data} /></p>
          ))
          :
          (
            <p>Enter term</p>
          )
        }
      </div>
      );
  }
  
}

export default NYAttorneyGeneralWorstLandlord
