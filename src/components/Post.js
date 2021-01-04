import React from 'react'
import logo from '../assets/images/yaarme.jpg'
import post from '../assets/images/post.jpg'
function Post() {
    return (
        <div className="post_container">
            <div className="post_header">
                <div className="profile">
                <img src ={logo} alt="profile"/>
                </div>
                <div className="user_details">
                    <p><b>YaarMe</b></p>
                    <p>145 followers</p>
                    <p>6mo .</p>
                </div>
                <div>
                    <i className="fa fa-chevron-down"></i>
                </div>
            </div>
            <div className="post_details">
                <p>
                    We have just started working to develop a social media platform which aim to connect you with your friends and family in most convinient way...
                </p>
                <p>Your comments and suggestions would be greatlty appreciated.</p>
                <br/><br/>
                <p style={{color:'dodgerblue'}}><a href="https://yaarme.com/" style={{color:'dodgerblue'}}>https://yaarme.com/</a>&nbsp;&nbsp;<span>#yaarme #yaarmelife</span></p>
                <p style={{color:'dodgerblue'}}>#socialmedia #launchingsoon</p>
                <img src ={post} alt="post" style={{width:"100%",height:'220px'}}/>
                <div style={{background:'#f5f8fd'}}>
                <p><b>YaarMe</b></p>
                <p>yaarme.com</p>
                </div>
            </div>
            <div style={{padding:'9px 8px',borderBottom:'1px solid #000'}}>
                <i className="fa fa-thumbs-up" style={{color:'dodgerblue'}}></i>&nbsp;&nbsp;&nbsp;
                <i className="fa fa-heart"  style={{color:'red'}}></i>&nbsp;&nbsp;&nbsp;
                <span>45</span>
                <span style={{fontSize:'12px',color:'grey',float:'right'}}>3 comments</span>
            </div>
            <div className="bottom_bar">
                <div className=""><i className="fa fa-thumbs-up"></i><p>Like</p></div>
                <div className="">&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-comment"></i><p>Comment</p></div>
                <div className="">&nbsp;&nbsp;<i className="fa fa-share"></i><p>Share</p></div>
                <div className=""><i className="fa fa-send"></i><p>Send</p></div>
            </div>
        </div>
    )
}

export default Post
