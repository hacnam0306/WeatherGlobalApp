import styles from './Forecast.module.scss'
import cloud from '../../assets/cloud3d.png'
import rain from '../../assets/rain.png'
import sun from '../../assets/sun.png'
import snow from '../../assets/snow.png'
import h from '../../assets/h.png'
import n from '../../assets/n.png'
import a from '../../assets/a.png'
import m from '../../assets/m.png'

import { MdOutlineWaterDrop,MdOutlineVisibility } from "react-icons/md";
import {BiWind} from 'react-icons/bi'
const Forecast = ({dailyData}) => {
    const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const KtoC = (K) =>{
        return (K - 273.15).toFixed(1) 
 }
    Date.prototype.NextDay = function (e=0) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e));
}
    return (
        <div className={styles.forecast}>
    {
            dailyData ? 
            <div className="row">
                <div className={`col-md-4    text-center p-5 ${styles.bg_1}`}>
                    <p>{`${(new Date().NextDay().getDate())}  ${month[(new Date().getMonth())] }, ${day[(new Date().getDay())] }  `}</p>
                    <h2 style={{color:'#F3BD48',letterSpacing:'3px',fontWeight:'bold'}}>{`${dailyData.city.name}`}</h2>
                    <img src={ dailyData.list[0].weather[0].main == 'Rain'? rain : dailyData.list[0].weather[0].main == 'Clouds' ? cloud : dailyData.list[0].weather[0].main == 'Clear' ? sun : snow } className={styles.icon} />
                    <h1>{`${KtoC(dailyData.list[0].main.temp)}`}<span className="fs-1"> ° C</span></h1>
                    <h3>{dailyData.list[0].weather[0].main}</h3>
                    <div className="border-top ">
                        <div className="mt-5 d-flex gap-5 align-center justify-content-center">
                        <div>
                        <BiWind color="white" size={30}/>
                        <p>{dailyData.list[0].wind.speed}km/h</p>
                        <p>Wind</p>
                        </div>
                        <div>
                        <MdOutlineWaterDrop color="white" size={30} />
                        <p>{dailyData.list[0].main.humidity} %</p>
                        <p>Humidity</p>
                        </div>
                        <div>
                        <MdOutlineVisibility color="white" size={30} />
                        <p>{dailyData.list[0].visibility/1000} km/h</p>
                        <p>Visibility</p>
                        </div>
                        </div>

                    </div>
                </div>
                <div className={`col-md-2 text-center p-5 ${styles.bg_2}`}>
                    <h2>{`${KtoC(  dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(1).getDate()))[0].main.temp)}`}°C</h2>
                <p>{`${(new Date().NextDay(1).getDate())}  ${month[(new Date().NextDay(1).getMonth())] }   `}</p>
                <p>{`${day[(new Date().NextDay(1).getDay())]}`} </p>
                    <img className={`mt-5 ${styles.icon}`} src={  dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(1).getDate()))[0].weather[0].main == 'Rain'? rain :   dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(1).getDate()))[0].weather[0].main  === 'Clouds' ? cloud :   dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(1).getDate()))[0].weather[0].main === 'Clear' ? sun : snow }  />
                    <p className="mt-5">{`${dailyData.city.name}`}</p>
                    <p className="fs-3 ">{dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(1).getDate()))[0].weather[0].main}</p>
                    <div className={`${styles.border}`}>
                        <img className={styles.icon2} src={h} />
                    </div>
                </div>
                <div className={`col-md-2 text-center p-5 ${styles.bg_2}`}>
                    <h2>{`${KtoC(  dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(2).getDate()))[0].main.temp)}`}°C</h2>
                <p>{`${(new Date().NextDay(2).getDate())}  ${month[(new Date().NextDay(2).getMonth())]  }  `}</p>
                <p>{`${day[(new Date().NextDay(2).getDay())]}`} </p>

                    <img className={`mt-5 ${styles.icon}`} src={  dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(2).getDate()))[0].weather[0].main == 'Rain'? rain :   dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(2).getDate()))[0].weather[0].main  === 'Clouds' ? cloud :   dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(2).getDate()))[0].weather[0].main === 'Clear' ? sun : snow }  />
                    <p className="mt-5">{`${dailyData.city.name}`}</p>
                    <p className="fs-3 ">{dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(2).getDate()))[0].weather[0].main}</p>
                    <div className={`${styles.border}`}>
                        <img className={styles.icon2} src={n} />
                    </div>
                </div>
                <div className={`col-md-2 text-center p-5 ${styles.bg_2}`}>
                    <h2>{`${KtoC(  dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(3).getDate()))[0].main.temp)}`}°C</h2>
                <p>{`${(new Date().NextDay(3).getDate())}  ${month[(new Date().NextDay(3).getMonth())] }  `}</p>
                <p>{`${day[(new Date().NextDay(3).getDay())]}`} </p>

                    <img className={`mt-5 ${styles.icon}`} src={  dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(3).getDate()))[0].weather[0].main == 'Rain'? rain :   dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(3).getDate()))[0].weather[0].main  === 'Clouds' ? cloud :   dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(3).getDate()))[0].weather[0].main === 'Clear' ? sun : snow }  />
                    <p className="mt-5">{`${dailyData.city.name}`}</p>
                    <p className="fs-3 ">{dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(3).getDate()))[0].weather[0].main}</p>
                    <div className={`${styles.border}`}>
                        <img className={styles.icon2} src={a} />
                    </div>
                </div>
                <div className={`col-md-2 text-center p-5 ${styles.bg_2}`}>
                    <h2>{`${KtoC(  dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(4).getDate()))[0].main.temp)}`}°C</h2>
                <p>{`${(new Date().NextDay(4).getDate())}  ${month[(new Date().NextDay(4).getMonth())] }  `}</p>
                <p>{`${day[(new Date().NextDay(4).getDay())]}`} </p>

                    <img className={`mt-5 ${styles.icon}`} src={  dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(4).getDate()))[0].weather[0].main == 'Rain'? rain :   dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(4).getDate()))[0].weather[0].main  === 'Clouds' ? cloud :   dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(4).getDate()))[0].weather[0].main === 'Clear' ? sun : snow }  />
                    <p className="mt-5">{`${dailyData.city.name}`}</p>
                    <p className="fs-3 ">{dailyData.list.filter((item) => new Date(item.dt_txt).getDate() === (new Date().NextDay(4).getDate()))[0].weather[0].main}</p>
                    <div className={`${styles.border}`}>
                        <img className={styles.icon2} src={m} />
                    </div>
                </div>
            
            </div> : ''
        }    
        </div>
  
    )
}

export default Forecast
