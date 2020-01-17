import React, { Component } from 'react';
// import axios from 'axios';
import { Route } from 'react-router-dom';

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    
    render () {

        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
                {/* <Posts /> */}
                {/* <section>
                    <FullPost 
                    id={this.state.selectedPostId}
                    />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;