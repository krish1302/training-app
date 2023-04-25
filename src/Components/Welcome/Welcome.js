import React, { Component } from 'react'

class Welcome extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
       
    }
  }
  render() {

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.getAll('userName')
    console.log(urlParams)
    return (
      <div>Welcome {id}</div>
    )
  }
}

export default Welcome