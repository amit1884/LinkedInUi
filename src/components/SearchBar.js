import React from 'react'

function SearchBar() {
    return (
        <div className="search_bar_container">
           <div><p style={{fontSize:'30px',padding:'2px 5px'}}><b>&#8592;</b></p></div> 
           <div className="search_bar">
               <form className="search_form">
                   <input  type="text" placeholder="Search"/>
               </form>
           </div>
           <div className="dots_wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
           </div>
        </div>
    )
}

export default SearchBar
