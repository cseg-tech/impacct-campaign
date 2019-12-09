import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import coalitionAgainstTenantHarrassment from './coalitionAgainstTenantHarrassment'
import speculationWatchlist from './speculationWatchlist'
import vacateOrders from './vacateOrders'
import rightToCounsel from './rightToCounsel'
import NYAttorneyGeneralWorstLandlord from './NYAttorneyGeneralWorstLandlord'
import stabilizingNYC from './stabilizingNYC'
const routing = (
  <Router>
    <div class="parent">
      <div class="header">
        <h2>IMPACCT-BROOKLYN TEST PAGE </h2>
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
                <Link to="/rightToCounsel">Right to Counsel</Link>
              </li>
              <li>
                <Link to="/NYAttorneyGeneralWorstLandlord">NY Attorney General Worst Landlord</Link>
              </li>
              <li>
                <Link to="/stabilizingNYC">Stabilizing NYC</Link>
              </li>
            </ul>
          </div>
      </div>

      <Route path="/coalitionAgainstTenantHarrassment" component={coalitionAgainstTenantHarrassment} />
      <Route path="/speculationWatchlist" component={speculationWatchlist} />
      <Route path="/vacateOrders" component={vacateOrders} />
      <Route path="/rightToCounsel" component={rightToCounsel} />
      <Route path="/NYAttorneyGeneralWorstLandlord" component={NYAttorneyGeneralWorstLandlord} />
      <Route path="/stabilizingNYC" component={stabilizingNYC} />
      
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('content'))