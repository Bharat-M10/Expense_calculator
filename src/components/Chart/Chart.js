import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValue=props.dataPoints.map(dataPoint=> dataPoint.value);
    const totalmaximum=Math.max(...dataPointValue);
    console.log(dataPointValue);

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar
            key={dataPoint.label}
            value={dataPoint.value} 
            maxvalue={totalmaximum} 
            label={dataPoint.label}>

        </ChartBar>)}
    </div>
};

export default Chart;