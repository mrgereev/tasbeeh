import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

export const Counter = ({ counter, inc, res }) => {
    return (
      <div className="app">
        <h1 className="header">Digital Tasbeeh Counter Online</h1>
        <div className="device">
          <div className="title">Tasbeeh</div>
          <div className="display">
            <span className="digitalNumbers">{counter}</span>
          </div>
          <div className="buttonNames">
            <span>Count</span>
            <span>Reset</span>
          </div>
          <button 
            className="buttonReset"
            onClick={res}
          >
          </button>
          <button
            className="buttonCount"
            onClick={inc}
          >
          </button>
        </div>
      </div>

    )
  };

  const mapStateToProps = (state) => {
      return {
          counter: state
      };
  };

  export default connect(mapStateToProps, actions)(Counter);