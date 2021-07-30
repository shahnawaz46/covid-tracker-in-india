import React, { useEffect, useState } from "react";
import CovidCases1 from "./components/CovidCases1";
import CovidCases2 from "./components/CovidCases2";



function App() {
  const [singleData, setSingleData] = useState({});
  const [stateData, setStateData] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch('https://api.covid19india.org/data.json')
      const data = await response.json()

      setSingleData(data.statewise[0])

      const state = data.statewise.slice(1)
      setStateData(state)

    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getApiData()
  }, [])


  return (
    <>
      <CovidCases1 covidData={singleData} />
      <CovidCases2 covidData={stateData} />

    </>
  );
}

export default App;
