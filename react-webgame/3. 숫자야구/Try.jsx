import React,{useRef,useState} from 'react';


const Try = ({tryInfo}) => {
    return(
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
}

export default Try;