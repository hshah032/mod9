import React, {Component} from 'react';

class Article extends Component {
    render() {
        return (
            <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
            <img></img>
              <div className="card-body">
                <h5 className="card-title"><a id="articles" href={this.props.url}>{this.props.title}</a></h5>
                {/* <small className="text-muted">$40</small>  */}
                <div className="d-flex justify-content-between align-items-center">
                </div>
              </div>
            </div>
            </div>
        )
    }
}

export default Article;

