import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/Counter.actions';

class Counter extends React.Component {
    render() {
        const { increment, decrement, count } = this.props;
        return (
            <div className="box">
                <div className="box__buttons">
                    <button className="box__button" onClick={increment}>+</button>
                    <button className="box__button" onClick={decrement}>-</button>
                </div>
                <h3 className="box__value">{count}</h3>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        count: state
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
