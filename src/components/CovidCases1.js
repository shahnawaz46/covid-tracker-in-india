import React, { useEffect, useState } from 'react';
import CovidCases1Card from './CovidCases1Card';
import './CovidCases1.css';

const CovidCases1 = () => {
    const [oneData, setOneData] = useState({});

    const getCovidDataApi = async() =>{
        try{
            const response = await fetch('https://api.covid19india.org/data.json')
            const data = await response.json()
            setOneData(data.statewise[0])
            console.log(data.statewise[0])

        }catch(error){
            alert("Error: Please come after few time")
        }
    }

    useEffect(()=>{
        getCovidDataApi()
    }, [])


    return (
        <div className="main-div">
            <h2>Covid Cases In INDIA</h2>
            <div className="cards">
                <CovidCases1Card value1="Country" value2="INDIA" color="blue" />
                <CovidCases1Card value1="Total Case" value2={oneData.confirmed} color="Grey" />
                <CovidCases1Card value1="Recoverd" value2={oneData.recovered} color="green" />
                <CovidCases1Card value1="Deaths" value2={oneData.deaths} color="red" />
                <CovidCases1Card value1="Active Case" value2={oneData.active} color="Grey" />
                <CovidCases1Card value1="Last Update" value2={oneData.lastupdatedtime} color="black" />
            </div>
        </div>
    );
};

export default CovidCases1;
