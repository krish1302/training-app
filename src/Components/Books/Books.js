import React, { Component, createRef } from 'react'
import axios from 'axios'

class Books extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: [],
            editName: "",
            editId: "",
            editAuthor: "",
            editPage: ""
        }

        this.nameRef = createRef()
        this.authorRef = createRef()
        this.pageRef = createRef()

        this.editIdRef = createRef()
        this.editNameRef = createRef()
        this.editAuthorRef = createRef()
        this.editPageRef = createRef()
    }

    componentDidMount() {
        axios.get('https://crudcrud.com/api/36d9fcdc70f540eda491c4fd7e0b644b/books')
            .then(res => {
                console.log(res.data)
                this.setState({ books: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    refresh_books = () => {
        axios.get('https://crudcrud.com/api/36d9fcdc70f540eda491c4fd7e0b644b/books')
            .then(res => {
                console.log(res.data)
                this.setState({ books: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    addbook = () => {
        let data = {
            name: this.nameRef.current.value,
            author: this.authorRef.current.value,
            page: this.pageRef.current.value
        }

        var local = this

        axios.post('https://crudcrud.com/api/36d9fcdc70f540eda491c4fd7e0b644b/books', data)
            .then(res => {
                local.refresh_books()
            })
            .catch(err => {
                console.log(err)
            })
    }

    editBook = () => {
        let data = {
            name: this.nameRef.current.value,
            author: this.authorRef.current.value,
            page: this.pageRef.current.value
        }

        var local = this

        axios.post('https://crudcrud.com/api/36d9fcdc70f540eda491c4fd7e0b644b/books', data)
            .then(res => {
                local.refresh_books()
            })
            .catch(err => {
                console.log(err)
            }) 
    }

    updateBook = (book)=> {
        // this.editIdRef.current.value = book.id
        // this.editNameRef.current.value = book.name
        // this.editAuthorRef.current.value = book.author
        // this.editPageRef.current.value = book.page
    }


    render() {
        return (
            <>

                <div className="login-div">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Book Name</label>
                        <input type="text" className="form-control" id="name" placeholder="enter book name" ref={this.nameRef} />
                    </div>
                    {/* <small>{this.state.email_hint}</small> */}
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author Name</label>
                        <input type="text" className="form-control" id="author" placeholder="enter author name" ref={this.authorRef} />
                    </div>
                    {/* <small>{this.state.password_hint}</small> */}
                    <div className="mb-3">
                        <label htmlFor="pages" className="form-label">pages</label>
                        <input type="number" className="form-control" id="pages" placeholder="pages" ref={this.pageRef} />
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={() => this.addbook()} >Add book</button>
                </div>

                <h1>Books table</h1>
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Book Id</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">No of pages</th>
                            <th scope='col'>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(book => {
                                return (
                                    <tr key={book._id}>
                                        <th scope="row">{book._id}</th>
                                        <td>{book.name}</td>
                                        <td>{book.author}</td>
                                        <td>{book.page}</td>
                                        <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#editBook" onClick={()=> this.updateBook(book)}>edit</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>




                {/* model */}
                <div className="modal fade" id="editBook" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="login-div">
                                    <div className="mb-3">
                                        <label htmlFor="edit_name" className="form-label">Book Name</label>
                                        <input type="text" className="form-control" id="edit_name" placeholder="enter book name" ref={this.editNameRef} />
                                    </div>
                                    {/* <small>{this.state.email_hint}</small> */}
                                    <div className="mb-3">
                                        <label htmlFor="edit_author" className="form-label">Author Name</label>
                                        <input type="text" className="form-control" id="edit_author" placeholder="enter author name" ref={this.editAuthorRef} />
                                    </div>
                                    {/* <small>{this.state.password_hint}</small> */}
                                    <div className="mb-3">
                                        <label htmlFor="edit_pages" className="form-label">pages</label>
                                        <input type="number" className="form-control" id="edit_pages" placeholder="pages" ref={this.editPageRef} />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={()=> this.editBook()}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Books