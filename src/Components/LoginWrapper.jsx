import React from 'react'
import Login from '../pages/Login';
const LoginWrapper = () => {
    const pageTitle = "Login Page";
    const apiurl = "http://localhost:8000/api/login";
  return (
    <Login pageTitle={pageTitle} apiurl={apiurl}></Login>
  )
}

export default LoginWrapper