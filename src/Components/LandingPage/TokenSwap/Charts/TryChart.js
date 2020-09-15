import React from 'react'
import LineChart from 'react-linechart';
import '../../../../../node_modules/react-linechart/dist/styles.css';


const TryChart = () => {
    const data = [
        {									
            color: "steelblue", 
            points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: 15}] 
        }
    ];
    return (
        <div>
             <div style={{marginTop: '-40px', marginLeft: '-40px'}}>
                {/* <div className="App"> */}
                    <LineChart 
                        width={280}
                        height={180}
                        data={data}
                        hideYLabel = {true}
                        hideXLabel = {true}
                        hideXAxis= {true}
                        hideYAxis= {true}
                    />
                {/* </div>				 */}
            </div>
        </div>
    )
}

export default TryChart
