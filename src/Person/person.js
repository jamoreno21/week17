import React, {Component} from 'react';


const person = (basicInfo) =>{
        return (<div>
        Name: {basicInfo.name},<br></br>
        Number: {basicInfo.number},<br></br>
        DOB: {basicInfo.dob}<br></br><br></br>
      </div>)
}

export default person