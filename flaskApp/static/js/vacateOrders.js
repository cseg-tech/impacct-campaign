import React from 'react';
import ReactDOM from 'react-dom';
import { JsonToTable } from "react-json-to-table";

class vacateOrders extends React.Component {
  constructor() {
    super();
    this.state = {
      zipcodeBox: null,
      boroughBox: null,
      cdBox: null,
      precinctBox: null,
      ctBox: null,
      rtcCheck: false,
    };
    
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  toggle({ target }) {
    console.log(target.checked);
    this.setState({
      [target.name]: target.checked
    });
  }

  publish() {
    document.getElementById("zipcode").innerHTML = this.state.zipcodeBox;
    document.getElementById("borough").innerHTML = this.state.boroughBox;
    document.getElementById("cd").innerHTML = this.state.cdBox;
    document.getElementById("precinct").innerHTML = this.state.precinctBox;
    document.getElementById("ct").innerHTML = this.state.ctBox;
    document.getElementById("rtc").innerHTML = this.state.rtcCheck;
    console.log( this.state.zipcodeBox, this.state.boroughBox, this.state.cdBox, this.state.precinctBox, this.state.ctBox, this.state.rtcCheck );
  }

  fetchResults() {
    let that = this;
    let payload = {
      "zipcode": this.state.zipcodeBox,
      "borough": this.state.boroughBox,
      "cd": this.state.cdBox,
      "precinct": this.state.precinctBox,
      "ct": this.state.ctBox,
      "rtc": this.state.rtcCheck,
    };
    let uri = "./api/vacateOrdersSearch";
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

    const boxStyle = {
      width: "100%",
      border: "2px solid #ccc",
      marginLeft: "5px",
      marginRight: "5px",
      borderRadius: "10px",
    };

    const buttonStyle = {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "100px"
    };

    return (
      <div>

        <div id="fiveBox" style={{position: "absolute", left: "200px", top: "175px"}}>

        <div id="zipcodeBox" style={{display: "inline-block", marginRight: "10px", width: "190px"}}>
          <label for="zipcode">Zipcode</label><br />
          <input 
            id = "zipcode"
            type="text" 
            name="zipcodeBox" 
            placeholder="Enter zipcode here..." 
            value={ this.state.zipcodeBox }
            onChange={ this.handleChange } 
            style = {boxStyle}
          />
        </div>

        <div id="boroughBox" style={{display: "inline-block", marginRight: "10px", width: "190px"}}>
          <label for="borough">Borough</label><br />
          <input 
            id= "borough"
            type="text" 
            name="boroughBox" 
            placeholder="Enter borough here..."
            value={ this.state.boroughBox } 
            onChange={ this.handleChange } 
            style = {boxStyle}
          />
        </div>

        <div id="cdBox" style={{display: "inline-block", marginRight: "10px", width: "190px"}}>
          <label for="boxCD">CD</label><br />
          <input 
            id= "boxCD"
            type="text" 
            name="cdBox" 
            placeholder="Enter CD here..." 
            value={ this.state.cdBox }
            onChange={ this.handleChange } 
            style = {boxStyle}
          />
        </div>

        <div id="precinctBox" style={{display: "inline-block", marginRight: "10px", width: "190px"}}>
          <label for="boxPrecinct">Precinct</label><br />
          <input 
            id= "boxPrecinct"
            type="text" 
            name="precinctBox" 
            placeholder="Enter precinct here..." 
            value={ this.state.precinctBox }
            onChange={ this.handleChange } 
            style = {boxStyle}
          />
        </div>

        <div id="ctBox" style={{display: "inline-block", marginRight: "10px", width: "190px"}}>
          <label for="boxCT">CT_2010</label><br />
          <input 
            id="boxCT"
            type="text" 
            name="ctBox" 
            placeholder="Enter CT_2010 here..." 
            value={ this.state.ctBox }
            onChange={ this.handleChange } 
            style = {boxStyle}
          />
        </div>

        <div id="rtcCheck" style={{display: "inline-block", marginLeft: "5px", marginRight: "5px"}}>
          <label for="rightTo">Right to Counsel</label><br />
          <input 
            type="checkbox" 
            id="rightTo" 
            name="rtcCheck"
            value={ this.state.rtcCheck }
            onChange={ this.toggle }
          />         
        </div>
        
        </div>

   
        <div id="searchBox" style={buttonStyle}>   
        <button value="Send" onClick={ this.fetchResults }>Search</button>
        <p id = "zipcode"></p>
        <p id = "borough"></p>
        <p id = "test"></p>
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

        </div>
      
      );
  }
  
}

export default vacateOrders
