import styles from './Predict.module.scss'
import { BsSunriseFill, BsSunsetFill, BsCloudSun, BsFillCloudsFill, BsFillCloudRainHeavyFill, BsSnow3, BsFillCaretDownFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
const Predict = ({ data, dailyData }) => {
  const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [])


  const KtoC = (K) => {
    return (K - 273.15).toFixed(1)
  }
  return (
    <div className={styles.predict}>
      {data && dailyData ?
        <div>
          <div className="row border-bottom">
            <div className="col-md-6 ">
              <h4 className="fw-bold ">{day[new Date().getDay()]}</h4>
              <p className="fw-bold">{data.name},{data.sys.country} <BsFillCaretDownFill color="orange" size={20} /></p>
            </div>
            <div className="col-md-6">
              <h1 className="text-orange fw-bold">{KtoC(data.main.temp)}°C</h1>
            </div>
          </div>
          <div className="d-flex justify-content-between align-center mt-3">
            <BsSunriseFill size={40} color="orange" />
            <BsSunsetFill size={40} color="orange" />
          </div>

          <div className={`d-flex justify-content-between align-center ${styles.line}`}>
            <p>Sunrise
              <br />
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
            <p>Sunset
              <br />
              {new Date(data.sys.sunset * 1000).toLocaleTimeString()}

            </p>
          </div>
          <div className={((new Date().getTime()  + data.timezone * 1000) < new Date(data.sys.sunset * 1000).getTime()) ? `${styles.banner} ${styles.background_night} ` : `${styles.banner} ${styles.background_day}  `}>
            <div className="me-5 my-auto  ">
              {(data.weather[0].main === 'Clear') ? <BsCloudSun color='orange' size='40' /> :
                (data.weather[0].main === 'Clouds') ? <BsFillCloudsFill color='white' size='40' /> :
                  (data.weather[0].main === 'Snow') ? <BsSnow3 color='#C7DBEC' size='40' /> :
                    <BsFillCloudRainHeavyFill color='blue' size='40' />
              }
            </div>
            <div >
              <h4 >{new Date(new Date(date.getTime() + data.timezone * 1000)).toLocaleTimeString('en',
                { timeStyle: 'medium', hour12: false, timeZone: 'UTC' })} </h4>
              <p >{data.weather[0].description}</p>
            </div>
            <div className={styles.city_name} >
              <span className={styles.city_span}>{data.name}</span>
            </div>
          </div>
          <div>
            <h3 className="text-center mt-4"> Weather Prediction</h3>
            <div className={`${styles.weather_predict_card} mt-3`}>
              {(dailyData.list[8].weather[0].main === 'Clear') ? <BsCloudSun color='orange' size='40' /> :
                (dailyData.list[8].weather[0].main === 'Clouds') ? <BsFillCloudsFill color='orange' size='40' /> :
                  (dailyData.list[8].weather[0].main === 'Snow') ? <BsSnow3 color='#C7DBEC' size='40' /> :
                    <BsFillCloudRainHeavyFill color='#C7DBEC' size='40' />
              }
              <div>
                <p>{month[new Date(dailyData.list[8].dt_txt).getMonth()]} <span>{new Date(dailyData.list[8].dt_txt).getDate()}</span></p>
                <p className='fw-bold'>{dailyData.list[8].weather[0].main}</p>
              </div>
              <div>
                <h5 className='fw-bold text-orange'>{KtoC(dailyData.list[8].main.temp_max)}°C / {KtoC(dailyData.list[8].main.temp_min)}°C </h5>
              </div>
            </div>
            <div className={`${styles.weather_predict_card} mt-4`}>
              {(dailyData.list[15].weather[0].main === 'Clear') ? <BsCloudSun color='orange' size='40' /> :
                (dailyData.list[15].weather[0].main === 'Clouds') ? <BsFillCloudsFill color='orange' size='40' /> :
                  (dailyData.list[15].weather[0].main === 'Snow') ? <BsSnow3 color='#C7DBEC' size='40' /> :
                    <BsFillCloudRainHeavyFill color='#C7DBEC' size='40' />
              }
              <div>
                <p>{month[new Date(dailyData.list[15].dt_txt).getMonth()]} <span>{new Date(dailyData.list[15].dt_txt).getDate()}</span></p>
                <p className='fw-bold'>{dailyData.list[15].weather[0].main}</p>
              </div>
              <div>
                <h5 className='fw-bold text-orange'>{KtoC(dailyData.list[15].main.temp_max)}°C / {KtoC(dailyData.list[15].main.temp_min)}°C </h5>
              </div>
            </div>
          </div>
        </div> :
        <h1></h1>
      }
    </div>

  )
}

export default Predict



