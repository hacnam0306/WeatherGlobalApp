import React from 'react'
import styles from './Navigation.module.scss'
import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { BsClipboardData, BsBarChart, BsGeoAlt, BsCalendarDate } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <Link to="/" > <img src={logo} className=" mb-3 bg-back" /></Link>
            </div>
            <ul className={styles.menu}>
                <NavLink exact to="/" activeClassName="active" className="text-grey" ><BsClipboardData size={40} /></NavLink>
                <NavLink to={`/chart`} activeClassName="active" className="text-grey"><BsBarChart size={40} />  </NavLink>
                <NavLink to="/map" activeClassName="active" className="text-grey"><BsGeoAlt size={40} />  </NavLink>
                <NavLink to="/calendar" activeClassName="active" className="text-grey"><BsCalendarDate size={40} /></NavLink>
                <NavLink to="/setting" activeClassName="active" className="text-grey"> <AiOutlineSetting size={40} /></NavLink>
            </ul>
        </div>
    )
}

export default Navigation
