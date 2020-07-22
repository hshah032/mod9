import React, { Component } from "react";
import axios from 'axios'
import delayAdapterEnhancer from 'axios-delay'


const api = axios.create ({
    baseURL: 'http://localhost:3000/comments',
    adapter: delayAdapterEnhancer(axios.defaults.adapter)
});

class AllComments extends Component {
    
    state = {
        comments : [ ]
    }

    componentDidMount() {
        api.get('/', {delay:3000})
        .then(res => {
            console.log(res)
            this.setState({
                comments: res.data
            })
        })
    }

    render() {
        const {comments} = this.state; 
        const commentsList = comments.length ? (
            comments.map(comment =>{
                return  (
                   <div className="col" key={comment.id}>
                       <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h6 className="card-title">
                            <strong> {comment.name} says:</strong>
                            </h6>
                            <p className="card-text">
                            {comment.body}
                            </p> 
                            {/* <small className="text-muted">$40</small>  */}
                        <div className="d-flex justify-content-between align-items-center">
                        </div>
                        </div>
                        </div>
                    </div>
                )
            })
        ) : (
            <p> Loading comments... </p>
        )
        return (
            <div> 
            <h5>All Comments</h5>
            {commentsList}  
            </div>
            
        )
    }
}

export default AllComments;
