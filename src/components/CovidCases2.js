import React, { useState, useEffect } from 'react';
import './CovidCases2.css';

const CovidCases2 = () => {
    const [data, setData] = useState([])

    const getCovidDataApi = async () => {
        try{
            const response = await fetch('https://api.covid19india.org/data.json')
            const data = await response.json()
            const actualData = data.statewise.slice(1)
    
            // console.log(actualData)
            setData(actualData)
        }catch(error){
            alert(error)
        }
    }

    useEffect(() => {
        getCovidDataApi()
    }, [])

    return (
        <div className="main-div">
            <h2>Covid Cases In INDIA State Wise</h2>
            <div className="table-div">
            <table className="main-table" cellSpacing='0'>
                <tbody>
                <tr id="ddd">
                    <th>S.No</th>
                    <th>State</th>
                    <th>Total</th>
                    <th>Recover</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th>Date and Time</th>
                </tr>

                {
                    data.map((value, index) =>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.state}</td>
                            <td>{value.confirmed}</td>
                            <td>{value.recovered}</td>
                            <td>{value.deaths}</td>
                            <td>{value.active}</td>
                            <td>{value.lastupdatedtime}</td>
                        </tr>
                    )
                }
            </tbody>
            </table>
            </div>
        </div>
    );
};

export default CovidCases2;
