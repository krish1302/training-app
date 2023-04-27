import React, { Component } from 'react'
import axios from 'axios'
import './UserTable.css'

export class UserTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        var local = this
        // axios.get('http://localhost:3500/users')
        //     .then(response => {
        //         console.log(response.data)
        //         local.setState({
        //             users: response.data
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        let user_data = [
            {
                id: 1,
                name: "Bala",
                email: "bala@gmail.com",
                password: "bala123"
            },
            {
                id: 2,
                name: "Bala",
                email: "bala@gmail.com",
                password: "bala123"
            },
            {
                id: 3,
                name: "Bala",
                email: "bala@gmail.com",
                password: "bala123"
            }
        ]

        this.setState({
            users: user_data
        })
        
        
    }



    render() {
        return (
            <>
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user => {
                                return (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default UserTable