import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Article from './articles.js'
import Article02 from './article02.js'
import FindArticles from './find-articles.js'
import AboutUs from './about-us'


class Home extends Component {
    render() {
        const titles = 
      [
       {name:"Review: Kant's Critique of Happiness", url:"/article-01"},
       {name:"Al-Ghazali's The Alchemy of Happiness", url:"/article-02"},
       {name:"Hamza Yusuf's Purification of the Heart", url:"/article-03"},
       {name:"Reviewing Capitalism through the Lens of a Pandemic", url:"/article-04"},
       {name:"Keynes vs Locke: An Analysis", url:"/article-05"},
       {name:"Morality in the 2010s, and Lessons from the Greeks", url:"/article-06"}
      ]
    const titlesRender = titles.map((title, index) => 
     <Article title={title.name} url={title.url} key={index}/>
    );
        return (
            <div>
            <section className="jumbotron text-center">
            <div className="container">
                <h3>
                I think. Therefore I am.
                </h3>
                <p className="lead text-muted">Descartes</p>
                <p>
                <a href="/about-us" className="btn btn-secondary my-2">About Us</a> 
                </p>
            </div>
            </section>
            <div className="album py-5 ">
                <div className="container" id="article-container">
                <div className="row justify-content-between">
                    <h3> Featured Articles</h3>
                </div>
                <br></br>
                    <div className="row">
                        {titlesRender}
                    </div>
                <a href="/find-articles" className="btn btn-primary my-2">Find more articles</a>
                </div>
                

            </div>
            {/* <div className="album py-5 ">
                <div className="container" id="article-container">
                <div class="row justify-content-between">
                    <h3> Economic Theory</h3>
                </div>
                <br></br>
                    <div class="row">
                        {titlesRender}
                    </div>
                </div>
            </div> */}
     
        </div>
        
        );
    }
}

export default Home;