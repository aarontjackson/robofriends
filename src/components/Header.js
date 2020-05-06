import React, { Component } from 'react';
// import CounterButton from './counterbutton';

class Header extends Component {
    //DECIDES WHETHER OR NOT TO UPDATE THE STATE UPON RE-RENDERING
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    render() {
        console.log('Header')
       return (
       <div>
           
       <h1 className='f1'>RoboFriends</h1>
        {/* <CounterButton style={{color: "red"}} />    */}
       </div>
       );
    }
}

export default Header;