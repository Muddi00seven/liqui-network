import React from 'react'
import {Line} from 'react-chartjs-2';

const state = {
  labels: [' ', ' ', ' ',
           ' ', ' '],
  datasets: [
    {
      label: 'Price',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 100 , 140]
    }
  ]
}



const PriceChart = () => {
    return (
        <div>
                <Line
          data={state}
        />
        </div>
    )
}

export default PriceChart
