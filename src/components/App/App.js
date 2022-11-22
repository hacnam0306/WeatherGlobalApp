import './App.scss';
import MainBoard from './../MainBoard/MainBoard';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Predict from './../Predict/Predict';
import styles from './Header.module.scss'
import { BiSearchAlt } from "react-icons/bi";
import Navigation from '../Navigation/Navigation';
import Map from './../Map/Map';
import Chart from './../Chart/Chart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forecast from '../Forecast/Forecast';
import Setting from '../Setting/Setting';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState()
  const [dailyData, setDailyData] = useState()
  const [searchCity, setSearchCity] = useState('q=ha noi')
 
  const [inputCity, setInputCity] = useState('')
  const [userName, setUserName] = useState('');
  const [finalUserName, setFinalUserName] = useState('')
  
  const clientName = localStorage.getItem('userName') || 'Guest!'
  console.log(clientName)
  const [show, setShow] = useState(localStorage.getItem('userName') ? false : true);
  const handleClose = () => setShow(false);
  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
          const {latitude,longitude} = position.coords;
          setSearchCity(`lat=${latitude}&lon=${longitude}`)
      })
    }else{
      setSearchCity('q=ha noi')
    }
  },[])
  useEffect(() => {
    getData();
    getDailyData();
  }, [searchCity])
  const getData = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?${searchCity}&appid=6272e7405d2a6bb613638a929e327b96`)
    setData(res.data)
  }
  const getDailyData = async () => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?${searchCity}&appid=5f45f78fa7a029bdad3b098b177fb286`)
    setDailyData(res.data)
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setSearchCity(`q=${inputCity}`);
    setFinalUserName(userName);
    localStorage.setItem("userName",userName);
  }
  return (
    <BrowserRouter>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Weather Global Map</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <form className="text-center " onSubmit={handleSubmitSearch}>
            <label className="mb-3" for="userName">How can I call you ?</label>
            <input maxlength="10" type="text" className="mb-4  d-block" value={userName} id="userName" onChange={e => {
              setUserName(e.target.value)
            }} />
            <label for="inputCity" className="mb-3 r ">Which city do you want to connect ?</label>
            <input maxlength="20" type="text" className="d-block " value={inputCity} id="inputCity" onChange={(e) =>
              setInputCity(e.target.value)
            } />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>
      <div className="App container-fluid mt-3 p-4">

        <div className="row">
          <div className="col-md-1">
            <Navigation searchCity={searchCity} />
          </div>
          <div className="col-md-8 ">
            <div className={styles.header}>
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-6 d-flex  align-items-center">
                  <img className={styles.header__avatar} src="https://cdn0.iconfinder.com/data/icons/people-99/64/blouse_Christmas_winter_guest_beard-256.png" alt="avatar" />
                  <h1 className="fs-2">Hello,
                    <br />
                    <b> {clientName} </b>
                  </h1>
                </div>

                <div className="col-md-6">
                  <div className={styles.header__search}>
                    <form onSubmit={handleSubmitSearch}>
                      <input className={styles.header__search__input} type="text" required value={inputCity} onChange={(e) =>
                        setInputCity(e.target.value)
                      } placeholder="Search your city" />
                      <button type="submit" className={styles.header__search__button}> <BiSearchAlt color="orange" /></button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
            <div >

              <Routes>
                <Route path="/" element={<MainBoard data={data} dailyData={dailyData} />} />
                <Route path="/map" element={<Map data={data} googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyB8DQxkWPWuEA7Cqb9KWy1YyHcpvTfP1vU&callback=initMap`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `80vh`, margin: `auto`, border: '2px solid #FDA446' }} />}
                  mapElement={<div style={{ height: `100%` }} />} />} />
                <Route path={`/chart`} element={<Chart dailyData={dailyData} />} />
                <Route path={`/calendar`} element={<Forecast dailyData={dailyData} />} />
                <Route path={`/setting`} element={<Setting />} />

              </Routes>
            </div>


          </div>
          <div className="col-md-3">
            <Predict data={data} dailyData={dailyData} />
          </div>
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
