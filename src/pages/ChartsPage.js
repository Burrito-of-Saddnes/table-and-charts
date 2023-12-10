/*eslint no-extend-native: 0*/
/*eslint jsx-a11y/anchor-is-valid: 0*/
import React, { useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart"; 
import CreateList from '../components/CreateList';

Chart.register(CategoryScale);

Array.prototype.groupBy = function(transform) {
    const map = new Map()
    for (const element of this) {
      const key = transform(element)
      const values = map.get(key) || []
      values.push(element)
      map.set(key, values)
    }
    return map
  }
  
  Map.prototype.keysArray = function() {
    return Array.from(this.keys())
  }
  
  
  Map.prototype.entriesArray = function() {
    return Array.from(this.entries())
  }
  
  Map.prototype.sortByKeys = function(compare) {
    const result = new Map()
    const sortedEntries = this.entriesArray().sort((a, b) => compare(a[0], b[0]))
    for(let entry of sortedEntries) {
      result.set(entry[0], entry[1])
    }
    return result
  }
  
  function compareStrings(a, b) {
    return a.localeCompare(b)
  }

function ChartsPage(props) {
  const [chart, setChart] = useState("BarChart")
  const users = props.dataSource
  const groupedUsers = users.groupBy(e => e.gender).sortByKeys(compareStrings)
  const [chartData] = useState({
    labels: groupedUsers.keysArray(), 
    datasets: [
      {
        label: "Gender age",
        data: groupedUsers.entriesArray().map(e => e[1].length),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  const openedChart =  chart === "BarChart" ? 
    <BarChart
      chartData={chartData}
    /> 
    : 
    <PieChart
      chartData={chartData}
    />
  return (
    <>
      <div className='App__pageButtonsContainer' style={{margin: "0"}}>
        <div className='App__pageButtonsContainer_button' id="button" onClick={() => {setChart("BarChart")}}>
          <div id="App__pageButtonsContainer_buttonCircle"></div>
          <a>Bar Chart</a>
        </div>
        <div className='App__pageButtonsContainer_button' id="button" onClick={() => {setChart("PieChart")}}>
        <div id="App__pageButtonsContainer_buttonCircle"></div>
          <a>Pie Chart</a>
        </div>
      </div>
      <div className='App__chartsPage'>
        <div className='App__chartsContainer'>
          {openedChart}
        </div>
        <div className='App__inputsContainer'>
          <CreateList
            singleData={props.singleData}
            setSingleData={props.setSingleData}
            handleChange={props.handleChange}
            handleChangeFamily={props.handleChangeFamily}
            setFamily={props.setFamily}
            family={props.family}
            createList={props.createList}
            isValid={props.isValid}
          />
        </div>
      </div>
    </>
  );
}

export default ChartsPage;