import React from 'react'

function Tab({active,TabSwicth}) {
    return (
        <div className="tabs_container">
            <div className="tab" onClick={()=>TabSwicth('Home')}  style={active==='Home'?{color:'green'}:null}>Home</div>
            <div className="tab" onClick={()=>TabSwicth('About')} style={active==='About'?{color:'green'}:null}>About</div>
            <div className="tab" onClick={()=>TabSwicth('Jobs')} style={active==='Jobs'?{color:'green'}:null}>Jobs</div>
            <div className="tab" onClick={()=>TabSwicth('People')} style={active==='People'?{color:'green'}:null}>People</div>
        </div>
    )
}

export default Tab
