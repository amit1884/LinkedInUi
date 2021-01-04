import React from 'react'
import job from '../assets/images/job.svg'
function Jobs() {
    return (
        <div>
             <div>
                 <p style={{fontSize:'20px',padding:'15px',textAlign:'center'}}>
                <i className="fa fa-bell"></i>
                &nbsp; &nbsp; &nbsp;Create a job alert for YaarMe
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i style={{fontSize:'23px',float:'right',color:'dodgerblue'}} className="fa fa-plus-circle"></i>
                </p>
                <div style={{background:'#D6CEC2',height:'8px',width:'100%'}}></div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',height:'300px'}}>
                    <img src ={job} alt ="job" style={{width:"200px",height:'200px'}}/>
                    <h2>There are no jobs available</h2>
                    <p style={{textAlign:'center'}}>Check back later or create a job alert to be notified when relevant jobs are posted.</p>
                </div>
             </div>
             <div style={{background:'#D6CEC2',height:'20px',width:'100%'}}></div>
        </div>
    )
}

export default Jobs
