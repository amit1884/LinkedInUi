import React from 'react'
import logo from '../assets/images/yaarme.jpg';
function People() {
    return (
        <div>
            <div style={{padding:'10px',borderBottom:'1px solid lightgray',fontSize:'18px'}}>1 employee</div>
            <div className="employee">
                <div className="employee_pic">
                <img src ={logo} alt="user" style={{width:'40px',height:'40px'}}/>
                </div>
                <div className="employee_detail">
                    <p><b>Akash Ranjan Verma</b></p>
                    <p>Developing world's most luxurious social media platform | Web and App developer | Specialist in DBMS</p>
                </div>
                <div style={{textAlign:'center',padding:'10px',fontSize:'24px',color:'dodgerblue'}}>
                    <i className="fa fa-user-plus"></i>
                </div>
            </div>
            <div style={{background:'#D6CEC2',height:'200px',width:'100%'}}></div>
        </div>
    )
}

export default People
