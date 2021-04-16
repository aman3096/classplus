import React from 'react';
import _ from "lodash";
import Section from './Section.js';

export default function Class(props) {
    let corona = props.data
    corona = _.groupBy(corona,'section')
    let sections = Object.keys(corona)
    const a = Object.keys(corona)
    let i=0

  return (
    <span >
                {sections.map(section=>(<li style={{marginLeft:"3%"}}>Section {section}
                
                    <Section sect={corona.[section]}/>

                </li>))}
               

    </span>
  );
}