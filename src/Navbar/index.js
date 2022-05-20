import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss';


export default class Navbar extends Component {
    // function Dropdown() {
    //     const [drop, setDrop] = useState(false)
    //   const handleClick = () => setNav(!nav)

  render() {
    return (
        <div className='container'>
    <ul className='menus'>
        <NavLink exact activeClassName="active" to="/">
            <p className='menus'>Women</p>
        </NavLink>
        <NavLink className='men_link' activeClassName="active" to="/men">
            <p className='menus'>Men</p>
        </NavLink>
        <NavLink className='kids_link' activeClassName="active" to="/kids">
            <p className='menus'>Kids</p>
        </NavLink>
    </ul>
    <div className='logo'><svg height={"40px"} width={"40px"} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
</svg></div>
    <div className='buttons'>
        <select>
            <option >
                DOL
            </option>
            <option>EUR</option>
            <option>NGN</option>
            <option>NGN</option>
            <option>NGN</option>
        </select>
        {/* <h1>$<svg height={"20px"} width={"20px"}className='arrow' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
</svg></h1> */}
<svg height={"35px"} width={"35px"}className='cart' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg> 
    </div>
</div>
    )
  }
}
