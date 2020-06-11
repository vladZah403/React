import React from 'react';

import './statistic.css';

function Statistic(props){
    const {all, done}= props
    return <div>
        <span className ="badge badge-success">DONE:{done}</span>
        <span className ="badge badge-dark">ALL:{all}</span>
    </div>
}


export default Statistic