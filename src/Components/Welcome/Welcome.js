import React, { Component } from 'react'
import { withRouter } from '../Services/withRouter'
import UserTable from '../UsersTable/UserTable'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  render() {
    const userName = this.props.router.params.userName
    return (
      <>
        <div>Welcome {userName}</div>
        <UserTable/>
      </>
    )
  }
}

export default withRouter(Welcome)