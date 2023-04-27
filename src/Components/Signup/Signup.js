import React, { Component, createRef } from 'react'
import './Signup.css'
import axios  from 'axios'

class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email_hint: "",
        name_hint: "",
        password_hint: "",
        disabled: true
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

        console.log(data)

        // axios.post('http://localhost:3500/user', data)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

    }

    nameChange = () =>{
        let name_val = this.nameRef.current.value
        if(name_val.length === 0){
            this.setState({
                name_hint : "Please enter name"
            })
        }
        else if(name_val.length <= 5){
            this.setState({
                name_hint : "Please enter name minimum 5 character"
            })
        }
        else{
            this.setState({
                name_hint : ""
            })
        }
    }

    emailChange = ()=> {
        let email_val = this.emailRef.current.value
        if(email_val.length === 0){
            this.setState({
                email_hint : "Please enter email"
            })
        }
        else if(email_val.length <= 5){
            this.setState({
                email_hint : "Please enter email minimum 5 character"
            })
        }
        else{
            this.setState({
                email_hint : ""
            })
        }
    }

    passwordChange = () => {
        let password_val = this.passwordRef.current.value
        if(password_val.length === 0){
            this.setState({
                password_hint : "Please enter password"
            })
        }
        else if(password_val.length <= 5){
            this.setState({
                password_hint : "Please enter password minimum 5 character"
            })
        }
        else{
            this.setState({
                password_hint : ""
            })
        }

        // this.buttonDisable();
    }

    // buttonDisable = () => 
    //     disable = (this.state.email_hint === "" && this.state.name_hint === "" && this.state.password_hint === "");
    //     this.setState({
    //         disabled: disable
    //     })
    // }


    render() {
        return (
            <div className='signup-div'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="name" ref={this.nameRef} onBlur={()=> this.nameChange()} onFocus={()=> this.setState({ name_hint: ""})} />
                </div>
                <small>{this.state.name_hint}</small>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" ref={this.emailRef} onBlur={()=> this.emailChange()} onFocus={()=> this.setState({ email_hint: ""})} />
                </div>
                <small>{this.state.email_hint}</small>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" className="form-control" id="password" placeholder="Aa!2...." ref={this.passwordRef} onBlur={()=> this.passwordChange()} onFocus={()=> this.setState({ password_hint: ""})} />
                </div>
                <small>{this.state.password_hint}</small>
                <button type="button" className="btn btn-secondary" onClick={()=> this.signup()} >Signup</button>
            </div>
        )
    }
}

export default Signup