import React ,{useState}from 'react'
import Post from './Post'
import img from '../assets/images/load.svg'
function Home() {
    const [Active,setActive]=useState('All')
    
    return (
        <div>
            <div>
            <p style={{fontSize:'18px',padding:'10px'}}>Posts</p>
            <div className="local_tab">
                <div onClick={()=>setActive('All')} style={Active==='All'?{color:'#fff',background:'green'}:null}>All</div>
                <div onClick={()=>setActive('Images')} style={Active==='Images'?{color:'#fff',background:'green'}:null}>Images</div>
                <div onClick={()=>setActive('Videos')} style={Active==='Videos'?{color:'#fff',background:'green'}:null}>Videos</div>
                <div onClick={()=>setActive('Documents')} style={Active==='Documents'?{color:'#fff',background:'green'}:null}>Documents</div>
            </div>
        </div>
        <div style={{background:'#D6CEC2',height:'5px',width:'100%'}}></div>
        {
        Active==='All'?<Post/>
        :
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'300px',flexWrap:'wrap'}}>
            <img src ={img} alt="waiting" style={{width:'200px',height:'200px'}}/>
            <h2 style={{margin:'0 20%'}}>No Post Yet</h2>
            <p>Check back later for posts !</p>
        </div>
        }
        </div>
    )
}

export default Home
