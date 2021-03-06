import React, { Component } from 'react';
import Main from './component/Main';
import Nav from './component/Nav';
import PropTypes from 'prop-types';

//import { env } from './config';




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      REACT_APP_EMAILJS_USERID: 'user_17Y3yksLiJyYnOXq04djD',
      REACT_APP_EMAILJS_TEMPLATEID: 'template_IldEFUEB',
      REACT_APP_EMAILJS_RECEIVER: 'isuruliyanage1@gmail.com'
    }

  }

  render() {

    const { REACT_APP_EMAILJS_RECEIVER, REACT_APP_EMAILJS_TEMPLATEID, REACT_APP_EMAILJS_USERID } = this.state;

    return (
      <div>
        <Nav />
        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};


export default App;
