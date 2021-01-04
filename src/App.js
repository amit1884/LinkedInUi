import React, { useState } from 'react'
import './assets/style.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Tab from './components/Tab'
import People from './components/People'
function App() {
    const [ActiveTab,setActiveTab]=useState('Home')
    function TabSwitch(active){
        setActiveTab(active)
        console.log(active)
    }
    return (
        <div>
            <Header/>
            <Tab active={ActiveTab} TabSwicth={TabSwitch}/>
            <div className="borderbottom" style=
            {ActiveTab==='Home'?{marginLeft:'0'}
            :ActiveTab==='About'?{marginLeft:'25%'}
            :ActiveTab==='Jobs'?{marginLeft:'50%'}
            :ActiveTab==='People'?{marginLeft:'75%'}:null}></div>
            <div style={{background:'#D6CEC2',height:'8px',width:'100%'}}></div>
            {ActiveTab==='Home'?<Home/>:null}
            {ActiveTab==='About'?<About/>:null}
            {ActiveTab==='Jobs'?<Jobs/>:null}
            {ActiveTab==='People'?<People/>:null}
        </div>
    )
}

export default App

