import React, { Component } from "react";
import Comment from './comment.js'
import AllComments from './allComments.js'


class Discussion extends Component {
    render() {
        return (
            <div className="container">
                
                <br></br>
                <h4>Discussion</h4>
                <br></br>
                <Comment /> 
                <br></br>
                <AllComments />            
            </div>
        );

     }

 }

 export default Discussion;