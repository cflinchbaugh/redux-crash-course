import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}
const mapStateToProps = state => ({
    // Using posts key because that's what in the Reducer
    posts: state.posts.items,
    newPost: state.posts.item
});

//Connect allows retrieving data from the store by obtaining its current state
    // and/or changing it by dispatching an action,
    // here, we're linked to the store so we can dispatch the FETCH_POSTS action
export default connect(mapStateToProps, { fetchPosts })(Posts);