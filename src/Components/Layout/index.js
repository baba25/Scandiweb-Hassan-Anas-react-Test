import React, { Component } from 'react'
import {  Outlet } from 'react-router-dom'
import Navbar from '../../Navbar';
import './index.scss';
import Women from '../Categories/Women';


export default class Layout extends Component {
  render() {
    return (
    <div className='cont'>
        <Navbar />
        {/* <div className='cart_space_cont'>
          <div className='cart_space'>
            hfdfdhbgb<br/>
            jdshsdgdsh<br/>
            hfdfdhbgb<br/>
            uidfhvyfvfy<br/>
            jdshsdgdsh<br/>
            hfdfdhbgb<br/>
            <Link to="/cart"><button>View Bag</button></Link>
          </div>
        </div> */}
            <div>
                <Outlet />
                <Women />
            </div>
    </div>
    )
  }
}
