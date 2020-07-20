import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './app'
import Map_Sad from './map'
import coalitionAgainstTenantHarrassment from './coalitionAgainstTenantHarrassment'
import speculationWatchlist from './speculationWatchlist'
import vacateOrders from './vacateOrders'
import worstEvictors from './worstEvictors'
import stabilizingNYC from './stabilizingNYC'
const routing = (
  <Router>
    <div class="parent">
      <div class="header">
        <h2>Organizing Tools</h2>
      </div>
      <div class = "tagline">
        <p>To begin searching for specific campaigns, please choose one of the dropdown options. Then enter the necessary location delimiters and hit 'search'.</p>
        <li>
          <Map_Sad/>
        </li>
      </div>
      <hr/>
      <div class="dropdown">
        <button class="dropbtn">Options</button>
          <div class="dropdown-content">
            <ul>
             <li>
                <Link to="/App">Home</Link>
              </li>
              <li>
                <Link to="/coalitionAgainstTenantHarrassment">Coalition Against Tenant Harrassment</Link>
              </li>
              <li>
                <Link to="/speculationWatchlist">Speculation Watchlist</Link>
              </li>
              <li>
                <Link to="/vacateOrders">Vacate Orders</Link>
              </li>
              <li>
                <Link to="/worstEvictors">Worst Evictors</Link>
              </li>
              <li>
                <Link to="/stabilizingNYC">Stabilizing NYC</Link>
              </li>
            </ul>
          </div>
      </div> <div><Map_Sad/></div>

      <Route path="/map" component={Map_Sad} />
      <Route path="/App" component={App} />
      <Route path="/coalitionAgainstTenantHarrassment" component={coalitionAgainstTenantHarrassment} />
      <Route path="/speculationWatchlist" component={speculationWatchlist} />
      <Route path="/vacateOrders" component={vacateOrders} />
      <Route path="/worstEvictors" component={worstEvictors} />
      <Route path="/stabilizingNYC" component={stabilizingNYC} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('content'))