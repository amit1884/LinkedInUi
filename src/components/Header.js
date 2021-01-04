import React from 'react'
import SearchBar from './SearchBar'
import SubHeader from './SubHeader'
import logo from '../assets/images/yaarme.jpg';
function Header() {
    return (
        <div>
            <SearchBar/>
            <div className="banner_container">
                <div className="banner"></div>
                <div className="profile_pic">
                    <img src ={logo} alt='profile'/>
                </div>
                <div className="icons" style={{float:'right',padding:'9px 10px',color:'dodgerblue'}}>
                    <i className="fa fa-pencil"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-share"></i>
                </div>
            </div>
            <SubHeader/>
        </div>
    )
}

export default Header
