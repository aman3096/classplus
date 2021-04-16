import './HomePage.css';
import Section from './Section';
import Class from "./Class"
import React, {useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";


const HomePage = ()=>{
    const [data, setData] = useState([]);
    useEffect( async () => {
        const result = await axios(
          'https://student-management-api-1u3cd4j7s.now.sh/students',
        );
     
        setData(result.data);
      },[]);
      let sot = _.orderBy(data, ['class', 'section'], 
      ['asc', 'asc']);
    sot = _.mapValues(_.groupBy(sot, 'class'),clist=>clist.map(dat=>dat));
    const groupedClass = _.groupBy(sot, 'class');
    const a = Object.values(sot)
    return(
    <div>
        <ul>
            {a.map((ele,index)=>(<li>
                Class {index+1}
                <Class index={index} data={ele}></Class>
            </li>))}

        </ul>
        
    </div>
    )
}
export default HomePage;
