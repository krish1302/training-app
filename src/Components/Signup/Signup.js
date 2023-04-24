import React, { Component, createRef } from 'react'
import './Signup.css'
import axios  from 'axios'

class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      this.emailRef = createRef()
      this.passwordRef = createRef()
      this.nameRef = createRef()
    }

    signup = () => {
        let data = {
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value,
            name: this.nameRef.current.value
        }

        axios.post('http://localhost:3500/user', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


    }
    render() {
        return (
            <div className='signup-div'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="name" ref={this.nameRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" ref={this.emailRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" className="form-control" id="password" placeholder="Aa!2...." ref={this.passwordRef}/>
                </div>
                <button type="button" className="btn btn-secondary" onClick={()=> this.signup()}>Signup</button>
            </div>
        )
    }
}

export default Signup