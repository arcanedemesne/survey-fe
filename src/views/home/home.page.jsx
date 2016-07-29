import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Deloitte Symphony Survey</h1>
        <p>This is the initial set up for the front end of Deloitte Symphony Survey.</p>
        <ul>
          <li><Link to="/surveyedit" activeClassName="active">Survey Page</Link></li>
        </ul>
      </div>
    );
  }
}
export default HomePage;