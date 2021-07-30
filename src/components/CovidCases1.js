import React, { useEffect, useState } from 'react';
import CovidCases1Card from './CovidCases1Card';
import './CovidCases1.css';

const CovidCases1 = ({covidData}) => {

    return (
        <div className="main-div">
            <h2>Covid Cases In INDIA</h2>
            <span className="live">🔴 LIVE</span>
            <div className="cards">
                <CovidCases1Card value1="Country" value2="INDIA" color="blue" />
                <CovidCases1Card value1="Total Case" value2={covidData.confirmed} color="Grey" />
                <CovidCases1Card value1="Recoverd" value2={covidData.recovered} color="green" />
                <CovidCases1Card value1="Deaths" value2={covidData.deaths} color="red" />
                <CovidCases1Card value1="Active Case" value2={covidData.active} color="Grey" />
                <CovidCases1Card value1="Last Update" value2={covidData.lastupdatedtime} color="black" />
            </div>
        </div>
    );
};

export default CovidCases1;
