import React, { useEffect } from 'react'
import axios from 'axios'
const Auth = () => {
 useEffect(() => {
  const authData = {
   "companyName": "Sanskar Train ",
   "ClientID": "f987aa4e-4d5a-497f-8998-aa1a48c624bb",
   "ownerName": "Sanskar Aggarwal",
   "ownerEmail": "500087232@stu.upes.ac.in",
   "rollNo": "R2142201821",
   "clientSecret": "mZnOYgSLPSsuMMmv"
  }

  const url = 'http://20.244.56.144/train/auth/';

  axios
   .post(url, authData)
   .then(function (response) {
    console.log('Response Data:', response.data);
    // You can set state or perform other actions with the response data here.
   })
   .catch(function (error) {
    console.error('Error:', error);
    // Handle the error appropriately, e.g., show an error message to the user.
   });
 }, []);
 



 return (
  <>
  <h1>Obtaining Authorization token</h1>

  </>
 )
}

export default Auth