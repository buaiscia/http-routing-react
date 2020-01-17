import React, { Component } from 'react';
import axios from '../../../axios'

import Post from '../../../components/Post/Post';
import './Posts.css'

class Posts extends Component {

    state = {
        posts : []
        // selectedPostId: null,
        // error: false
    }

    componentDidMount() {
        console.log(this.props);
        
        axios.get('/posts') // executed async, create promise
        .then((response) => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'alex'
                }
            })
            this.setState({ posts: updatedPosts})
            // console.log(response);
        })                                                 // executed once promise resolves
        .catch(error => {
            console.log(error);
            // this.setState({error: true})
        })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
   }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrogn</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                key={post.id}
                title={post.title}
                author={post.author}
                // {...this.props}
                clicked={() => this.postSelectedHandler(post.id)}/>
            })
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;