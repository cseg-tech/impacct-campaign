// index.js

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import simpleCampaign from './simpleCampaign'
import complexCampaign from './complexCampaign'

const routing = (
  <Router>
    <div>
      <div class="header">
        <h2>IMPACCT-BROOKLYN TEST PAGE </h2>
      </div>
      <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <ul>
        <li>
          <Link to="/simpleCampaign">Simple Campaign</Link>
        </li>
        <li>
          <Link to="/complexCampaign">Complex Campaign</Link>
        </li>
      </ul>
      </div>
      </div>
      <Route path="/simpleCampaign" component={simpleCampaign} />
      <Route path="/complexCampaign" component={complexCampaign} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('content'));
