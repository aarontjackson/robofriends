import React, { Component } from 'react';

//Pure Component means the component will only rerendering will its props change
class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
    //WILL UPDATE ONLY IF THE COMPONENT CHANGES DOESNT RERENDER THE ENTIRE BUTTON
    if (this.state.count !== nextState.count) {
        return true
    }
        return false
    }

    //GRABS THE CURRENT STATE BASED ON THE STATE, ITS NOT SYNCHORONOUS
    updateCount = () => {
        this.setState(state => {
            return {count: state.count + 1}
        })
    }

    render() {
       return (
           <button color={this.props.color} onClick={this.updateCount}> 
           Count: {this.state.count}
           </button>
       )
    }
}

export default CounterButton;