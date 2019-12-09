import React from 'react';
import ReactDOM from 'react-dom';

class speculationWatchlist extends React.Component {
  constructor() {
    super();
    this.state = {
      zipcodeBox: null,
      boroughBox: null
    };
    
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  render() {
    return <div style={{position: "absolute", right:"200px"}}>
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
      
      <button value="Send" onClick={ this.publish }>Search</button>
      <p id = "zipcode"></p>
      <p id = "borough"></p>
    </div>
  }
  
}
export default speculationWatchlist

//ReactDOM.render(<App />, document.getElementById('container'));


//render() {
//    return <h1>Complex Campaign</h1>
//  }