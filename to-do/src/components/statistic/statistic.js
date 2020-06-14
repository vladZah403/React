import React from 'react';

import './statistic.css';

function Statistic(props){
    const {all, done, }= props;
    const progress = {width : ""};

    progress.width =(Number(done)*100)/Number(all) + "%"

    return (
    <div>
        <span className ="badge badge-success">DONE:{done}</span>
        <span className ="badge badge-dark">ALL:{all}</span>
        <div className="progress mt-1 mb-1">
            <div className="progress-bar progress-bar-striped bg-warning " 
                style={progress}
                role="progressbar" 
                aria-valuenow= {done}
                aria-valuemin="0" 
                aria-valuemax={all}/>
        </div>
    </div>
    );
}


export default Statistic