import React, { Component, createRef } from 'react'
import './Login.css'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email_hint: "",
      password_hint: "",
      welcome: false
    }
    this.emailRef = createRef()
    this.passwordRef = createRef()
  }


  emailChange = () => {
    let email_val = this.emailRef.current.value
    if (email_val.length === 0) {
      this.setState({
        email_hint: "Please enter email"
      })
    }
    else if (email_val.length <= 5) {
      this.setState({
        email_hint: "Please enter email minimum 5 character"
      })
    }
    else {
      this.setState({
        email_hint: ""
      })
    }
  }

  passwordChange = () => {
    let password_val = this.passwordRef.current.value
    if (password_val.length === 0) {
      this.setState({
        password_hint: "Please enter password"
      })
    }
    else if (password_val.length <= 5) {
      this.setState({
        password_hint: "Please enter password minimum 5 character"
      })
    }
    else {
      this.setState({
        password_hint: ""
      })
    }
  }

  login = () => {
    
    let email_val = this.emailRef.current.value
    var local = this

    axios.get('http://localhost:3500/user/'+ email_val)
    .then(function (response) {
      console.log(response);
      if(response.data.message === "email exists"){
        local.setState({
          welcome : true
        })
      }
    })
    .catch(function (error) {
      console.log(error);
      local.setState({
        welcome : false
      })
    });
  }


  render() {
    return (
      <>
      {this.state.welcome && <Navigate to='/welcome/user1'/>}
      <div className="login-div">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" ref={this.emailRef} onBlur={() => this.emailChange()} onFocus={() => this.setState({ email_hint: "" })} />
        </div>
        <small>{this.state.email_hint}</small>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">password</label>
          <input type="password" className="form-control" id="password" placeholder="Aa!2...." ref={this.passwordRef} onBlur={() => this.passwordChange()} onFocus={() => this.setState({ password_hint: "" })} />
        </div>
        <small>{this.state.password_hint}</small>
        <button type="button" className="btn btn-secondary" onClick={()=> this.login()} >Login</button>
      </div>
      </>
      
    )
  }
}

export default Login