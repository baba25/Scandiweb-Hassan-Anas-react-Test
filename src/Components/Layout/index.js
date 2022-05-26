import React, { Component } from 'react'
import {  Outlet } from 'react-router-dom'
import Navbar from '../../Navbar';
import './index.scss';
import All from '../Categories/All';


export default class Layout extends Component {
  render() {
    return (
    <div className='cont'>
        <Navbar />
      
      <div>
    <Outlet />
    </div>
    </div>
    )
  }
}
