import React from 'react'
import logo from '../assets/images/yaarme.jpg';
function About() {
    return (
        <div>
            <div className="about">
            <h3 style={{color:'#000'}}>Overview</h3>
            <br/><br/>
           <p>
               YaarMe is a social media platform, which aims to help people by building and organizing their network.
            </p><br/>
            <p>
            What are you missing from nowadays social media:
            </p><br/>
            <p>
            There are several social media platforms which will let you create your network, but no one offers you to organize it. So after a long time it gets messy. You continue connecting with new people and unknowingly you start missing updates from close connections.
            </p>
            <p>
            So what we do, we will let you organize your connection, so could stay connected with your close connections too.
            </p>
            <br/><br/><br/>
            <p>
            Why do you need such kind of social media:
            </p>
            <p>
            Let's assume, you have 500 connections. Most probably it will be diversified. Among them, some will be employers/employees, few could be great personalities like Bill Gates, Jeff Bezos and Warren Buffett, few could be colleagues / college friends / classmates, few could be creators, few could be motivational speakers/ business coaches/mentors and you would have send few connection request just because they belong to your area / profession or background.
            </p><br/>
            <p>
            Now let's assume you are looking for a job as per now you will need to watch posts only from employers if you want some motivation you will like to watch posts only from great personalities (like Bill Gates, Warren Buffett) and motivational speakers/ business coaches/mentors. If you are looking for collaboration you will like to receive updates from colleagues, college friends, classmates, and connections having the same background.
            </p><br/>
            <p>
            From such social media you can categorize them as employers, motivational speakers, business coaches, mentors, colleagues, college friends, classmates and so on.
            </p><br/>
            <p>
            Now you can select categories to watch updates(posts, stories) only from members of those categories. If you are looking for a job just select the employer category and watch updates only from employers if you are looking for collaboration just select colleagues, college friends, classmates, and watch updates only from them.
            </p>
            <br/><br/><br/>
            <p>Sounds good na.</p>
            </div>
            <div style={{background:'#D6CEC2',height:'8px',width:'100%'}}></div>
            <div className="table_wrapper">
                <table>
                   <tbody>
                   <tr>
                        <td>Website</td>
                        <td>
                            <a href="https://yaarme.com/">https://yaarme.com/</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>9169538457</td>
                    </tr>
                    <tr>
                        <td>Industry</td>
                        <td>Information Technology & Services</td>
                    </tr>
                    <tr>
                        <td>Company Size</td>
                        <td>11-50 employees</td>
                    </tr>
                    <tr>
                        <td>Headquarters</td>
                        <td>Raipur,Chattisgarh</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>Privately Held</td>
                    </tr>
                    <tr>
                        <td>Founded</td>
                        <td>2020</td>
                    </tr>
                   </tbody>
                </table>
            </div>
            <div style={{background:'#D6CEC2',height:'8px',width:'100%'}}></div>
            <div>
                <h3 style={{padding:'8px'}}>People Also Viewed</h3>
                <div className="company_list">
                    <div className="company_logo">
                        <img src ={logo} alt="" style={{width:"60px",height:'60px'}}/>
                    </div>
                    <div className="company_name">
                        <p><b>GoTestSeries</b></p>
                        <p style={{fontSize:'14px'}}>E-Learning</p>
                        <p style={{fontSize:'11px',color:'gray'}}>40 followers</p>
                    </div>
                    <div className="company_follow"  style={{color:'dodgerblue'}}>
                        <i className="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;Follow
                    </div>
                </div>
                <div className="company_list">
                    <div className="company_logo">
                        <img src ={logo} alt="" style={{width:"60px",height:'60px'}}/>
                    </div>
                    <div className="company_name">
                        <p><b>gotestseries</b></p>
                        <p style={{fontSize:'14px'}}>Capital Markets</p>
                        <p style={{fontSize:'11px',color:'gray'}}>3 followers</p>
                    </div>
                    <div className="company_follow"  style={{color:'dodgerblue'}}>
                        <i className="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;Follow
                    </div>
                </div>
                <div className="company_list">
                    <div className="company_logo">
                        <img src ={logo} alt="" style={{width:"60px",height:'60px'}}/>
                    </div>
                    <div className="company_name">
                        <p><b>Yaar</b></p>
                        <p style={{fontSize:'11px',color:'gray'}}>25 followers</p>
                    </div>
                    <div className="company_follow" style={{color:'dodgerblue'}}>
                        <i className="fa fa-plus"></i>&nbsp;&nbsp;&nbsp;Follow
                    </div>
                </div>
                <p style={{color:'dodgerblue',textAlign:'center',padding:'10px',fontSize:'18px'}}><b>See all</b></p>
            </div>
            <div style={{background:'#D6CEC2',height:'8px',width:'100%'}}></div>
            <div style={{padding:'10px'}}>
                <h3>Location</h3>
                <p style={{background:'lightgray',width:'80px',textAlign:'center',margin:'10px 3px'}}>Primary</p>
                <p style={{fontSize:'14px'}}>Headquarters</p>
                <p>NIT Raipur, Raipur, Chattisgarh IN</p>
                <p style={{color:'dodgerblue',fontSize:'13px'}}><b>
                GET DIRECTION <i className="fa fa-external-link"></i></b></p>
            </div>
        </div>
    )
}

export default About
