import React from 'react';
import './CovidCases1.css';

const CovidCases1Card = (props) => {
  
    return (
        <div className="card-style" style={{background:props.color}}>
            <h2 style={{fontSize:'15px', paddingBottom:'5px'}}>{props.value1}</h2>
            <h1 style={{fontSize:'28px'}}>{props.value2}</h1>
        </div>
    );
};

export default CovidCases1Card;
