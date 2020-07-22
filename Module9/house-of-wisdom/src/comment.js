import React, { Component } from "react";
import axios from 'axios'
import {OverlayTrigger, Tooltip, Form, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import community from './community-guidelines.js'


class Comment extends Component {
   
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email:'',
            body: '',
            errors: []
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        // e.preventDefault()
        axios.post('http://localhost:3000/comments', this.state)
        .then( response => 
            console.log(response))
        
    }

    myCustomFunction = e => {
            var errors = [];
            const expression = /\S+@\S+/;
            var validEmail = expression.test(String(this.state.email).toLowerCase());

            if (!validEmail) {
            errors.push("email");
            }

    }
   
    render() {

        const {name, email, body} = this.state;
        return (
            <div>
         
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Write a comment
                    </button>

               
                    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Write a comment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form id="myForm" onSubmit={this.submitHandler}>
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control" name="name" placeholder="Name (Required)" value={name} onChange={this.changeHandler} required />                          
                            </div>
                            <div className="col">
                            <OverlayTrigger
                                key={'top'}
                                placement={'top'}
                                overlay={
                                    <Tooltip id={`tooltip-${'top'}`}>
                                    Please enter a valid email address as 
                                    this is the address we will reach you at.
                                    </Tooltip>
                                }
                                >
                    
                                <input type="text" className="form-control" name="email" placeholder="Email (Required)" value={email} onChange={this.changeHandler} required/>
                                </OverlayTrigger>   
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <textarea className="form-control" name="body" placeholder="Share your thoughts (Required)" value={body} onChange={this.changeHandler} rows="3" required></textarea>
                        </div>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
  <circle cx="8" cy="4.5" r="1"/>
</svg>
                        <small> To make sure that your comment is posted, please enter all the required information and
                        follow our <a href="/community-guidelines"> community guidelines. </a>
                        </small>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Post</button>
                        </div>

                    </form> 
                    <Router >
                    <Route path='/community-guidelines' component={community} />
                    </Router> 
                        </div>
                        </div>
                    </div>
                    </div>
            </div>     
        );
    }
}

export default Comment;
