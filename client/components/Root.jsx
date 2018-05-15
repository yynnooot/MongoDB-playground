import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Form from './Form.jsx';
import Wiki from './Wiki.jsx';

export default class Root extends Component {
  render(){
    return(
      <div>
        <div>
          <h1>HELLO FROM ROOT</h1>
        </div>
        <Form /> 
        <Wiki /> 
      </div>
    )
  }
}
