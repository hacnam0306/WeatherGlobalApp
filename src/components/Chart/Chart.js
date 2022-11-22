import { Line } from "react-chartjs-2";
import { useState } from "react";
import { BiWind } from "react-icons/bi";
import { FaTemperatureLow } from "react-icons/fa";
import { GiBigWave } from "react-icons/gi";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );



const Chart = ({dailyData}) => {
    const [type,setType] = useState('temperature')
const KtoC = (K) =>{
        return (K - 273.15).toFixed(1) 
 }
    Date.prototype.NextDay = function (e=0) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e));
}
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: '5 days temperature line chart',
      },
    },
    scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Hour'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: type === 'temperature' ? 'Temperature +°C' : type === 'wind' ? 'Wind Speed + Km/h' : 'High Above Sea Level'
          },
       
        }
      }
    
}  
    return (
        <div>
            <ul className="my-5 d-flex align-center justify-content-center gap-5 ">
            <li className={type === 'wind' ? 'activeSm': ' p-1'}>  <BiWind  size={40} color="grey" onClick={() => setType('wind')} /></li> 
               <li className={type === 'temperature' ? 'activeSm': 'p-1'}><FaTemperatureLow size={40}  color="grey" onClick={() => setType('temperature')} /></li> 
               <li className={type === 'sea level' ? 'activeSm': 'p-1'}>   <GiBigWave size={40} color="grey" onClick={() => setType('sea level')} /></li> 
            </ul>
            {dailyData ? 
            
                 type==="temperature" ? 
                  <Line options={options} data={{
                    labels: dailyData.list.filter((item) => 
                    (new Date().NextDay(3).getDate()) === new Date(`${item.dt_txt}`).getDate()
                    ).map((item) => new Date(item.dt_txt).getHours()),
                    datasets: [
                        {
               label: `${(new Date().NextDay().getDate())} / ${(new Date().getMonth() + 1) } / ${(new Date().NextDay().getFullYear())}`,
               data: dailyData.list.filter((item) => 
               (new Date().NextDay().getDate()) === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => KtoC(item.main.temp)),
               borderColor: "rgba(75,192,192,1)"
             },
             {
               label: `${(new Date().NextDay(1).getDate())} / ${(new Date().NextDay(1).getMonth() + 1) } / ${(new Date().NextDay(1).getFullYear())}`,
               data: dailyData.list.filter((item) => 
               (new Date().NextDay(1).getDate()) === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => KtoC(item.main.temp)),
               fill: false,
               borderColor: "#FF6347"
             },
             {
               label: `${new Date().NextDay(2).getDate()} / ${(new Date().NextDay(2).getMonth() + 1)} / ${(new Date().NextDay(2).getFullYear())}`,
               data: dailyData.list.filter((item) => 
               new Date().NextDay(2).getDate() === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => KtoC(item.main.temp)),
               fill: false,
               borderColor: "#C71585"
             },
             {
               label: `${new Date().NextDay(3).getDate()} / ${(new Date().NextDay(3).getMonth() + 1) } / ${(new Date().NextDay(3).getFullYear())}`,
               data: dailyData.list.filter((item) => 
               new Date().NextDay(3).getDate() === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => KtoC(item.main.temp)),
               fill: false,
               borderColor: "#98FB98"
             },
             {
               label: `${new Date().NextDay(4).getDate()} / ${(new Date().NextDay(4).getMonth() + 1)} / ${(new Date().NextDay(4).getFullYear())}`,
               data: dailyData.list.filter((item) => 
               new Date().NextDay(4).getDate() === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => KtoC(item.main.temp)),
               fill: false,
               borderColor: "#DB7093"
             }
           ]
         }} />: (type==="wind") ?  <Line options={options} data={{
            labels: dailyData.list.filter((item) => 
            (new Date().NextDay(3).getDate()) === new Date(`${item.dt_txt}`).getDate()
            ).map((item) => new Date(item.dt_txt).getHours()),
            datasets: [
                {
       label: `${(new Date().NextDay().getDate())} / ${(new Date().getMonth() + 1) } / ${(new Date().NextDay().getFullYear())}`,
       data: dailyData.list.filter((item) => 
       (new Date().NextDay().getDate()) === new Date(`${item.dt_txt}`).getDate()
       ).map((item) => item.wind.speed),
       borderColor: "rgba(75,192,192,1)"
     },
     {
       label: `${(new Date().NextDay(1).getDate())} / ${(new Date().NextDay(1).getMonth() + 1) } / ${(new Date().NextDay(1).getFullYear())}`,
       data: dailyData.list.filter((item) => 
       (new Date().NextDay(1).getDate()) === new Date(`${item.dt_txt}`).getDate()
       ).map((item) => item.wind.speed),
       fill: false,
       borderColor: "#FF6347"
     },
     {
       label: `${new Date().NextDay(2).getDate()} / ${(new Date().NextDay(2).getMonth() + 1)} / ${(new Date().NextDay(2).getFullYear())}`,
       data: dailyData.list.filter((item) => 
       new Date().NextDay(2).getDate() === new Date(`${item.dt_txt}`).getDate()
       ).map((item) => item.wind.speed),
       fill: false,
       borderColor: "#C71585"
     },
     {
       label: `${new Date().NextDay(3).getDate()} / ${(new Date().NextDay(3).getMonth() + 1) } / ${(new Date().NextDay(3).getFullYear())}`,
       data: dailyData.list.filter((item) => 
       new Date().NextDay(3).getDate() === new Date(`${item.dt_txt}`).getDate()
       ).map((item) => item.wind.speed),
       fill: false,
       borderColor: "#98FB98"
     },
     {
       label: `${new Date().NextDay(4).getDate()} / ${(new Date().NextDay(4).getMonth() + 1)} / ${(new Date().NextDay(4).getFullYear())}`,
       data: dailyData.list.filter((item) => 
       new Date().NextDay(4).getDate() === new Date(`${item.dt_txt}`).getDate()
       ).map((item) => item.wind.speed),
       fill: false,
       borderColor: "#DB7093"
     }
   ]
                }} /> :
                 <Line options={options} data={{
                    labels: dailyData.list.filter((item) => 
                    (new Date().NextDay(3).getDate()) === new Date(`${item.dt_txt}`).getDate()
                    ).map((item) => new Date(item.dt_txt).getHours()),
                    datasets: [
                        {
               label: `${(new Date().NextDay().getDate())} / ${(new Date().getMonth() + 1) } / ${(new Date().NextDay().getFullYear())}`,
               data: dailyData.list.filter((item) => 
               (new Date().NextDay().getDate()) === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => item.main.sea_level),
               borderColor: "rgba(75,192,192,1)"
             },
             {
               label: `${(new Date().NextDay(1).getDate())} / ${(new Date().NextDay(1).getMonth() + 1) } / ${(new Date().NextDay(1).getFullYear())}`,
               data: dailyData.list.filter((item) => 
               (new Date().NextDay(1).getDate()) === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => item.main.sea_level),
               fill: false,
               borderColor: "#FF6347"
             },
             {
               label: `${new Date().NextDay(2).getDate()} / ${(new Date().NextDay(2).getMonth() + 1)} / ${(new Date().NextDay(2).getFullYear())}`,
               data: dailyData.list.filter((item) => 
               new Date().NextDay(2).getDate() === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => item.main.sea_level),
               fill: false,
               borderColor: "#C71585"
             },
             {
               label: `${new Date().NextDay(3).getDate()} / ${(new Date().NextDay(3).getMonth() + 1) } / ${(new Date().NextDay(3).getFullYear())}`,
               data: dailyData.list.filter((item) => 
               new Date().NextDay(3).getDate() === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => item.main.sea_level),
               fill: false,
               borderColor: "#98FB98"
             },
             {
               label: `${new Date().NextDay(4).getDate()} / ${(new Date().NextDay(4).getMonth() + 1)} / ${(new Date().NextDay(4).getFullYear())}`,
               data: dailyData.list.filter((item) => 
               new Date().NextDay(4).getDate() === new Date(`${item.dt_txt}`).getDate()
               ).map((item) => item.main.sea_level),
               fill: false,
               borderColor: "#DB7093"
             }
           ]
         }} />

            
            
            : ''}
        </div>
    )
}

export default Chart
