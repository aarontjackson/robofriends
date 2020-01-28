import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '1px solid black', height: '80vh' }}>
            {props.children}
        </div>
    )
};

export default Scroll;

//Scroll uses children to render props.children (create components that wrap around other components)