import React from 'react'
import axios from 'axios';

const Test = () => {

 const postData = {
  "companyName": "Sanskar Train ",
  "ownerName": "Sanskar Aggarwal",
  "rollNo": "R2142201821",
  "ownerEmail": "500087232@stu.upes.ac.in",
  "accessCode": "JnNPGs"
 }
 const url = 'http://20.244.56.144/train/register'
 axios.post(url, postData)
  .then(function (response) {
   console.log('Response Data:', response.data);
  })
  .catch(function (error) {
   console.error('Error:', error);
  });
 return (
  <div>
   <h1>Registering </h1>
  </div>
 )
}

export default Test