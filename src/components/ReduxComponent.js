import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActionTemplate} from '../actions';

class ReduxComponent extends Component{
    handleOnClick = ()=>{
        this.props.handleOnClick('your-item-id');
    }
    render() {

        return(
            <div>
                <h1>My Component</h1>
                <p>click<a onClick={this.handleOnClick}>Dispatch Action</a></p>
                <p>Current id: {this.props.itemId}</p>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
  return({
      itemId: state.itemId
  });
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    console.log('debug', ownProps);
    return({
      handleOnClick: itemState => dispatch(setActionTemplate(ownProps.props))
  });
};

export const ReduxComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)
(ReduxComponent);
