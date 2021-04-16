import React,{ useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import './SideDrawer.css'

export const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      color: 'white',
      maxWidth: 800,
      height: 200,
      fontSize: "20px",
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

  
  
export default function Section(props) {
    function openNav(e) {
      e.preventDefault();
      document.getElementById("mySidenav").style.width = "350px";
    }
    
    function closeNav() {
      
      document.getElementById("mySidenav").style.width = "0";
    }


  return (

    <div>
        <div className="container">
            <div>
                { props.sect && props.sect.map((ele,index)=>{
                const a = <div className="hoverText">
                <div><b>Name:</b><span>{ele.name}</span></div>
                <div><b>Age:</b>{ele.age}</div>
                <div><b>Gender:</b>{ele.gender}</div>              
                <span><b>Sports:</b>{ele.sports.map(el=><span>{el}, </span>)}</span>
                    </div>

                return(<>
                <HtmlTooltip title={a}>
                <span className="col-md-2">
                  
                    <button className="nameTag" name="btn" value={ele.name} onClick={openNav}>
                    {ele.name}
                    </button>
               
                   </span></HtmlTooltip>
                   <div id="mySidenav" className="sidenav">
      <span className="closebtn" onClick={closeNav}>&times;</span>

    

        <span>
        <div>
                <div><b>Name<div className="input">{ele.name}</div></b></div>
                <div><b>Age<div className="age">{ele.age}</div></b></div>
                <div><b>Gender<div className="inp">{ele.gender}</div></b></div>
                <div><b>Sports{ele.sports.map(ele=>(<div className="input">{ele}</div> ))}</b></div>          
                    </div>
        </span>

</div>


                   </>)})}
            </div>
    </div>
       </div>
       
   
  );
}
